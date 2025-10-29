import { JSX } from "react";

export interface FAQItem {
  question: string;
  answer: string | JSX.Element;
  isHTML?: boolean;
}

export const faqData: FAQItem[] = [
  {
    question: "Is Covenant Care Association Inc. legal?",
    answer: (
      <>
        Yes. Covenant Care Association, Inc. is a duly registered and legitimate
        organization recognized by the{" "}
        <strong className="font-extrabold">Securities and Exchange Commission (SEC)</strong> and complies
        with all applicable government regulations.
        <br />
        <br />
        <strong>SEC REGISTRATION NO.:</strong> 2025070210546-21
      </>
    ),
    isHTML: true,
  },
  {
    question: "Is suicide covered?",
    answer: (
      <>
        No. Only <strong className="font-extrabold">natural causes of death</strong> that
        occur after the contestability period are covered under the policy.
      </>
    ),
    isHTML: true,
  },
  {
    question: "Can I both be a plan holder and a beneficiary?",
    answer: (
      <>
        Yes, you may be both a plan holder and a beneficiary,{" "}
        <strong className="font-extrabold">but not within the same policy.</strong>
      </>
    ),
    isHTML: true,
  },
  {
    question:
      "What happens if the ₱300 Covenant Fund or top-up is fully consumed?",
    answer: (
      <>
        Once the ₱300 maintaining Covenant Fund is{" "}
        <strong className="font-extrabold">fully consumed and not replenished</strong>, the
        policy is <strong className="font-extrabold">automatically forfeited and rendered unenforceable</strong>.
      </>
    ),
    isHTML: true,
  },
  {
    question: "Where can I claim the cash assistance benefit?",
    answer: (
      <>
        Claims may be filed at any <strong className="font-extrabold">authorized Covenant Care Association branch office</strong>.
        Our team will gladly assist you in completing the required documents and the processing of your claim.
      </>
    ),
    isHTML: false,
  },
  {
    question: "What documents are required to file a death claim?",
    answer: (
      <>
        The following documents must be prepared:{" "}
        <ul
          className="pl-6"
          style={{
            marginLeft: "1.5rem",
            marginTop: "0.5rem",
            listStyleType: "disc",
          }}
        >
          <li>
            Certified true copy of the <strong className="font-extrabold">Death Certificate</strong> from{" "}
            <strong className="font-extrabold">Local Civil Registry Office</strong>
          </li>
          <li>
            <strong className="font-extrabold">Valid ID</strong> of the benificiary
          </li>
          <li>
            <strong className="font-extrabold">Original Covenant Care Policy</strong>
          </li>
        </ul>
      </>
    ),
    isHTML: true,
  },
  {
    question: "How long does it take to process a claim?",
    answer: (
      <>
        Upon verified notification of death, <strong className="font-extrabold">₱20,000</strong> will be released immediately to the beneficiary. <br />
        The remaining <strong className="font-extrabold">₱45,000</strong> will be released <strong className="font-extrabold">within three (3) banking days</strong> after submission and verification of all required documents.
      </>
    ),
    isHTML: true,
  },
  {
    question: "What happens if multiple plan holders pass away at the same time?",
    answer: (
      <>
        Covenant Care is prepared for such events through the <strong className="font-extrabold">Covenant Fund</strong> and reserve system, ensuring that all valid claims are honored promptly. Our mission is to extend care and support to every family who needs it — <strong className="font-extrabold">because every life deserves love and care</strong>.
      </>
    )
  },
  {
    question: "Can I change my beneficiaries after registration?",
    answer: (
      <>
        Yes. Plan holders may update their beneficiaries by submitting a{" "}
        <strong className="font-extrabold">Beneficiary Update and Amendment Form</strong> at their
        respective Covenant Care branch office.
      </>
    ),
    isHTML: true,
  },
  {
    question: "Can I transfer my plan to someone else?",
    answer: (
      <>
        No. All plans are <strong className="font-extrabold">non-transferable</strong>. Once registered,
        the plan is <strong className="font-extrabold">exclusively assigned</strong> to the named holder.
      </>
    ),
    isHTML: true,
  },
  {
    question:
      "Is there an age limit for becoming a plan holder or beneficiary?",
    answer: (
      <>
        Plan holders must be at <strong className="font-extrabold">least 18 years old</strong> at the time
        of enrollment. Beneficiaries may be of any age.
      </>
    ),
    isHTML: true,
  },
  {
    question:
      "Are there other types of assistance aside from the ₱65,000 cash benefit?",
    answer: (
      <>
        At present, the primary benefit is the{" "}
        <strong className="font-extrabold">death cash assistance</strong>. However, Covenant Care aims to
        introduce <strong className="font-extrabold">additional wellness and support programs</strong> for
        active members in the future.
      </>
    ),
    isHTML: true,
  },
];
