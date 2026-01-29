'use client';

import { useState, useMemo } from 'react';
import { HiHome, HiOfficeBuilding, HiSparkles, HiTruck, HiCog } from 'react-icons/hi';
import Link from 'next/link';

// Pricing data
const propertySizes = [
  { id: 'studio', label: 'Studio / 1 Bed', sqft: '0-800 sq ft', basePrice: 80, icon: HiHome },
  { id: '2bed', label: '2 Bedrooms', sqft: '800-1200 sq ft', basePrice: 100, icon: HiHome },
  { id: '3bed', label: '3 Bedrooms', sqft: '1200-1800 sq ft', basePrice: 120, icon: HiHome },
  { id: '4bed', label: '4 Bedrooms', sqft: '1800-2500 sq ft', basePrice: 150, icon: HiOfficeBuilding },
  { id: '5bed', label: '5+ Bedrooms', sqft: '2500+ sq ft', basePrice: 180, icon: HiOfficeBuilding },
];

const serviceTypes = [
  { id: 'regular', label: 'Regular Cleaning', description: 'Routine maintenance cleaning', multiplier: 1.0 },
  { id: 'deep', label: 'Deep Cleaning', description: 'Intensive top-to-bottom cleaning', multiplier: 1.5, badge: 'Most thorough' },
  { id: 'moveInOut', label: 'Move-In/Move-Out', description: 'Complete cleaning for moving', multiplier: 1.8 },
  { id: 'postConstruction', label: 'Post-Construction', description: 'After renovation cleaning', multiplier: 2.0 },
];

const frequencies = [
  { id: 'oneTime', label: 'One-Time', discount: 0 },
  { id: 'weekly', label: 'Weekly', discount: 0.15, badge: 'Best value' },
  { id: 'biWeekly', label: 'Bi-Weekly', discount: 0.10, badge: 'Most popular' },
  { id: 'monthly', label: 'Monthly', discount: 0.05 },
];

const addOns = [
  { id: 'windows', label: 'Interior Windows', price: 30 },
  { id: 'refrigerator', label: 'Inside Refrigerator', price: 25 },
  { id: 'oven', label: 'Inside Oven', price: 30 },
  { id: 'laundry', label: 'Laundry (per load)', price: 20 },
  { id: 'garage', label: 'Garage/Patio Sweep', price: 15 },
];

