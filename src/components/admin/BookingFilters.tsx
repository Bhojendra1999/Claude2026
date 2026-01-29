'use client';

import { BookingFilters as FilterType, BookingStatus } from '@/types/admin';
import { HiSearch, HiX } from 'react-icons/hi';

interface BookingFiltersProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
  serviceTypes: string[];
}

export default function BookingFilters({
  filters,
  onFilterChange,
  serviceTypes,
}: BookingFiltersProps) {
  const statuses: (BookingStatus | 'all')[] = [
    'all',
    'pending',
    'confirmed',
    'completed',
    'cancelled',
  ];

  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filters, searchTerm: value });
  };

  const handleStatusChange = (status: BookingStatus | 'all') => {
    onFilterChange({ ...filters, status });
  };

  const handleServiceChange = (serviceType: string) => {
    onFilterChange({ ...filters, serviceType: serviceType || undefined });
  };

  const clearFilters = () => {
    onFilterChange({
      status: 'all',
      serviceType: undefined,
      searchTerm: undefined,
      sortBy: 'createdAt',
      sortOrder: 'desc',
    });
  };

  const hasActiveFilters =
    filters.searchTerm ||
    (filters.status && filters.status !== 'all') ||
    filters.serviceType;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-soft border border-forest-100">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-subheading" />
            <input
              type="text"
              placeholder="Search by name, email, phone, or booking ID..."
              value={filters.searchTerm || ''}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-forest-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Status filter */}
        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filters.status === status || (!filters.status && status === 'all')
                  ? 'bg-dark text-white'
                  : 'bg-muted text-body hover:bg-forest-100'
              }`}
            >
              {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Service type filter */}
        <select
          value={filters.serviceType || ''}
          onChange={(e) => handleServiceChange(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-forest-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all bg-white text-body"
        >
          <option value="">All Services</option>
          {serviceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Clear filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
          >
            <HiX className="w-4 h-4" />
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
