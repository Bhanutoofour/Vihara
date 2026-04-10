alter table public.bookings
  add column if not exists paid_amount numeric not null default 0;

alter table public.bookings
  add column if not exists balance_amount numeric not null default 0;

update public.bookings
set
  paid_amount = coalesce(paid_amount, 0),
  balance_amount = greatest(
    0,
    coalesce(total_amount, 0) - coalesce(paid_amount, 0)
  );

alter table public.bookings
  alter column paid_amount set default 0;

alter table public.bookings
  alter column balance_amount set default 0;

alter table public.bookings
  add constraint bookings_payment_amounts_nonnegative
  check (paid_amount >= 0 and balance_amount >= 0);

comment on column public.bookings.paid_amount is
  'Amount received from the guest so far.';

comment on column public.bookings.balance_amount is
  'Remaining payable amount after subtracting paid_amount from total_amount.';

-- If your status column is text or varchar, this update is enough for the new admin status.
-- If it is a postgres enum, add the value manually before using it:
-- alter type booking_status add value if not exists 'half_payment_done';
