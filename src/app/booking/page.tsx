import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookingForm from '@/components/home/BookingForm';

export const metadata: Metadata = {
  title: 'Book Your Cleaning Service | EcoClean',
  description:
    'Schedule your eco-friendly cleaning service with EcoClean. Easy online booking with flexible scheduling. Get a free quote today!',
};

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="bg-page min-h-screen">
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
