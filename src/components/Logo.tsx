interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const brightness = variant === 'light' ? 'brightness-110' : '';

  return (
    <img
      src="./ChatGPT_Image_Sep_23,_2026,_12_04_31_PM.png"
      alt="SASKproperty Cleaning Services"
      className={`h-[88px] w-auto max-w-[440px] object-contain ${brightness} ${className}`}
      width={500}
      height={240}
    />
  );
}
