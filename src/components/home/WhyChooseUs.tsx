import { HiShieldCheck, HiLightBulb, HiCheckCircle, HiCalendar } from 'react-icons/hi';
import Container from '../ui/Container';

const benefits = [
  {
    name: 'Experienced Professionals',
    description: 'Trained and vetted cleaning experts with years of experience',
    icon: HiShieldCheck,
  },
  {
    name: 'Eco-Friendly Products',
    description: 'Safe, green cleaning solutions for your family and pets',
    icon: HiLightBulb,
  },
  {
    name: '100% Satisfaction Guaranteed',
    description: 'Not happy? We\'ll re-clean for free or refund your money',
    icon: HiCheckCircle,
  },
  {
    name: 'Flexible Scheduling',
    description: 'Book one-time or recurring services that fit your schedule',
    icon: HiCalendar,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            Why Choose Our Service?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our professional cleaning team
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 mb-4">
                <benefit.icon className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.name}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
