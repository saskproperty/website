import { Sparkles, Leaf } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { IMAGES } from '@/lib/images';

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Cleaning Services',
    description:
      'Regular and deep cleaning for homes, apartments, move-in / move-out, and commercial properties.',
    image: IMAGES.cleaningLivingRoom,
    href: '#cleaning',
    alt: 'SASKproperty cleaner in a branded navy uniform cleaning a modern living room',
  },
{
    icon: Leaf,
    title: 'Lawn Care',
    description:
      'Weekly lawn mowing with trimming for residential and commercial properties throughout the season.',
    image: IMAGES.lawnMowing,
    href: '#lawn-care',
    alt: 'SASKproperty worker in a branded navy uniform mowing a residential lawn on a sunny day',
  },
];

export function ServicesOverview() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28" aria-label="Our services">
      <div className="container-pro">
        <Reveal>
          <SectionHeading
            center
            eyebrow="What We Do"
            title="Professional Property Services"
            subtitle="Two core services to keep your home or business clean and well-maintained — all year round."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 120}>
                <a
                  href={service.href}
                  className="group block h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={600}
                      height={375}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-lg bg-white/95 shadow-md">
                      <Icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-900">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-700">
                      Learn more
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
