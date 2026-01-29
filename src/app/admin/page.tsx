'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Booking } from '@/types/booking';
import { BookingFilters, DashboardStats, BookingStatus } from '@/types/admin';
import AdminSidebar from '@/components/admin/AdminSidebar';
import StatsCard from '@/components/admin/StatsCard';
import BookingsTable from '@/components/admin/BookingsTable';
import BookingFiltersComponent from '@/components/admin/BookingFilters';
import ConfirmModal from '@/components/admin/ConfirmModal';
import { HiClipboardList, HiClock, HiCheckCircle, HiBan } from 'react-icons/hi';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [filters, setFilters] = useState<BookingFilters>({
    status: 'all',
    sortBy: 'createdAt',
    sortOrder: 'desc',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/auth');
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setError('❌ Unauthorized: Environment variables (ADMIN_USERNAME, ADMIN_PASSWORD) may not be set in Vercel.');
          router.push('/admin/login');
        }
      } catch (err) {
        setIsAuthenticated(false);
        setError(`⚠️ Auth check failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
        router.push('/admin/login');
      }
    };
    checkAuth();
  }, [router]);

  // Fetch bookings
  const fetchBookings = useCallback(async () => {
    if (!isAuthenticated) return;

    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.status) params.set('status', filters.status);
      if (filters.serviceType) params.set('serviceType', filters.serviceType);
      if (filters.searchTerm) params.set('search', filters.searchTerm);
      if (filters.sortBy) params.set('sortBy', filters.sortBy);
      if (filters.sortOrder) params.set('sortOrder', filters.sortOrder);

      const response = await fetch(`/api/admin/bookings?${params}`);
      const data = await response.json();

      if (response.ok) {
        setBookings(data.bookings);
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated, filters]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  // Handle status change
  const handleStatusChange = async (id: string, status: BookingStatus) => {
    try {
      const response = await fetch(`/api/admin/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchBookings();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  // Handle delete
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const response = await fetch(`/api/admin/bookings/${deleteId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBookings();
      }
    } catch (error) {
      console.error('Failed to delete booking:', error);
    } finally {
      setDeleteId(null);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Get unique service types for filter
  const serviceTypes = stats
    ? Object.keys(stats.byServiceType)
    : [];

  // Show loading while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-page">
      <AdminSidebar onLogout={handleLogout} />

      {/* Main content */}
      <div className="lg:ml-64 p-4 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-heading">Dashboard</h1>
          <p className="text-subheading mt-1">Manage your bookings</p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-700 text-sm font-medium">{error}</p>
            <p className="text-red-600 text-xs mt-2">
              Go to Vercel Dashboard → Settings → Environment Variables and add ADMIN_USERNAME and ADMIN_PASSWORD, then redeploy.
            </p>
          </div>
        )}

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard
              title="Total Bookings"
              value={stats.total}
              icon={<HiClipboardList className="w-6 h-6" />}
              color="blue"
            />
            <StatsCard
              title="Pending"
              value={stats.pending}
              icon={<HiClock className="w-6 h-6" />}
              color="yellow"
            />
            <StatsCard
              title="Confirmed"
              value={stats.confirmed}
              icon={<HiCheckCircle className="w-6 h-6" />}
              color="green"
            />
            <StatsCard
              title="Cancelled"
              value={stats.cancelled}
              icon={<HiBan className="w-6 h-6" />}
              color="red"
            />
          </div>
        )}

        {/* Filters */}
        <div className="mb-6">
          <BookingFiltersComponent
            filters={filters}
            onFilterChange={setFilters}
            serviceTypes={serviceTypes}
          />
        </div>

        {/* Bookings table */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full" />
          </div>
        ) : (
          <BookingsTable
            bookings={bookings}
            onStatusChange={handleStatusChange}
            onDelete={(id) => setDeleteId(id)}
          />
        )}
      </div>

      {/* Delete confirmation modal */}
      <ConfirmModal
        isOpen={!!deleteId}
        title="Delete Booking"
        message="Are you sure you want to delete this booking? This action cannot be undone."
        confirmText="Delete"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
