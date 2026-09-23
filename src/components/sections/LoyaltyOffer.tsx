import { Gift, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function LoyaltyOffer() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Loyalty offer">
      <div className="container-pro">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 px-8 py-12 text-center sm:px-12 lg:py-16">
            {/* Decorative */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/5" aria-hidden="true" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                <Gift className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Every 10th Cleaning FREE
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary-50/90">
                Our loyalty offer rewards recurring customers — every 10th cleaning is completely
                FREE. This offer applies to residential customers only and does not apply to
                commercial customers.
              </p>
              <a href="#contact" className="btn-white mt-8">
                Start Your Recurring Plan
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