export default function PricingCalculator() {
  const [selectedSize, setSelectedSize] = useState('2bed');
  const [selectedService, setSelectedService] = useState('regular');
  const [selectedFrequency, setSelectedFrequency] = useState('oneTime');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const size = propertySizes.find((s) => s.id === selectedSize)!;
    const service = serviceTypes.find((s) => s.id === selectedService)!;
    const frequency = frequencies.find((f) => f.id === selectedFrequency)!;

    const basePrice = size.basePrice;
    const servicePrice = basePrice * service.multiplier;
    const serviceAdjustment = servicePrice - basePrice;
    const discountAmount = servicePrice * frequency.discount;
    const priceAfterDiscount = servicePrice - discountAmount;
    const addOnsTotal = selectedAddOns.reduce((sum, id) => {
      const addOn = addOns.find((a) => a.id === id);
      return sum + (addOn?.price || 0);
    }, 0);
    const total = priceAfterDiscount + addOnsTotal;

    return {
      basePrice,
      serviceAdjustment,
      servicePrice,
      discountPercent: frequency.discount * 100,
      discountAmount,
      addOnsTotal,
      total,
    };
  }, [selectedSize, selectedService, selectedFrequency, selectedAddOns]);

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Calculator Steps */}
      <div className="lg:col-span-2 space-y-8">
        {/* Step 1: Property Size */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-forest-100">
          <h3 className="text-lg font-bold text-heading mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 bg-accent text-dark text-sm font-bold rounded-full mr-2">1</span>
            What size is your property?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {propertySizes.map((size) => {
              const Icon = size.icon;
              return (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${
                    selectedSize === size.id
                      ? 'border-accent bg-accent/10'
                      : 'border-forest-100 hover:border-forest-200'
                  }`}
                >
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${selectedSize === size.id ? 'text-accent' : 'text-subheading'}`} />
                  <p className="text-sm font-semibold text-heading">{size.label}</p>
                  <p className="text-xs text-subheading">{size.sqft}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Service Type */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-forest-100">
          <h3 className="text-lg font-bold text-heading mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 bg-accent text-dark text-sm font-bold rounded-full mr-2">2</span>
            What type of cleaning do you need?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {serviceTypes.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selectedService === service.id
                    ? 'border-accent bg-accent/10'
                    : 'border-forest-100 hover:border-forest-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-heading">{service.label}</p>
                    <p className="text-sm text-subheading">{service.description}</p>
                  </div>
                  {service.badge && (
                    <span className="text-xs bg-sage/20 text-sage px-2 py-1 rounded-full font-medium">
                      {service.badge}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Frequency */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-forest-100">
          <h3 className="text-lg font-bold text-heading mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 bg-accent text-dark text-sm font-bold rounded-full mr-2">3</span>
            How often would you like service?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {frequencies.map((freq) => (
              <button
                key={freq.id}
                onClick={() => setSelectedFrequency(freq.id)}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  selectedFrequency === freq.id
                    ? 'border-accent bg-accent/10'
                    : 'border-forest-100 hover:border-forest-200'
                }`}
              >
                <p className="font-semibold text-heading">{freq.label}</p>
                {freq.discount > 0 && (
                  <p className="text-sm text-green-600 font-medium">{freq.discount * 100}% OFF</p>
                )}
                {freq.badge && (
                  <span className="inline-block mt-1 text-xs bg-accent/20 text-dark px-2 py-0.5 rounded-full">
                    {freq.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
          <p className="text-sm text-subheading mt-3">
            Recurring services can be paused or cancelled anytime
          </p>
        </div>

        {/* Step 4: Add-Ons */}
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-forest-100">
          <h3 className="text-lg font-bold text-heading mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 bg-accent text-dark text-sm font-bold rounded-full mr-2">4</span>
            Add extra services (optional)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {addOns.map((addOn) => (
              <label
                key={addOn.id}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedAddOns.includes(addOn.id)
                    ? 'border-accent bg-accent/10'
                    : 'border-forest-100 hover:border-forest-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedAddOns.includes(addOn.id)}
                  onChange={() => toggleAddOn(addOn.id)}
                  className="w-5 h-5 rounded border-forest-200 text-accent focus:ring-accent"
                />
                <div className="flex-1">
                  <p className="font-medium text-heading">{addOn.label}</p>
                  <p className="text-sm text-sage font-semibold">+${addOn.price}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Price Summary - Sticky on desktop */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl p-6 shadow-soft border border-forest-100 lg:sticky lg:top-24">
          <h3 className="text-lg font-bold text-heading mb-4">Your Estimate</h3>

          {/* Selection Summary */}
          <div className="space-y-2 mb-4 pb-4 border-b border-forest-100">
            <div className="flex justify-between text-sm">
              <span className="text-subheading">Property:</span>
              <span className="text-heading font-medium">
                {propertySizes.find((s) => s.id === selectedSize)?.label}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-subheading">Service:</span>
              <span className="text-heading font-medium">
                {serviceTypes.find((s) => s.id === selectedService)?.label}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-subheading">Frequency:</span>
              <span className="text-heading font-medium">
                {frequencies.find((f) => f.id === selectedFrequency)?.label}
              </span>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-2 mb-4 pb-4 border-b border-forest-100">
            <div className="flex justify-between text-sm">
              <span className="text-subheading">Base Price:</span>
              <span className="text-heading">${calculation.basePrice}</span>
            </div>
            {calculation.serviceAdjustment > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-subheading">Service Type:</span>
                <span className="text-heading">+${calculation.serviceAdjustment.toFixed(0)}</span>
              </div>
            )}
            {calculation.discountAmount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-subheading">Discount ({calculation.discountPercent}%):</span>
                <span className="text-green-600">-${calculation.discountAmount.toFixed(0)}</span>
              </div>
            )}
            {calculation.addOnsTotal > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-subheading">Add-ons:</span>
                <span className="text-heading">+${calculation.addOnsTotal}</span>
              </div>
            )}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold text-heading">Total:</span>
            <span className="text-3xl font-bold text-accent">${calculation.total.toFixed(0)}</span>
          </div>
          <p className="text-sm text-subheading text-center mb-6">per visit</p>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link
              href="/booking"
              className="block w-full text-center py-3 bg-accent text-dark font-semibold rounded-xl hover:bg-accent-500 transition-colors"
            >
              Book This Service
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center py-3 border-2 border-forest-200 text-heading font-semibold rounded-xl hover:bg-muted transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
