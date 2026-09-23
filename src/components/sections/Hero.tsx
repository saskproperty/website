import { ArrowRight, CalendarCheck, ShieldCheck, Star } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-neutral-50 pt-24 lg:pt-28"
      aria-label="Introduction"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-20 h-[28rem] w-[28rem] rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-96 w-96 rounded-full bg-accent-100/40 blur-3xl" />
      </div>

      <div className="container-pro relative grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* Text */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-sm font-semibold text-primary-700 ring-1 ring-primary-200">
            <Star className="h-4 w-4 fill-primary-500 text-primary-500" aria-hidden="true" />
            Trusted property services
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-[1.12] text-neutral-900 sm:text-5xl lg:text-[3.25rem]">
            Professional Cleaning &amp; Property Services
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Reliable service for homes, apartments and commercial properties.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book a Service
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-700">
              <ShieldCheck className="h-5 w-5 text-primary-600" aria-hidden="true" />
              $2M Liability Insurance
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-700">
              <ShieldCheck className="h-5 w-5 text-primary-600" aria-hidden="true" />
              Professional Equipment &amp; Supplies
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-neutral-200/60">
            <img
              src={IMAGES.heroCleaner}
              alt="SASKproperty cleaner in a branded navy uniform working in a bright, well-lit modern apartment"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
          </div>

          {/* Floating card - loyalty */}
          <div className="absolute -bottom-5 -left-3 hidden rounded-xl bg-white p-4 shadow-lg ring-1 ring-neutral-200 sm:block lg:-left-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-100 text-accent-700">
                <Star className="h-5 w-5 fill-accent-500 text-accent-500" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">Every 10th Cleaning FREE</p>
                <p className="text-xs text-neutral-500">Loyalty rewards for recurring clients</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
