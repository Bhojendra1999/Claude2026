import { HiBadgeCheck, HiShieldCheck, HiStar, HiLockClosed } from 'react-icons/hi';

const trustItems = [
  {
    icon: HiBadgeCheck,
    title: 'Verified & Trained Cleaners',
    description: 'All cleaners undergo thorough background checks and professional training',
  },
  {
    icon: HiShieldCheck,
    title: 'Fully Insured & Bonded',
    description: 'Complete liability coverage for your peace of mind',
  },
  {
    icon: HiStar,
    title: '100% Satisfaction Guarantee',
    description: "Not happy? We'll re-clean for free or refund your payment",
  },
  {
    icon: HiLockClosed,
    title: 'Secure & Private',
    description: 'Your personal information and home details are always protected',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-dark text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Safety & Peace of Mind
          </h2>
          <p className="text-forest-200 max-w-2xl mx-auto">
            People invite us into their homes — we take that trust seriously
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/20 rounded-xl mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-forest-200 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
