'use client';

import { HiCalendar, HiClipboardList, HiSparkles, HiThumbUp } from 'react-icons/hi';
import Container from '../ui/Container';

const steps = [
  {
    number: '01',
    icon: HiCalendar,
    title: 'Book Online',
    description: 'Schedule your cleaning service through our easy online booking system or give us a call.',
  },
  {
    number: '02',
    icon: HiClipboardList,
    title: 'Get a Quote',
    description: 'Receive a transparent, no-obligation quote tailored to your specific cleaning needs.',
  },
  {
    number: '03',
    icon: HiSparkles,
    title: 'We Clean',
    description: 'Our trained professionals arrive on time and clean your space using eco-friendly products.',
  },
  {
    number: '04',
    icon: HiThumbUp,
    title: 'Enjoy',
    description: 'Relax in your spotless, fresh-smelling home. Satisfaction guaranteed or we re-clean free!',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-sage/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sage font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-heading mb-4">
            Simple <span className="text-accent">4-Step</span> Process
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Getting your home professionally cleaned has never been easier.
            Follow these simple steps to a cleaner, healthier living space.
          </p>
        </div>

        {/* Steps Grid - Equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative h-full">
              {/* Connector Line - z-0 to appear behind card */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-sage/30 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full"></div>
                </div>
              )}

              {/* Card with fixed height - White background for visibility */}
              <div className="bg-white rounded-3xl p-8 border border-forest-100 shadow-soft hover:shadow-card transition-all duration-300 group h-full flex flex-col min-h-[280px] relative z-10">
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-sage/30 group-hover:text-sage/50 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 bg-dark rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors flex-shrink-0">
                    <step.icon className="h-7 w-7 text-white group-hover:text-dark transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-heading mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
