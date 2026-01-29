export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes: string;
}

export interface BookingFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export interface BookingSubmissionResponse {
  success: boolean;
  message: string;
  bookingId?: string;
}

export interface Booking extends BookingFormData {
  id: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}
