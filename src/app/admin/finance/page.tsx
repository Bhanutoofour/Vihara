"use client";

import { useEffect, useMemo, useState } from "react";
import { Booking } from "@/lib/supabase";
import { ADMIN_TOKEN } from "@/components/admin/config";

function getBalanceAmount(booking: Booking) {
  return (
    booking.balance_amount ??
    Math.max(0, booking.total_amount - (booking.paid_amount || 0))
  );
}

export default function AdminFinancePage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [paymentInputs, setPaymentInputs] = useState<Record<string, string>>({});
  const [actionError, setActionError] = useState("");
  const [actionSuccess, setActionSuccess] = useState("");

  useEffect(() => {
    loadBookings().catch(console.error);
  }, []);

  async function loadBookings() {
    const res = await fetch("/api/admin/all-bookings", {
      headers: { Authorization: `Bearer ${ADMIN_TOKEN}` },
    });
    const data = await res.json();
    const nextBookings = (data.bookings || []) as Booking[];
    setBookings(nextBookings);
    setPaymentInputs((current) => {
      const next = { ...current };
      nextBookings.forEach((booking) => {
        if (!(booking.id in next)) {
          next[booking.id] = String(getBalanceAmount(booking) || "");
        }
      });
      return next;
    });
  }

  async function recordBalancePayment(booking: Booking) {
    const inputValue = paymentInputs[booking.id];
    const payment = Math.max(0, Number(inputValue || 0));
    const currentPaid = booking.paid_amount || 0;
    const total = booking.total_amount;
    const nextPaid = Math.min(total, currentPaid + payment);
    const nextBalance = Math.max(0, total - nextPaid);

    setActionError("");
    setActionSuccess("");
    if (payment <= 0) {
      setActionError("Enter the balance amount received before confirming payment.");
      return;
    }

    setSavingId(booking.id);
    try {
      const res = await fetch("/api/admin/update-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify({
          booking_id: booking.id,
          paid_amount: nextPaid,
          balance_amount: nextBalance,
          admin_notes: booking.admin_notes
            ? `${booking.admin_notes}\nBalance payment updated in admin finance.`
            : "Balance payment updated in admin finance.",
          }),
      });
      const data = await res.json();
      if (!data.success) {
        setActionError(data.error || "Failed to update balance payment.");
        return;
      }

      setBookings((current) =>
        current.map((item) =>
          item.id === booking.id
            ? { ...item, paid_amount: nextPaid, balance_amount: nextBalance }
            : item,
        ),
      );
      setPaymentInputs((current) => ({
        ...current,
        [booking.id]: String(nextBalance),
      }));
      setActionSuccess(
        nextBalance === 0
          ? `Balance payment confirmed for ${booking.booking_ref}.`
          : `Payment updated for ${booking.booking_ref}.`,
      );
    } catch (error) {
      console.error(error);
      setActionError("Something went wrong while updating the balance payment.");
    } finally {
      setSavingId(null);
    }
  }

  const confirmed = useMemo(
    () => bookings.filter((booking) => booking.status === "confirmed"),
    [bookings],
  );
  const pending = bookings.filter(
    (booking) =>
      booking.status === "pending_payment" ||
      booking.status === "half_payment_done" ||
      booking.status === "payment_uploaded",
  );

  const grossRevenue = confirmed.reduce(
    (sum, booking) => sum + booking.total_amount,
    0,
  );
  const paidRevenue = bookings.reduce(
    (sum, booking) => sum + (booking.paid_amount || 0),
    0,
  );
  const outstanding = bookings.reduce(
    (sum, booking) => sum + getBalanceAmount(booking),
    0,
  );

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#B28B72] mb-2">
          Money overview
        </p>
        <h1 className="text-2xl font-medium text-[#1a1a1a]">Finance</h1>
        <p className="text-sm text-[#6f6a63] mt-1">
          Track advance payments and close the remaining balance after usage.
        </p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        {[
          { label: "Gross Revenue", value: grossRevenue },
          { label: "Collected", value: paidRevenue },
          { label: "Outstanding", value: outstanding },
          { label: "Pending Bookings", value: pending.length, plain: true },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-white border border-[#eee] rounded-[16px] p-4"
          >
            <p className="text-xs text-[#888] mb-1">{card.label}</p>
            <p className="text-2xl font-medium text-[#1a1a1a]">
              {card.plain
                ? card.value
                : `Rs. ${Number(card.value).toLocaleString("en-IN")}`}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#eee] rounded-[16px] overflow-hidden">
        <div className="px-5 py-4 border-b border-[#eee]">
          <h2 className="text-sm font-medium text-[#1a1a1a]">
            Balance payment confirmation
          </h2>
          <p className="text-xs text-[#888] mt-1">
            Enter the second payment received from the guest. Once the full
            amount is collected, balance becomes zero automatically.
          </p>
        </div>
        {(actionError || actionSuccess) && (
          <div className="px-5 pt-4">
            {actionError && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">
                {actionError}
              </p>
            )}
            {actionSuccess && (
              <p className="text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-lg">
                {actionSuccess}
              </p>
            )}
          </div>
        )}
        {confirmed.length === 0 ? (
          <div className="px-5 py-12 text-sm text-[#888] text-center">
            No confirmed bookings found.
          </div>
        ) : (
          confirmed.map((booking) => {
            const balance = getBalanceAmount(booking);
            return (
              <div
                key={booking.id}
                className="px-5 py-4 border-b border-[#f2f2f2] last:border-0"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-sm font-medium text-[#1a1a1a]">
                      {booking.name}
                    </p>
                    <p className="text-xs text-[#888]">
                      {booking.booking_ref} · {booking.check_in}
                      {booking.check_out ? ` -> ${booking.check_out}` : ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#1a1a1a]">
                      Rs. {booking.total_amount.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-[#888]">
                      Paid: Rs. {(booking.paid_amount || 0).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div className="rounded-xl bg-[#f9f7f4] px-4 py-3">
                    <p className="text-xs text-[#888] mb-1">Advance received</p>
                    <p className="text-sm font-medium text-[#1a1a1a]">
                      Rs. {(booking.paid_amount || 0).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#f9f7f4] px-4 py-3">
                    <p className="text-xs text-[#888] mb-1">Outstanding balance</p>
                    <p className="text-sm font-medium text-[#B85C38]">
                      Rs. {balance.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#f9f7f4] px-4 py-3">
                    <label className="text-xs text-[#888] mb-1 block">
                      Balance payment received
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={balance}
                      value={paymentInputs[booking.id] ?? ""}
                      onChange={(e) =>
                        setPaymentInputs((current) => ({
                          ...current,
                          [booking.id]: e.target.value,
                        }))
                      }
                      className="w-full border border-[#ddd] bg-white px-3 py-2 text-sm outline-none focus:border-[#2D4A3E] rounded-lg"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => recordBalancePayment(booking)}
                      disabled={savingId === booking.id || balance === 0}
                      className="w-full bg-[#2D4A3E] text-white px-4 py-2.5 text-sm rounded-lg hover:bg-[#1C3028] transition-colors disabled:opacity-40"
                    >
                      {balance === 0
                        ? "Settled"
                        : savingId === booking.id
                          ? "Saving..."
                          : "Confirm Payment"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
