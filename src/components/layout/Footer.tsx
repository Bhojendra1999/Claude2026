import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaLeaf } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import Container from '../ui/Container';

const footerNavigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Residential Cleaning', href: '/services/residential' },
    { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
    { name: 'Office Cleaning', href: '/services/office' },
    { name: 'Carpet Cleaning', href: '/services/carpet' },
    { name: 'Green Cleaning', href: '/services/green' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Service Areas', href: '/areas' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: FaFacebook },
  { name: 'Instagram', href: '#', icon: FaInstagram },
  { name: 'LinkedIn', href: '#', icon: FaLinkedin },
  { name: 'Twitter', href: '#', icon: FaTwitter },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      {/* Main Footer */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-forest-700 p-2.5 rounded-2xl">
                <FaLeaf className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-white">
                  Eco<span className="text-accent">Clean</span>
                </span>
                <span className="text-[10px] text-sage -mt-1 tracking-wide">Natural Cleaning</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs leading-relaxed">
              Professional eco-friendly cleaning services that prioritize your health
              and the environment. Making homes sparkle, naturally.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+13944955993" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <HiPhone className="h-5 w-5 text-sage" />
                <span>+1-394-495-5993</span>
              </a>
              <a href="mailto:hello@ecoclean.com" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <HiMail className="h-5 w-5 text-sage" />
                <span>hello@ecoclean.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <HiLocationMarker className="h-5 w-5 text-sage flex-shrink-0" />
                <span>123 Green Street, Auburn, CA 95603</span>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-white/60 mb-4">
              Subscribe for eco-friendly cleaning tips and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-forest-800 border border-forest-700 rounded-xl text-sm focus:border-sage focus:outline-none transition-colors placeholder-white/40"
              />
              <button
                type="button"
                className="w-full bg-accent text-dark px-4 py-3 rounded-xl text-sm font-semibold hover:bg-accent-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-forest-700">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} EcoClean. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/50 hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center text-white/60 hover:bg-sage hover:text-white transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
