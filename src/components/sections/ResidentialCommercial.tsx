import { Check, ArrowRight, Home, Building2 } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { IMAGES } from '@/lib/images';

const RESIDENTIAL_SERVICES = [
  'House cleaning',
  'Apartment cleaning',
  'Move-in cleaning',
  'Move-out cleaning',
  'Deep cleaning',
  'Regular recurring cleaning',
  'Lawn mowing',
];

const COMMERCIAL_SERVICES = [
  'Offices',
  'Small businesses',
  'Commercial properties',
  'Regular cleaning',
  'Lawn mowing',
  'Recurring maintenance services',
];

export function Residential() {
  return (
    <section id="residential" className="bg-white py-20 lg:py-28" aria-label="Residential services">
      <div className="container-pro">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-neutral-200/60">
              <img
                src={IMAGES.residentialHouse}
                alt="A bright living room with a cat on the sofa and children playing on the floor"
                className="aspect-[4/3] w-full scale-110 object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Residential"
                title="Residential Property Services"
                subtitle="SASKproperty Services helps homeowners and property residents maintain clean, safe, and well-maintained properties — with friendly, reliable service you can trust."
              />
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {RESIDENTIAL_SERVICES.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2.5 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-800"
                  >
                    <Check className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                    {service}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <a href="#contact" className="btn-primary mt-8">
                <Home className="h-4 w-4" aria-hidden="true" />
                Get a Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Commercial() {
  return (
    <section id="commercial" className="bg-neutral-50 py-20 lg:py-28" aria-label="Commercial services">
      <div className="container-pro">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <SectionHeading
                eyebrow="Commercial"
                title="Commercial Property Services"
                subtitle="SASKproperty Services provides professional property services for commercial customers — dependable maintenance that keeps your business looking its best."
              />
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {COMMERCIAL_SERVICES.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2.5 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800"
                  >
                    <Check className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                    {service}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <a href="#contact" className="btn-primary mt-8">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                Get a Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-neutral-200/60">
                <img
                  src={IMAGES.commercialBuilding}
                  alt="SASKproperty cleaner in a branded navy uniform vacuuming an office carpet"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
