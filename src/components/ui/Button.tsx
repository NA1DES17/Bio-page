import type { ComponentProps } from 'astro/types';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-primary-container active:bg-primary-fixed-dim transition-all duration-300 hover:scale-[1.02]',
  secondary:
    'border border-secondary text-secondary hover:bg-secondary/10 active:bg-secondary/20 transition-all duration-300',
  ghost:
    'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-higher transition-colors duration-200',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function getButtonClasses({
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonBaseProps): string {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-medium rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none';
  return [base, variantStyles[variant], sizeStyles[size], className].filter(Boolean).join(' ');
}
