'use client';

import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    question: 'Are there any hidden fees?',
    answer:
      'No! The price shown includes everything except optional add-ons you select. No travel fees, no surprise charges.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, debit cards, and digital payments. Payment is processed after service completion.',
  },
  {
    question: 'Do you offer discounts?',
    answer:
      'Yes! Recurring services save up to 15%. We also offer referral discounts and seasonal promotions.',
  },
  {
    question: 'What if my home is larger or messier than average?',
    answer:
      "Our pricing accommodates typical conditions. For homes requiring extra attention, we'll provide a custom quote after a brief consultation.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're not happy, we'll re-clean for free. If still unsatisfied, we'll refund your payment.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-12">
          Pricing Questions?
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-forest-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-heading pr-4">{faq.question}</span>
                <HiChevronDown
                  className={`w-5 h-5 text-subheading flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-body">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
