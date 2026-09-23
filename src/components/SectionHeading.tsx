interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? '!text-primary-300' : ''} ${center ? 'justify-center' : ''}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-[2.5rem] ${
          light ? 'text-white' : 'text-neutral-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-primary-50/80' : 'text-neutral-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
