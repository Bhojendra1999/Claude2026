import Image from 'next/image';
import Link from 'next/link';
import { HiClock, HiCurrencyDollar, HiCheck } from 'react-icons/hi';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  includedItems: string[];
  price: string;
  duration: string;
  href: string;
  badge?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  includedItems,
  price,
  duration,
  href,
  badge,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-forest-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-accent text-dark text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-heading mb-2">{title}</h3>
        <p className="text-body text-sm mb-4">{description}</p>

        {/* Included Items */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-subheading uppercase mb-2">What&apos;s Included:</p>
          <ul className="space-y-1">
            {includedItems.slice(0, 4).map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-body">
                <HiCheck className="w-4 h-4 text-sage flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Price & Duration */}
        <div className="flex items-center gap-4 mb-4 pt-4 border-t border-forest-100">
          <div className="flex items-center gap-1 text-sm">
            <HiCurrencyDollar className="w-4 h-4 text-accent" />
            <span className="font-semibold text-heading">From {price}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-subheading">
            <HiClock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={href}
          className="block w-full text-center py-2.5 bg-dark text-white font-semibold rounded-xl hover:bg-forest-800 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
