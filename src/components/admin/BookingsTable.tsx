'use client';

import { Booking } from '@/types/booking';
import { BookingStatus } from '@/types/admin';
import StatusBadge from './StatusBadge';
import { HiTrash, HiChevronDown } from 'react-icons/hi';
import { useState, useRef, useEffect } from 'react';

interface BookingsTableProps {
  bookings: Booking[];
  onStatusChange: (id: string, status: BookingStatus) => void;
  onDelete: (id: string) => void;
}

interface DropdownPosition {
  top: number;
  left: number;
}

export default function BookingsTable({
  bookings,
  onStatusChange,
  onDelete,
}: BookingsTableProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<DropdownPosition>({ top: 0, left: 0 });
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown && !(e.target as Element).closest('.status-dropdown')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  const handleDropdownToggle = (bookingId: string) => {
    if (openDropdown === bookingId) {
      setOpenDropdown(null);
    } else {
      const button = buttonRefs.current[bookingId];
      if (button) {
        const rect = button.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + 4,
          left: rect.right - 144, // 144px = w-36 (9rem)
        });
      }
      setOpenDropdown(bookingId);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const statuses: BookingStatus[] = ['pending', 'confirmed', 'completed', 'cancelled'];

  return (
    <div className="bg-white rounded-2xl shadow-soft border border-forest-100">
      <div className="overflow-x-auto overflow-y-visible">
        <table className="w-full">
          <thead>
            <tr className="bg-muted border-b border-forest-100">
              <th className="px-6 py-4 text-left text-xs font-semibold text-subheading uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-subheading uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-subheading uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-subheading uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-subheading uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-subheading uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-forest-100">
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-subheading">
                  No bookings found
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-heading">{booking.fullName}</p>
                      <p className="text-sm text-subheading">{booking.email}</p>
                      <p className="text-xs text-subheading">{booking.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-body">{booking.serviceType}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-body">{formatDate(booking.preferredDate)}</p>
                    <p className="text-sm text-subheading">{booking.preferredTime}</p>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={booking.status} />
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-subheading">{formatDate(booking.createdAt)}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      {/* Status dropdown */}
                      <div className="status-dropdown">
                        <button
                          ref={(el) => { buttonRefs.current[booking.id] = el; }}
                          onClick={() => handleDropdownToggle(booking.id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-body bg-muted hover:bg-forest-100 rounded-lg transition-colors"
                        >
                          Status
                          <HiChevronDown className="w-4 h-4" />
                        </button>
                        {openDropdown === booking.id && (
                          <div
                            className="fixed w-36 bg-white rounded-lg shadow-lg border border-forest-100 py-1 z-[9999]"
                            style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
                          >
                            {statuses.map((status) => (
                              <button
                                key={status}
                                onClick={() => {
                                  onStatusChange(booking.id, status);
                                  setOpenDropdown(null);
                                }}
                                className={`w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors ${
                                  booking.status === status
                                    ? 'bg-muted font-medium'
                                    : ''
                                }`}
                              >
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      {/* Delete button */}
                      <button
                        onClick={() => onDelete(booking.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete booking"
                      >
                        <HiTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
