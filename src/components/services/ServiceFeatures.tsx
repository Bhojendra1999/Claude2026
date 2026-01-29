import { HiClipboardList, HiCog, HiShieldCheck } from 'react-icons/hi';

const features = [
  {
    icon: HiClipboardList,
    title: 'Customizable Plans',
    description: 'Tailor each service to your specific needs and preferences',
  },
  {
    icon: HiCog,
    title: 'Professional Equipment',
    description: 'Commercial-grade tools and eco-friendly cleaning products',
  },
  {
    icon: HiShieldCheck,
    title: 'Insured & Bonded',
    description: 'Fully insured service for your peace of mind',
  },
];

export default function ServiceFeatures() {
  return (
    <section className="py-16 bg-muted">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-heading text-center mb-12">
          What Makes Our Service Different?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
