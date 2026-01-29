import HeroSection from '@/components/home/HeroSection';
import LogoStrip from '@/components/home/LogoStrip';
import ServicesPreview from '@/components/home/ServicesPreview';
import AboutSection from '@/components/home/AboutSection';
import TrustBadges from '@/components/shared/TrustBadges';
import Testimonials from '@/components/home/Testimonials';
import ProcessSection from '@/components/home/ProcessSection';
import BookingForm from '@/components/home/BookingForm';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <ServicesPreview />
      <AboutSection />
      <TrustBadges />
      <Testimonials />
      <ProcessSection />
      <BookingForm />
      <BlogSection />
      <CTASection />
    </>
  );
}
