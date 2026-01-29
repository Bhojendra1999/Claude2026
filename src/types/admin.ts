import { Booking } from './booking';

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface BookingFilters {
  status?: BookingStatus | 'all';
  serviceType?: string;
  searchTerm?: string;
  sortBy?: 'createdAt' | 'preferredDate' | 'fullName';
  sortOrder?: 'asc' | 'desc';
}

export interface DashboardStats {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
  byServiceType: Record<string, number>;
}

export interface BookingsResponse {
  bookings: Booking[];
  stats: DashboardStats;
}

export interface AdminSession {
  token: string;
  expiresAt: number;
}
