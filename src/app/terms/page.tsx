import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vihara - The Courtyard",
  description:
    "Read the booking, stay, event, and property terms that apply to all Vihara reservations.",
};

const sections = [
  {
    number: "01",
    title: "Booking Confirmation & Payment",
    content:
      "Booking will be confirmed only upon receipt of the advance payment specified by Management. The remaining balance must be cleared before check-in or event commencement. Management reserves the right to deny entry if full payment is not completed.",
  },
  {
    number: "02",
    title: "Guest Capacity",
    content:
      "The number of guests must not exceed the capacity of the package booked. Additional guests will be charged as per Vihara pricing policy. Management reserves the right to restrict entry or terminate the event if limits are exceeded.",
  },
  {
    number: "03",
    title: "Security Deposit",
    content:
      "A refundable security deposit is collected prior to the event or stay. Any damage, breakage, or misuse of property including furniture, decor, artworks, pool area, landscaping, fixtures, or equipment will be deducted from the deposit.\n\nStaycation: Rs. 5,000 · Event: Rs. 10,000\n\nThe deposit will be refunded after checkout/event completion, subject to property inspection.",
  },
  {
    number: "04",
    title: "Property Protection & Liability",
    content:
      "The Client is responsible for the behavior and conduct of all guests and vendors. Any damage caused to the property will be financially borne by the Client. Vihara Management shall not be liable for third-party damages or misconduct.",
  },
  {
    number: "05",
    title: "Event Timing",
    content:
      "The event must strictly follow the booked time slot. Extensions require prior approval and additional charges may apply. Management reserves the right to enforce time limits to ensure smooth operations.",
  },
  {
    number: "06",
    title: "Music & Noise Regulations",
    content:
      "Music must comply with local regulations in Telangana. Management may reduce or stop music if noise levels violate local laws or disturb the neighborhood. Quiet hours are generally enforced from 10:30 PM to 11:00 PM.",
  },
  {
    number: "07",
    title: "Fireworks & Sound",
    content:
      "Fireworks, crackers, DJ, and amplified sound are permitted only with prior approval and must strictly comply with local laws and permitted timings. Any permissions, safety measures, damages, or legal issues arising shall be the sole responsibility of the Client. Vihara Management reserves the right to restrict or stop such activities at any time.",
  },
  {
    number: "08",
    title: "Vendors & Decorations",
    content:
      "External vendors such as decorators, caterers, DJs, or planners must be pre-approved by Management. Decorations must not damage walls, furniture, flooring, artworks, or landscape. Unapproved vendors may be denied access.",
  },
  {
    number: "09",
    title: "Pool & Outdoor Area Usage",
    content:
      "Guests using the swimming pool or outdoor facilities do so at their own risk. Children must be supervised by responsible adults at all times. The Client acknowledges that pool usage involves inherent risk and agrees that Vihara Management shall not be liable for accidents or injuries occurring in or around the pool.",
  },
  {
    number: "10",
    title: "Stay & Accommodation Rules",
    content:
      "Check-in and check-out times must be strictly followed.\n\nCheck-in: 3:00 PM · Check-out: 11:00 AM\n\nGuests must not exceed the permitted overnight capacity of the property. Late check-out is subject to availability and additional charges.",
  },
  {
    number: "11",
    title: "Alcohol & Excise Compliance",
    content:
      "If alcohol is served during an event, the Client is responsible for obtaining any required temporary or event-based permit as per State Excise regulations. Vihara Management will not be responsible for violations of excise laws.",
  },
  {
    number: "12",
    title: "Cleanliness",
    content:
      "Guests must maintain reasonable cleanliness throughout their stay or event. Excessive cleaning requirements or damages requiring restoration will be charged to the Client at actuals.",
  },
  {
    number: "13",
    title: "Prohibited Activities",
    content:
      "Illegal substances, dangerous activities, vandalism, or disturbing the neighborhood are strictly prohibited. Management may terminate the event without refund if such activities occur.",
  },
  {
    number: "14",
    title: "Zero Tolerance - Illegal Substances",
    content:
      "The use, possession, or distribution of illegal drugs or banned substances is strictly prohibited at Vihara. Management reserves the right to immediately terminate the booking and notify authorities if such activity is detected.",
  },
  {
    number: "15",
    title: "Personal Belongings",
    content:
      "Management is not responsible for loss, theft, or damage to personal belongings of guests or vendors. Guests are advised to safeguard their valuables at all times.",
  },
  {
    number: "16",
    title: "Cancellation Policy",
    content:
      "Advance payments are non-refundable. Date changes may be permitted subject to availability and management approval. Requests for rescheduling must be made at least 7 days prior to the booked date.",
  },
  {
    number: "17",
    title: "Extra Guest Penalty",
    content:
      "If guest count exceeds the booked capacity, additional charges per guest will apply as determined by Vihara Management. Guests beyond the permitted limit may be denied entry.",
  },
  {
    number: "18",
    title: "Government ID Verification",
    content:
      "All guests staying overnight must provide a valid government-issued photo ID at check-in. Acceptable IDs include Aadhaar Card, Passport, Driving License, or Voter ID. Management may record or retain copies of IDs for security purposes.",
  },
  {
    number: "19",
    title: "Guest Identification for Events",
    content:
      "For private events, the Client may be required to share a guest list or identification details if requested by Management for safety or legal compliance.",
  },
  {
    number: "20",
    title: "Smoking Policy",
    content:
      "Smoking is allowed only in designated outdoor areas. Smoking is strictly prohibited indoors. Violation of this policy may result in forfeiture of the security deposit.",
  },
  {
    number: "21",
    title: "Pet Policy",
    content:
      "Pets are allowed only with prior written permission from Management. Guests are fully responsible for their pets. Any damage caused by pets will be charged to the Client.",
  },
  {
    number: "22",
    title: "CCTV & Security",
    content:
      "CCTV cameras are installed in common areas for the safety and security of all guests. No cameras are placed in private areas. Footage may be reviewed in case of incidents or disputes.",
  },
  {
    number: "23",
    title: "Right to Refuse Service",
    content:
      "Vihara Management reserves the right to refuse entry, cancel a booking, or stop an event if rules are violated, safety is compromised, or activities are deemed inappropriate or unlawful.",
  },
  {
    number: "24",
    title: "Nature Disclaimer",
    content:
      "As a nature property, insects, birds, outdoor elements, and seasonal weather conditions may be present. Vihara Management shall not be held liable for inconveniences caused by natural occurrences.",
  },
  {
    number: "25",
    title: "Photography & Videography",
    content:
      "Guests may take personal photographs and videos for private use. Commercial shoots, pre-wedding shoots, or film productions require a separate booking and prior approval from Management. Vihara reserves the right to use property photographs for marketing purposes.",
  },
  {
    number: "26",
    title: "Force Majeure",
    content:
      "Vihara Management shall not be held liable for cancellations or disruptions caused by circumstances beyond reasonable control including but not limited to natural disasters, government orders, power outages, or public health emergencies. In such cases, rescheduling will be offered subject to availability.",
  },
];

