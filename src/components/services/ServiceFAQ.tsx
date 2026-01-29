'use client';

import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    question: 'How often should I schedule regular cleaning?',
    answer:
      'Most clients prefer weekly or bi-weekly cleaning. We offer flexible scheduling to match your needs.',
  },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer:
      "No, we bring all necessary supplies and equipment. However, if you have preferred products, we're happy to use them.",
  },
  {
    question: 'Are your cleaning products safe for pets and children?',
    answer:
      'Yes! We use eco-friendly, non-toxic products that are safe for your entire family.',
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're not happy, we'll re-clean for free.",
  },
];

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-12">
          Common Questions
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
