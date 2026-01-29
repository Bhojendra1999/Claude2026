"use client";

import Button from "../ui/Button";
import Container from "../ui/Container";
import { HiPhone, HiArrowRight } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="leaves"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1" fill="#16382B" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#leaves)" />
        </svg>
      </div> */}

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-dark/10 rounded-full blur-3xl"></div>

      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-dark/10 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaLeaf className="h-4 w-4 text-dark" />
            <span>Join 500+ Happy Customers</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark mb-6 leading-tight">
            Ready for a <span className="text-primary">Cleaner</span>,{" "}
            <span className="text-primary">Greener</span> Home?
          </h2>

          {/* Description */}
          <p className="text-lg text-dark/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the EcoClean difference. Our eco-friendly cleaning
            services are designed to give you a spotless home while protecting
            your family and the environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking" variant="outline" size="lg">
              Get Your Free Quote
              <HiArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href="tel:+13944955993" variant="outline" size="lg">
              <HiPhone className="mr-2 h-5 w-5" />
              Call +1-394-495-5993
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-dark/80">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-dark"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">100% Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-dark"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">
                Satisfaction Guaranteed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-dark"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
