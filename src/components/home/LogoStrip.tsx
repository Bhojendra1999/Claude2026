'use client';

import Container from '../ui/Container';

const logos = [
  { name: 'EcoTrust', initials: 'ET' },
  { name: 'GreenSeal', initials: 'GS' },
  { name: 'CleanCert', initials: 'CC' },
  { name: 'SafeHome', initials: 'SH' },
  { name: 'PureClean', initials: 'PC' },
  { name: 'NaturePro', initials: 'NP' },
];

export default function LogoStrip() {
  return (
    <section className="py-12 bg-muted border-y border-forest-100">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm text-body font-medium uppercase tracking-wider">
            Trusted by leading brands & certified by
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-sage/20 rounded-lg flex items-center justify-center">
                <span className="text-sage font-bold text-sm">{logo.initials}</span>
              </div>
              <span className="text-subheading font-semibold text-sm hidden sm:block">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
