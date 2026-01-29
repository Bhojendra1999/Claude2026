'use client';

import { useState, useCallback } from 'react';
import {
  BookingFormData,
  BookingFormErrors,
  BookingSubmissionResponse,
} from '@/types/booking';
import { validateBookingForm, hasErrors } from './validation';

const initialFormData: BookingFormData = {
  fullName: '',
  email: '',
  phone: '',
  serviceType: '',
  preferredDate: '',
  preferredTime: '',
  additionalNotes: '',
};

export function useBookingForm() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] =
    useState<BookingSubmissionResponse | null>(null);

  const updateField = useCallback(
    (field: keyof BookingFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear error when user starts typing
      if (errors[field as keyof BookingFormErrors]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[field as keyof BookingFormErrors];
          return newErrors;
        });
      }
    },
    [errors]
  );

  const validateForm = useCallback((): boolean => {
    const validationErrors = validateBookingForm(formData);
    setErrors(validationErrors);
    return !hasErrors(validationErrors);
  }, [formData]);

  const submitForm = useCallback(async (): Promise<boolean> => {
    if (!validateForm()) {
      return false;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: BookingSubmissionResponse = await response.json();
      setSubmitResult(result);

      if (result.success) {
        setFormData(initialFormData);
        setErrors({});
      }

      return result.success;
    } catch {
      setSubmitResult({
        success: false,
        message: 'Network error. Please check your connection and try again.',
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitResult(null);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    submitResult,
    updateField,
    validateForm,
    submitForm,
    resetForm,
  };
}
