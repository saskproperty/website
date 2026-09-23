import { Target, ThumbsUp, Sparkles, Repeat, Building2, HandHeart } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { IMAGES } from '@/lib/images';

const VALUES = [
  { icon: Target, title: 'Reliable Service', text: 'Consistent, on-time visits you can plan around.' },
  { icon: Sparkles, title: 'Professional Standards', text: 'Trained team, quality equipment, careful work.' },
  { icon: ThumbsUp, title: 'Customer Satisfaction', text: 'Your happiness with our work is the priority.' },
  { icon: HandHeart, title: 'Careful Work', text: 'Attention to detail in every property we service.' },
  { icon: Repeat, title: 'Convenient Recurring Services', text: 'Set it once — we handle the rest.' },
  { icon: Building2, title: 'Residential & Commercial', text: 'Serving homes and businesses across Saskatchewan.' },
];

export function AboutUs() {
  return (
    <section id="about" className="bg-neutral-50 py-20 lg:py-28" aria-label="About us">
      <div className="container-pro">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-neutral-200/60">
              <img
                src={IMAGES.modernRoom}
                alt="The SASKproperty Services team — two male workers and two female cleaners in branded navy uniforms in front of a freshly mowed house"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="About Us"
                title="About SASKproperty Services"
              />
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                SASKproperty Services is a growing Saskatchewan property services company focused on
                delivering reliable, professional service to every customer we work with.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {VALUES.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-neutral-900">{value.title}</h3>
                        <p className="mt-0.5 text-sm text-neutral-600">{value.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 text-sm leading-relaxed text-neutral-500">
                We are proud to serve residential and commercial customers throughout Saskatchewan,
                and we are committed to growing our services across the province.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
