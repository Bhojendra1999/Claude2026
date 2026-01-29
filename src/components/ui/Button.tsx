import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    // Primary: Yellow BG with dark green text
    primary: 'bg-accent text-dark hover:bg-accent-500 focus:ring-accent shadow-soft hover:shadow-card',
    // Secondary: Transparent with yellow border/text
    secondary: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-dark focus:ring-accent',
    // Outline: Dark green border/text
    outline: 'bg-transparent border-2 border-dark text-dark hover:bg-dark hover:text-white focus:ring-forest-800',
    // Outline White: For dark backgrounds
    'outline-white': 'bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
