interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-12 w-auto object-contain" }: LogoProps) {
  return (
    <img
      src="/logo.webp"
      alt="Horizon Bound Logo"
      className={className}
    />
  );
}
