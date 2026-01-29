'use client';

import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  color: 'green' | 'yellow' | 'blue' | 'red';
}

const colorStyles = {
  green: 'bg-green-50 text-green-600',
  yellow: 'bg-amber-50 text-amber-600',
  blue: 'bg-blue-50 text-blue-600',
  red: 'bg-red-50 text-red-600',
};

export default function StatsCard({ title, value, icon, color }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft border border-forest-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-subheading">{title}</p>
          <p className="text-3xl font-bold text-heading mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-xl ${colorStyles[color]}`}>{icon}</div>
      </div>
    </div>
  );
}
