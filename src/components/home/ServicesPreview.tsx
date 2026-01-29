'use client';

import Link from 'next/link';
import Container from '../ui/Container';
import { HiHome, HiSparkles, HiOfficeBuilding, HiColorSwatch, HiArrowRight } from 'react-icons/hi';
import { FaLeaf, FaCouch } from 'react-icons/fa';

const services = [
  {
    name: 'Residential Cleaning',
    description: 'Complete home cleaning with eco-friendly products',
    icon: HiHome,
    href: '/services/residential-cleaning',
    color: 'bg-sage/20 text-sage',
  },
  {
    name: 'Deep Cleaning',
    description: 'Thorough deep clean for every corner of your space',
    icon: HiSparkles,
    href: '/services/deep-cleaning',
    color: 'bg-accent/20 text-accent-600',
  },
  {
    name: 'Office Cleaning',
    description: 'Professional cleaning for productive workplaces',
    icon: HiOfficeBuilding,
    href: '/services/office-cleaning',
    color: 'bg-sage/20 text-sage',
  },
  {
    name: 'Carpet Cleaning',
    description: 'Restore your carpets with natural cleaning methods',
    icon: HiColorSwatch,
    href: '/services/carpet-cleaning',
    color: 'bg-accent/20 text-accent-600',
  },
  {
    name: 'Upholstery Cleaning',
    description: 'Refresh your furniture with gentle care',
    icon: FaCouch,
    href: '/services/upholstery-cleaning',
    color: 'bg-sage/20 text-sage',
  },
  {
    name: 'Green Cleaning',
    description: 'Zero-waste, 100% sustainable cleaning solutions',
    icon: FaLeaf,
    href: '/services/green-cleaning',
    color: 'bg-accent/20 text-accent-600',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sage font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-heading mb-4">
            Professional{' '}
            <span className="text-accent">Eco-Friendly</span>{' '}
            Cleaning
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            We offer a wide range of sustainable cleaning services designed to keep
            your spaces spotless while protecting the environment.
          </p>
        </div>

        {/* Services Grid with Central Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First 3 service cards */}
          {services.slice(0, 3).map((service) => (
            <Link key={service.name} href={service.href} className="group">
              <div className="bg-muted rounded-3xl p-6 h-full hover:shadow-card transition-all duration-300 group-hover:-translate-y-1 border border-forest-100">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-subheading transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-body text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-sage text-sm font-medium group-hover:text-sage-dark">
                      Learn more
                      <HiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Central Featured Image */}
          <div className="md:col-span-2 lg:col-span-3 my-8">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/images/hero/cleaner.jpeg"
                alt="Professional eco-friendly cleaning service"
                className="w-full h-[300px] lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/50 flex items-center">
                <div className="px-8 lg:px-16 max-w-xl">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Committed to a Cleaner, Greener Future
                  </h3>
                  <p className="text-white/80 mb-6">
                    Our team uses only biodegradable, plant-based cleaning products
                    that are tough on dirt but gentle on the planet.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-accent text-dark px-6 py-3 rounded-full font-semibold hover:bg-accent-300 transition-colors"
                  >
                    View All Services
                    <HiArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Last 3 service cards */}
          {services.slice(3).map((service) => (
            <Link key={service.name} href={service.href} className="group">
              <div className="bg-muted rounded-3xl p-6 h-full hover:shadow-card transition-all duration-300 group-hover:-translate-y-1 border border-forest-100">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-subheading transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-body text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-sage text-sm font-medium group-hover:text-sage-dark">
                      Learn more
                      <HiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
