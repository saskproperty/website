import {
  Clock,
  Building2,
  Repeat,
  Users,
  PawPrint,
  Sparkles,
  ShieldCheck,
  Tag,
  CreditCard,
  Wrench,
  Eye,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

const REASONS = [
  { icon: Clock, title: 'Reliable & Punctual', text: 'We show up on time, every time.' },
  { icon: Building2, title: 'Residential & Commercial', text: 'Services for homes and businesses alike.' },
  { icon: Repeat, title: 'Recurring Options', text: 'Weekly, bi-weekly, or monthly plans.' },
  { icon: Users, title: 'Professional Workers', text: 'Trained, vetted, and uniformed team.' },
  { icon: PawPrint, title: 'Pet-Friendly Cleaning', text: 'Safe products for homes with pets.' },
  { icon: Sparkles, title: 'Allergy-Sensitive Products', text: 'Available upon request.' },
  { icon: ShieldCheck, title: '$2M Liability Insurance', text: 'Coverage for accidental incidents.' },
  { icon: Tag, title: 'Clear Pricing', text: 'Know your price before we start.' },
  { icon: CreditCard, title: 'Easy Payment Options', text: 'Cards, e-transfer, bank, or cash.' },
  { icon: Wrench, title: 'Professional Equipment', text: 'Right tools for every job.' },
  { icon: Eye, title: 'Attention to Detail', text: "We don\u2019t cut corners \u2014 we clean them." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28" aria-label="Why choose us">
      <div className="container-pro">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Our Promise"
            title="Why Choose SASKproperty Services?"
            subtitle="We are committed to delivering dependable, professional property services that make your life easier."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={(i % 4) * 80}>
                <div className="card h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-neutral-900">{reason.title}</h3>
                  <p className="mt-1.5 text-sm text-neutral-600">{reason.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
