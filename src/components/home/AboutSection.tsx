'use client';

import { HiCheckCircle, HiShieldCheck, HiUserGroup, HiClock } from 'react-icons/hi';
import { FaLeaf } from 'react-icons/fa';
import Container from '../ui/Container';
import Button from '../ui/Button';

const highlights = [
  {
    icon: FaLeaf,
    title: '100% Eco-Friendly',
    description: 'All natural, plant-based cleaning products',
  },
  {
    icon: HiShieldCheck,
    title: 'Fully Insured',
    description: 'Complete coverage for your peace of mind',
  },
  {
    icon: HiUserGroup,
    title: 'Trained Team',
    description: 'Background-checked professional cleaners',
  },
  {
    icon: HiClock,
    title: 'Flexible Scheduling',
    description: 'Book at your convenience, 7 days a week',
  },
];

const bulletPoints = [
  'Non-toxic, biodegradable cleaning solutions',
  'Sustainable practices and zero-waste approach',
  'HEPA-filtered vacuums for cleaner air',
  'Pet-friendly and child-safe products',
  'Satisfaction guaranteed or we re-clean for free',
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Main large image */}
              <div className="col-span-7 row-span-2">
                <div className="rounded-3xl overflow-hidden shadow-card h-full">
                  <img
                    src="/images/hero/interior.jpeg"
                    alt="Clean modern interior"
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
              </div>
              {/* Top right image */}
              <div className="col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img
                    src="/images/hero/cleaner.jpeg"
                    alt="Professional cleaner at work"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              {/* Bottom right image */}
              <div className="col-span-5">
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img
                    src="/images/hero/team.jpeg"
                    alt="Our cleaning team"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Full width image below */}
            <div className="mt-4 rounded-3xl overflow-hidden shadow-card">
              <img
                src="/images/hero/img.jpeg"
                alt="Professional cleaning service"
                className="w-full h-40 object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-dark text-white rounded-2xl p-6 shadow-lifted hidden lg:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm text-white/70">Years Experience</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/40 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sage/30 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sage font-semibold text-sm uppercase tracking-wider mb-3">
              About EcoClean
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-heading mb-6">
              We Believe in{' '}
              <span className="text-accent">Clean Homes</span>{' '}
              and a Clean Planet
            </h2>
            <p className="text-body mb-8 leading-relaxed">
              Founded with a mission to revolutionize the cleaning industry, EcoClean
              combines professional-grade cleaning with environmental responsibility.
              Every product we use is carefully selected to be effective yet gentle
              on both your home and the earth.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <HiCheckCircle className="h-6 w-6 text-sage flex-shrink-0 mt-0.5" />
                  <span className="text-body">{point}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/about" variant="primary" size="lg">
                Learn More About Us
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-muted rounded-2xl p-6 text-center border border-forest-100 hover:shadow-soft transition-shadow"
            >
              <div className="w-14 h-14 bg-sage/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-sage" />
              </div>
              <h3 className="font-semibold text-heading mb-2">{item.title}</h3>
              <p className="text-sm text-body">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
