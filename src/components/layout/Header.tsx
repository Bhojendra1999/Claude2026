'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiPhone } from 'react-icons/hi';
import { FaLeaf } from 'react-icons/fa';
import Container from '../ui/Container';
import Button from '../ui/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-dark text-white py-2">
        <Container>
          <div className="flex items-center justify-between text-sm">
            <div className="hidden sm:flex items-center gap-2">
              <FaLeaf className="h-3 w-3 text-sage" />
              <span className="text-white/80">Eco-friendly cleaning for a healthier home</span>
            </div>
            <a
              href="tel:+13944955993"
              className="flex items-center gap-2 hover:text-accent transition-colors ml-auto"
            >
              <HiPhone className="h-4 w-4" />
              <span>+1-394-495-5993</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-soft">
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="bg-dark p-2.5 rounded-2xl group-hover:bg-forest-800 transition-all shadow-soft">
                  <FaLeaf className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-heading">
                  Eco<span className="text-accent">Clean</span>
                </span>
                <span className="text-[10px] text-sage -mt-1 tracking-wide">Natural Cleaning</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-body hover:text-heading font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button href="/booking" variant="primary" size="md">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-body hover:text-heading transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-forest-100">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-body hover:text-heading hover:bg-page font-medium transition-colors px-4 py-3 rounded-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Button href="/booking" variant="primary" fullWidth>
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </nav>
    </header>
  );
}
