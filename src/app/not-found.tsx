import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-page px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-heading mb-4">404</h1>
        <p className="text-xl text-subheading mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-accent text-dark font-semibold rounded-full hover:bg-accent-500 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
