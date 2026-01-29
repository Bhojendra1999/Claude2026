import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import TrustBadges from '@/components/shared/TrustBadges';
import ServiceFAQ from '@/components/services/ServiceFAQ';

export const metadata: Metadata = {
  title: 'Our Cleaning Services | Professional Home & Office Cleaning',
  description:
    'Explore our comprehensive cleaning services including regular cleaning, deep cleaning, move-in/out, and specialized services. Professional results guaranteed.',
};

const services = [
  {
    title: 'Regular Cleaning',
    description:
      'Maintain a consistently clean home with our recurring cleaning service. Perfect for busy families and professionals.',
    image: '/images/services/Clean living room or bedroom.jpeg',
    includedItems: [
      'Dusting and vacuuming',
      'Kitchen and bathroom cleaning',
      'Floor mopping',
      'Surface sanitizing',
    ],
    price: '$80',
    duration: '2-3 hours',
    href: '/services/regular-cleaning',
    badge: 'Most Popular',
  },
  {
    title: 'Deep Cleaning',
    description:
      'Intensive top-to-bottom cleaning for a fresh start. Ideal for seasonal cleaning or special occasions.',
    image: '/images/services/Detailed cleaning work.jpeg',
    includedItems: [
      'Everything in regular cleaning',
      'Baseboards and trim',
      'Inside cabinets and appliances',
      'Windows and blinds',
    ],
    price: '$120',
    duration: '4-6 hours',
    href: '/services/deep-cleaning',
  },
  {
    title: 'Move-In/Move-Out Cleaning',
    description:
      'Comprehensive cleaning for your moving day. Get your deposit back or welcome to a fresh home.',
    image: '/images/services/Empty room being cleaned.jpeg',
    includedItems: [
      'Complete deep cleaning',
      'All rooms and spaces',
      'Inside all cabinets',
      'Garage and storage areas',
    ],
    price: '$150',
    duration: '4-8 hours',
    href: '/services/move-in-move-out',
  },
  {
    title: 'Post-Construction Cleaning',
    description:
      'Remove dust, debris, and residue after renovation or construction projects.',
    image: '/images/services/Construction site being cleaned.jpeg',
    includedItems: [
      'Dust and debris removal',
      'Window and fixture cleaning',
      'Floor deep cleaning',
      'Air vent cleaning',
    ],
    price: '$180',
    duration: '6-10 hours',
    href: '/services/post-construction',
  },
  {
    title: 'Window Cleaning',
    description:
      'Professional window cleaning for crystal-clear views. Interior and exterior options available.',
    image: '/images/services/Clean, sparkling windows.jpeg',
    includedItems: [
      'Interior window cleaning',
      'Exterior window cleaning',
      'Screen cleaning',
      'Sill and track cleaning',
    ],
    price: '$50',
    duration: '1-2 hours',
    href: '/services/window-cleaning',
  },
  {
    title: 'Carpet Cleaning',
    description:
      'Deep carpet cleaning using professional equipment. Remove stains, odors, and allergens.',
    image: '/images/services/Carpet being professionally cleaned.jpeg',
    includedItems: [
      'Pre-treatment of stains',
      'Deep steam cleaning',
      'Odor removal',
      'Fast-drying methods',
    ],
    price: '$70',
    duration: '2-4 hours',
    href: '/services/carpet-cleaning',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
      {/* Header Section */}
      <section className="py-16 bg-dark text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Professional Cleaning Services
            </h1>
            <p className="text-lg text-forest-200">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <ServiceFeatures />

      {/* Trust & Safety Section */}
      <TrustBadges />

      {/* Pricing CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#f3f7f2' }}>
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-heading mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-body mb-8">
              Use our pricing calculator to get a custom estimate based on your home size and
              cleaning needs.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-4 bg-accent text-dark font-semibold rounded-full hover:bg-accent-500 transition-colors"
            >
              Calculate Your Price
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ />
      </main>
      <Footer />
    </>
  );
}
