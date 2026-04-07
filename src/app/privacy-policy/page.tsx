import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vihara - The Courtyard",
  description:
    "Learn how Vihara collects, uses, stores, and protects personal information shared through bookings, inquiries, and website visits.",
};

const sections = [
  {
    number: "01",
    title: "Introduction",
    content:
      "Vihara - The Courtyard respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard information when you visit our website, make a booking, send an inquiry, or otherwise interact with our team.",
  },
  {
    number: "02",
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, phone number, email address, booking dates, guest count, special requests, payment references, and any other information you voluntarily provide through booking forms, contact forms, WhatsApp, email, or phone conversations.\n\nWe may also collect limited technical information such as device type, browser type, pages visited, and general usage patterns to help us improve the website experience.",
  },
  {
    number: "03",
    title: "How We Use Your Information",
    content:
      "We use your information to process bookings, respond to inquiries, confirm reservations, coordinate stays or events, share pricing and availability, provide customer support, and communicate important booking-related updates.\n\nWe may also use information for internal record-keeping, service improvement, fraud prevention, safety, legal compliance, and limited marketing communication where appropriate.",
  },
  {
    number: "04",
    title: "Booking & Payment Information",
    content:
      "When you submit a booking request, we collect the details needed to manage your reservation. If you make payment through third-party providers such as payment gateways, the payment itself may be processed by those providers under their own privacy and security policies.\n\nVihara may store payment references, booking identifiers, or proof of payment submitted by you for verification, audit, and support purposes.",
  },
  {
    number: "05",
    title: "Guest & Identity Verification",
    content:
      "For stays, events, or legal compliance, we may request guest names, government-issued identification, or related verification details. This information may be used for security, operational coordination, and compliance with applicable laws or local authority requirements.",
  },
  {
    number: "06",
    title: "Cookies & Website Analytics",
    content:
      "Our website may use cookies or similar technologies to support core site functionality, understand user interactions, and improve performance. These tools help us understand which pages are useful, where users face friction, and how we can improve the booking journey.\n\nYou may be able to control cookies through your browser settings, though disabling certain cookies may affect website functionality.",
  },
  {
    number: "07",
    title: "How We Share Information",
    content:
      "We do not sell your personal information. We may share relevant information only when reasonably necessary with internal staff, approved service providers, payment partners, technology vendors, event vendors approved for your booking, or government and law-enforcement authorities where legally required.\n\nAny such sharing is limited to the information needed for operational, legal, safety, or service purposes.",
  },
  {
    number: "08",
    title: "Data Storage & Security",
    content:
      "We take reasonable administrative and technical measures to protect your information from unauthorized access, misuse, loss, or disclosure. However, no website, online system, or transmission method can be guaranteed to be completely secure.\n\nBy using our services, you acknowledge this inherent risk while we continue to take commercially reasonable steps to safeguard data.",
  },
  {
    number: "09",
    title: "Data Retention",
    content:
      "We retain information for as long as reasonably necessary for bookings, customer service, safety, dispute handling, accounting, legal compliance, and internal record-keeping. Retention periods may vary depending on the type of information and the purpose for which it was collected.",
  },
  {
    number: "10",
    title: "Third-Party Links & Services",
    content:
      "Our website may contain links to third-party websites, maps, payment services, social media pages, or embedded tools. We are not responsible for the privacy practices, policies, or content of those third-party services. We encourage you to review their policies separately before sharing personal information.",
  },
  {
    number: "11",
    title: "Children's Privacy",
    content:
      "Our services are not directed toward children acting independently. Where information relating to minors is shared as part of a family stay or private event, the responsible parent, guardian, or booking party is expected to provide and manage that information appropriately.",
  },
  {
    number: "12",
    title: "Your Choices",
    content:
      "You may contact us to update booking information, correct inaccurate details, or request clarification about how your information is being used. Subject to operational and legal requirements, we will make reasonable efforts to address such requests.\n\nIf you no longer wish to receive non-essential communications from us, you may request that we stop sending them.",
  },
  {
    number: "13",
    title: "Legal Compliance",
    content:
      "We may use or disclose information where necessary to comply with applicable law, enforce our booking terms, protect the property, investigate misuse, resolve disputes, or safeguard guests, staff, vendors, and the business.",
  },
  {
    number: "14",
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy from time to time to reflect operational, legal, or service changes. Any updates will be posted on this page, and the revised date will indicate the latest version in effect.",
  },
];

const commitmentItems = [
  "We collect only information that is reasonably relevant to bookings, inquiries, operations, safety, and support.",
  "We do not sell your personal data to third parties.",
  "We aim to handle your information responsibly and with appropriate care.",
  "We encourage you to contact us if you have questions about privacy or data handling.",
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA]">
      <section className="bg-[#2D4A3E] px-6 py-20 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D9B59D]">
          Vihara - The Courtyard
        </p>
        <h1
          className="mb-4 font-normal text-white"
          style={{
            fontFamily: "var(--font-cormorant, serif)",
            fontSize: "clamp(36px, 5vw, 64px)",
          }}
        >
          Privacy Policy
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60">
          This policy explains how we collect, use, and protect the personal
          information you share with us through bookings, inquiries, and website
          interactions.
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
              Privacy Notice
            </p>
            <p className="text-sm leading-relaxed text-[#555]">
              This policy applies to information shared with Vihara through the
              website, booking requests, payment verification, guest
              coordination, and direct communication channels such as email,
              calls, or messaging.
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
                {section.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={`${section.number}-${index}`}
                    className={`text-sm leading-relaxed text-[#555] ${
                      index > 0 ? "mt-3" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="mt-8 rounded-[16px] bg-[#2D4A3E] p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#D9B59D]">
            Our Commitment
          </p>
          <h2
            className="mb-4 font-normal text-white"
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              fontSize: "28px",
            }}
          >
            We aim to handle your information responsibly.
          </h2>
          <ul className="space-y-3">
            {commitmentItems.map((item) => (
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
            Questions about privacy or data handling? Reach out to our team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-[12px] bg-[#2D4A3E] px-6 py-3 text-sm text-white transition-colors hover:bg-[#1C3028]"
            >
              Contact Us
            </Link>
            <Link
              href="/terms"
              className="rounded-[12px] border border-[#2D4A3E] px-6 py-3 text-sm text-[#2D4A3E] transition-colors hover:bg-[#2D4A3E] hover:text-white"
            >
              View Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
