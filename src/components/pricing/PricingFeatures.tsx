import { HiUserGroup, HiSparkles, HiShieldCheck, HiCalendar } from 'react-icons/hi';

const features = [
  {
    icon: HiUserGroup,
    title: 'Professional Team',
    description: 'Trained and background-checked cleaners',
  },
  {
    icon: HiSparkles,
    title: 'All Supplies Provided',
    description: 'We bring all equipment and eco-friendly products',
  },
  {
    icon: HiShieldCheck,
    title: 'Satisfaction Guarantee',
    description: "100% satisfaction or we'll re-clean for free",
  },
  {
    icon: HiCalendar,
    title: 'Flexible Scheduling',
    description: 'Easy online booking and rescheduling',
  },
];

export default function PricingFeatures() {
  return (
    <section className="py-16 bg-muted">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-12">
          What You Get With Every Service
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-soft border border-forest-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-sage/20 rounded-xl mb-4">
                  <Icon className="w-7 h-7 text-sage" />
                </div>
                <h3 className="text-lg font-bold text-heading mb-2">{feature.title}</h3>
                <p className="text-body text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
