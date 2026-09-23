import { Check, ShieldCheck, ArrowRight, Scissors, Truck } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { IMAGES } from '@/lib/images';

const SERVICES = [
  { icon: Truck, label: 'Professional lawn mowing' },
  { icon: Scissors, label: 'Trimming around edges and obstacles' },
];

export function LawnCare() {
  return (
    <section id="lawn-care" className="bg-white py-20 lg:py-28" aria-label="Lawn care services">
      <div className="container-pro">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-neutral-200/60">
              <img
                src={IMAGES.lawnMowing}
                alt="SASKproperty worker in a branded navy uniform mowing a residential lawn with a professional mower on a sunny day"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Lawn Care"
                title="Weekly Lawn Mowing"
                subtitle="Keep your lawn looking its best all season with reliable weekly mowing for residential and commercial properties."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 inline-flex flex-col rounded-xl bg-primary-50 px-6 py-5 ring-1 ring-primary-200">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                  Pricing
                </span>
                <span className="mt-1 text-3xl font-bold text-primary-800">
                  From $250<span className="text-lg font-normal text-primary-600">/month</span>
                </span>
                <span className="mt-1 text-sm text-neutral-600">
                  Standard monthly service includes 4 visits per month.
                </span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Included in Every Visit
                </h3>
                <div className="mt-4 space-y-3">
                  {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.label}
                        className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <span className="text-sm font-medium text-neutral-800">{service.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm font-semibold text-neutral-800">
                  <Check className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  Residential &amp; Commercial Properties
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                  $2,000,000 liability insurance coverage for customer property and accidental
                  incidents.
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <a href="#contact" className="btn-primary mt-8">
                Book Lawn Care
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
