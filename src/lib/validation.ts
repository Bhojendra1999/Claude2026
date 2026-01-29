import { BookingFormData, BookingFormErrors } from '@/types/booking';

/**
 * Parses a time string like "8:00 AM" or "2:00 PM" to hours in 24-hour format
 */
function parseTimeToHours(timeStr: string): number {
  const [time, period] = timeStr.trim().split(' ');
  const [hours, minutes] = time.split(':').map(Number);
  let hour24 = hours;

  if (period === 'PM' && hours !== 12) {
    hour24 = hours + 12;
  } else if (period === 'AM' && hours === 12) {
    hour24 = 0;
  }

  return hour24 + (minutes / 60);
}

export function validateBookingForm(data: BookingFormData): BookingFormErrors {
  const errors: BookingFormErrors = {};

  // Full Name validation
  if (!data.fullName.trim()) {
    errors.fullName = 'Full name is required';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(data.phone) || data.phone.replace(/\D/g, '').length < 10) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Service Type validation
  if (!data.serviceType) {
    errors.serviceType = 'Please select a service type';
  }

  // Date validation
  if (!data.preferredDate) {
    errors.preferredDate = 'Please select a preferred date';
  } else {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.preferredDate = 'Please select a future date';
    }
  }

  // Time validation
  if (!data.preferredTime) {
    errors.preferredTime = 'Please select a preferred time';
  } else if (data.preferredDate) {
    // Check if selected time is in the past when today's date is selected
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    if (data.preferredDate === todayStr) {
      // Parse the start time from the time slot (e.g., "8:00 AM - 10:00 AM")
      const startTimeStr = data.preferredTime.split(' - ')[0];
      const startHour = parseTimeToHours(startTimeStr);
      const currentHour = now.getHours() + now.getMinutes() / 60;

      if (startHour <= currentHour) {
        errors.preferredTime = 'Please select a future time slot';
      }
    }
  }

  return errors;
}

export function hasErrors(errors: BookingFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
