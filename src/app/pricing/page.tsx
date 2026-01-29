import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import PricingCalculator from '@/components/pricing/PricingCalculator';
import PricingFeatures from '@/components/pricing/PricingFeatures';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import { HiShieldCheck, HiBadgeCheck, HiStar, HiSparkles } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Pricing Calculator | Get Your Custom Cleaning Quote',
  description:
    'Calculate your cleaning service cost instantly. Transparent pricing based on home size, service type, and frequency. No hidden fees. Get your free quote now!',
};

const trustBadges = [
  { icon: HiShieldCheck, label: 'Insured & Bonded' },
  { icon: HiBadgeCheck, label: 'BBB Accredited' },
  { icon: HiStar, label: '5-Star Rated' },
  { icon: HiSparkles, label: 'Eco-Friendly' },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
      {/* Header Section */}
      <section className="py-16 bg-dark text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Transparent Pricing Calculator
            </h1>
            <p className="text-lg text-forest-200">
              Get an instant estimate for your cleaning service. No surprises, no hidden fees.
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <Container>
          <PricingCalculator />
        </Container>
      </section>

      {/* Features Section */}
      <PricingFeatures />

      {/* Pricing Promise Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-12">
            Our Pricing Promise
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-forest-100">
              <h3 className="text-lg font-bold text-heading mb-2">No Hidden Fees</h3>
              <p className="text-body text-sm">
                The price you see is the price you pay. No surprise charges or hidden fees.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-forest-100">
              <h3 className="text-lg font-bold text-heading mb-2">Flexible Cancellation</h3>
              <p className="text-body text-sm">
                Cancel or reschedule anytime with 24 hours notice. No cancellation fees.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-forest-100">
              <h3 className="text-lg font-bold text-heading mb-2">Price Match Guarantee</h3>
              <p className="text-body text-sm">
                Found a better price? We&apos;ll match it or beat it.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-subheading">
                  <Icon className="w-5 h-5 text-sage" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <PricingFAQ />

      {/* Custom Quote CTA */}
      <section className="py-16 bg-dark text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Quote?</h2>
            <p className="text-forest-200 mb-6">
              Have a unique property or special requirements? Contact us for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-dark font-semibold rounded-full hover:bg-accent-500 transition-colors"
              >
                Call (555) 123-4567
              </a>
              <a
                href="mailto:quotes@ecoclean.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </Container>
      </section>
      </main>
      <Footer />
    </>
  );
}
