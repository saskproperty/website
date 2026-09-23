import { ShieldCheck, PhoneCall } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function CustomerProtection() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28" aria-label="Customer protection">
      <div className="container-pro">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Peace of Mind"
            title="Your Peace of Mind Matters to Us"
            subtitle="Customer protection is important to SASKproperty Services. We carry comprehensive coverage so you can feel confident when we work in your home or business."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <div className="card h-full p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-neutral-900">
                $2,000,000 Liability Insurance
              </h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                We carry $2,000,000 in liability insurance. This coverage helps protect you and your
                property in the event of an accidental incident while we are working on-site. It is
                our commitment to operating as a responsible, professional business.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card h-full p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <PhoneCall className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-neutral-900">Instant Phone Quotes</h3>
              <p className="mt-3 leading-relaxed text-neutral-600">
                For individual customers, we always provide the exact price right away when you
                place your order by phone — no waiting, no surprises. You will know the full cost
                before we begin.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
