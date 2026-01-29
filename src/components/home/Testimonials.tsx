'use client';

import { HiStar } from 'react-icons/hi';
import Container from '../ui/Container';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    location: 'Auburn, CA',
    text: 'EcoClean transformed my home! The team was incredibly thorough and I love knowing they use eco-friendly products. My allergies have improved significantly since switching to their service.',
    rating: 5,
    featured: false,
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    location: 'Sacramento, CA',
    text: 'As a business owner, I need reliable cleaning services. EcoClean has been exceptional - punctual, professional, and their green cleaning approach aligns perfectly with our company values. Highly recommend!',
    rating: 5,
    featured: true,
  },
  {
    name: 'Emily Rodriguez',
    role: 'New Mom',
    location: 'Roseville, CA',
    text: 'With a newborn, I was worried about harsh chemicals. EcoClean uses only baby-safe products and does an amazing job. I feel so much better about the cleanliness of our home now.',
    rating: 5,
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sage font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-heading mb-4">
            What Our <span className="text-accent">Clients</span> Say
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Dont just take our word for it. Hear from our satisfied customers
            about their experience with EcoClean.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className={`rounded-3xl p-8 transition-all duration-300 ${
                testimonial.featured
                  ? 'bg-dark text-white shadow-lifted lg:scale-105 lg:-my-4'
                  : 'bg-white border border-forest-100 shadow-soft hover:shadow-card'
              }`}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar
                    key={i}
                    className="h-5 w-5 text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className={`text-lg leading-relaxed mb-8 ${
                  testimonial.featured ? 'text-white/90' : 'text-body'
                }`}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ${
                    testimonial.featured
                      ? 'bg-forest-700 text-white'
                      : 'bg-sage/20 text-sage'
                  }`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p
                    className={`font-semibold ${
                      testimonial.featured ? 'text-white' : 'text-heading'
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-sm ${
                      testimonial.featured ? 'text-white/70' : 'text-body'
                    }`}
                  >
                    {testimonial.role} | {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-forest-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-sage mb-2">500+</p>
              <p className="text-body">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-sage mb-2">10+</p>
              <p className="text-body">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-sage mb-2">98%</p>
              <p className="text-body">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-sage mb-2">100%</p>
              <p className="text-body">Eco-Friendly</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