const undertakingItems = [
  "You have read and understood all the above terms and conditions.",
  "You take full responsibility for your guests, vendors, and activities during the event or stay.",
  "You agree to abide by all rules set forth by Vihara Management.",
  "You acknowledge that violation of any terms may result in termination of your booking without refund.",
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA]">
      <section className="bg-[#2D4A3E] px-6 py-20 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D9B59D]">
          Vihara - The Courtyard
        </p>
        <h1
          className="mb-4 text-white font-normal"
          style={{
            fontFamily: "var(--font-cormorant, serif)",
            fontSize: "clamp(36px, 5vw, 64px)",
          }}
        >
          Terms & Conditions
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60">
          By confirming a booking at Vihara, you agree to comply with all terms
          and conditions outlined below. Please read carefully before
          proceeding.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40">
          <span>Last updated: April 7, 2026</span>
          <span>&middot;</span>
          <span>Kothur, Hyderabad, Telangana</span>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex items-start gap-4 rounded-[16px] border border-[#eee] bg-white p-6">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#2D4A3E]">
            <span className="text-lg text-[#D9B59D]">*</span>
          </div>
          <div>
            <p className="mb-1 text-sm font-medium text-[#1a1a1a]">
              Important Notice
            </p>
            <p className="text-sm leading-relaxed text-[#555]">
              These terms apply to all bookings including staycations, events,
              movies, and pre-wedding shoots. The Client (booking party) is
              responsible for ensuring all guests are aware of and comply with
              these conditions.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-4 px-6 pb-16">
        {sections.map((section) => (
          <div
            key={section.number}
            className="overflow-hidden rounded-[16px] border border-[#eee] bg-white"
          >
            <div className="flex items-start gap-5 p-6">
              <div className="flex-shrink-0">
                <span
                  className="font-normal text-[#D9B59D]"
                  style={{
                    fontFamily: "var(--font-cormorant, serif)",
                    fontSize: "28px",
                  }}
                >
                  {section.number}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="mb-2 text-base font-medium text-[#2D4A3E]">
                  {section.title}
                </h2>
                {section.content.split("\n\n").map((paragraph, index) => {
                  const highlightRow =
                    paragraph.includes("·") &&
                    (paragraph.includes("Rs.") || paragraph.includes("Check-in:"));

                  return (
                    <p
                      key={`${section.number}-${index}`}
                      className={`text-sm leading-relaxed ${
                        index > 0 ? "mt-3" : ""
                      } ${
                        highlightRow
                          ? "rounded-lg bg-[#F5F1EA] px-4 py-2 font-medium text-[#1a1a1a]"
                          : "text-[#555]"
                      }`}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        <div className="mt-8 rounded-[16px] bg-[#2D4A3E] p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#D9B59D]">
            Client Undertaking
          </p>
          <h2
            className="mb-4 font-normal text-white"
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              fontSize: "28px",
            }}
          >
            By making a booking, you confirm that:
          </h2>
          <ul className="space-y-3">
            {undertakingItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
              >
                <span className="mt-0.5 flex-shrink-0 text-[#D9B59D]">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pb-8 pt-4 text-center">
          <p className="mb-4 text-sm text-[#888]">
            Have questions about our terms? We&apos;re happy to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-[12px] bg-[#2D4A3E] px-6 py-3 text-sm text-white transition-colors hover:bg-[#1C3028]"
            >
              Contact Us
            </Link>
            <Link
              href="/booking"
              className="rounded-[12px] border border-[#2D4A3E] px-6 py-3 text-sm text-[#2D4A3E] transition-colors hover:bg-[#2D4A3E] hover:text-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
