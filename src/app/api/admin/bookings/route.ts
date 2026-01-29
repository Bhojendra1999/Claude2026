import { NextRequest, NextResponse } from 'next/server';
import { Booking } from '@/types/booking';
import { BookingFilters, BookingsResponse, DashboardStats } from '@/types/admin';
import { isValidSession, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';
import fs from 'fs/promises';
import path from 'path';

const BOOKINGS_FILE = path.join(process.cwd(), 'src', 'data', 'bookings.json');

async function getBookings(): Promise<Booking[]> {
  try {
    const data = await fs.readFile(BOOKINGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function calculateStats(bookings: Booking[]): DashboardStats {
  const stats: DashboardStats = {
    total: bookings.length,
    pending: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
    byServiceType: {},
  };

  bookings.forEach((booking) => {
    // Count by status
    stats[booking.status]++;

    // Count by service type
    if (stats.byServiceType[booking.serviceType]) {
      stats.byServiceType[booking.serviceType]++;
    } else {
      stats.byServiceType[booking.serviceType] = 1;
    }
  });

  return stats;
}

function filterBookings(bookings: Booking[], filters: BookingFilters): Booking[] {
  let filtered = [...bookings];

  // Filter by status
  if (filters.status && filters.status !== 'all') {
    filtered = filtered.filter((b) => b.status === filters.status);
  }

  // Filter by service type
  if (filters.serviceType && filters.serviceType !== 'all') {
    filtered = filtered.filter((b) => b.serviceType === filters.serviceType);
  }

  // Filter by search term
  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    filtered = filtered.filter(
      (b) =>
        b.fullName.toLowerCase().includes(term) ||
        b.email.toLowerCase().includes(term) ||
        b.phone.includes(term) ||
        b.id.toLowerCase().includes(term)
    );
  }

  // Sort
  const sortBy = filters.sortBy || 'createdAt';
  const sortOrder = filters.sortOrder || 'desc';

  filtered.sort((a, b) => {
    let comparison = 0;
    if (sortBy === 'createdAt') {
      comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else if (sortBy === 'preferredDate') {
      comparison = new Date(a.preferredDate).getTime() - new Date(b.preferredDate).getTime();
    } else if (sortBy === 'fullName') {
      comparison = a.fullName.localeCompare(b.fullName);
    }
    return sortOrder === 'desc' ? -comparison : comparison;
  });

  return filtered;
}

// GET - List all bookings with filters
export async function GET(request: NextRequest) {
  // Check authentication
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!isValidSession(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const bookings = await getBookings();
    const stats = calculateStats(bookings);

    // Parse filters from query params
    const { searchParams } = new URL(request.url);
    const filters: BookingFilters = {
      status: (searchParams.get('status') as BookingFilters['status']) || 'all',
      serviceType: searchParams.get('serviceType') || undefined,
      searchTerm: searchParams.get('search') || undefined,
      sortBy: (searchParams.get('sortBy') as BookingFilters['sortBy']) || 'createdAt',
      sortOrder: (searchParams.get('sortOrder') as BookingFilters['sortOrder']) || 'desc',
    };

    const filteredBookings = filterBookings(bookings, filters);

    const response: BookingsResponse = {
      bookings: filteredBookings,
      stats,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}
