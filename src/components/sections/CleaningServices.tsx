import { CalendarClock, Search, Home, Building2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { IMAGES } from '@/lib/images';

const REGULAR_ITEMS = [
  'Recurring weekly, bi-weekly, or monthly schedule',
  'Consistently clean home, apartment, or business',
  'Same trusted team on every visit',
  'Flexible plans — pause or adjust anytime',
];

const DEEP_ITEMS = [
  'Top-to-bottom intensive cleaning',
  'Ideal for spring cleaning or special occasions',
  'Move-in / move-out cleaning available',
  'Detailed attention to every surface and corner',
];

export function CleaningServices() {
  return (
    <section id="cleaning" className="bg-neutral-50 py-20 lg:py-28" aria-label="Cleaning services">
      <div className="container-pro">
        <Reveal>
          <SectionHeading
            eyebrow="Cleaning"
            title="Professional Cleaning Services"
            subtitle="We provide thorough, reliable cleaning for private residential homes, apartments, move-out / move-in, and commercial properties across Saskatchewan."
          />
        </Reveal>

        {/* Image + intro */}
        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-neutral-200/60">
            <img
              src={IMAGES.cleaningKitchen}
              alt="SASKproperty cleaner in a branded navy uniform vacuuming a bright apartment floor with a large dog lying nearby"
              className="aspect-[21/9] w-full object-cover"
              loading="lazy"
              width={1200}
              height={514}
            />
          </div>
        </Reveal>

        {/* Two service cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <CalendarClock className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Regular Cleaning</h3>
              </div>
              <p className="mt-4 text-neutral-600">
                Recurring cleaning for customers who want their property maintained on a regular
                schedule. Keeping your home, apartment, or business consistently clean — so you
                never have to worry about it.
              </p>
              <ul className="mt-6 space-y-3">
                {REGULAR_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card h-full p-8 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                  <Search className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Deep Cleaning</h3>
              </div>
              <p className="mt-4 text-neutral-600">
                A more detailed and intensive cleaning for customers who need a thorough cleaning of
                their property. Move-in / move-out cleaning is available as part of this service.
              </p>
              <ul className="mt-6 space-y-3">
                {DEEP_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Property types */}
        <Reveal className="mt-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Home, label: 'Homes & Apartments' },
              { icon: Building2, label: 'Commercial Properties' },
              { icon: CalendarClock, label: 'Move-In / Move-Out' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-4"
                >
                  <Icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-neutral-800">{item.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Pricing callout */}
        <Reveal className="mt-10">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary-700 px-8 py-10 text-center sm:px-12 lg:flex-row lg:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-200">
                Cleaning Pricing
              </p>
              <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Prices start from $160
              </p>
              <p className="mt-3 max-w-md text-primary-50/90">
                This is the price for regular cleaning of a small one-room apartment.
              </p>
            </div>
            <a href="#contact" className="btn-white shrink-0">
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
