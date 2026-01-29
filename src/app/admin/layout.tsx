import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | EcoClean',
  description: 'Manage bookings and customers',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-page">
      {children}
    </div>
  );
}
