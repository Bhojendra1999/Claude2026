'use client';

import Image from 'next/image';
import { HiPhone, HiStar, HiCheckCircle } from 'react-icons/hi';
import { FaLeaf } from 'react-icons/fa';
import Container from '../ui/Container';
import Button from '../ui/Button';

const features = [
  'Eco-friendly products',
  '100% satisfaction guaranteed',
  'Trained professionals',
];

export default function HeroSection() {
  return (
    <section className="relative bg-page py-16 lg:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sage/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sage/20 text-forest-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FaLeaf className="h-4 w-4 text-sage" />
              <span>Natural & Eco-Friendly</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-heading leading-tight mb-6">
              Premium{' '}
              <span className="relative inline-block">
                <span className="text-heading">Cleaning</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent -z-10 rounded-sm"></span>
              </span>{' '}
              Services for Your Home
            </h1>

            {/* Description */}
            <p className="text-lg text-body mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the difference of professional eco-friendly cleaning.
              We use only natural, non-toxic products that are safe for your family,
              pets, and the environment.
            </p>

            {/* Feature List */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-body">
                  <HiCheckCircle className="h-5 w-5 text-sage flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button href="/booking" variant="primary" size="lg" className="whitespace-nowrap">
                Get Free Quote
              </Button>
              <Button href="tel:+13944955993" variant="outline" size="lg" className="whitespace-nowrap">
                <HiPhone className="h-5 w-5 mr-2 flex-shrink-0" />
                Call Us Now
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="h-5 w-5 text-accent" />
                  ))}
                </div>
                <span className="text-sm text-body font-medium">4.9/5 Rating</span>
              </div>
              <div className="h-6 w-px bg-forest-200"></div>
              <div className="text-sm text-body">
                <span className="font-bold text-forest-800">500+</span> Happy Clients
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative bg-white rounded-3xl shadow-lifted p-4 lg:p-6">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero/interior.jpeg"
                  alt="Clean and organized living space"
                  width={800}
                  height={450}
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -left-6 bottom-20 bg-white rounded-2xl shadow-card p-4 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sage/20 rounded-xl flex items-center justify-center">
                    <FaLeaf className="h-6 w-6 text-sage" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-heading">100%</p>
                    <p className="text-xs text-body">Eco-Friendly</p>
                  </div>
                </div>
              </div>

              {/* Floating Experience Card */}
              <div className="absolute -right-4 top-20 bg-white rounded-2xl shadow-card p-4 hidden lg:block">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">10+</p>
                  <p className="text-xs text-body">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/50 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sage/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
