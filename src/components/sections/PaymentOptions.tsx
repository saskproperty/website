import { CreditCard, Send, Landmark, Wallet } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

const PAYMENTS = [
  { icon: CreditCard, title: 'Credit & Debit Cards', text: 'Payment on site after service.' },
  { icon: Send, title: 'E-Transfer', text: 'Quick and convenient electronic transfer. pay@saskproperty.net' },
  { icon: Landmark, title: 'Bank Transfer', text: 'Direct bank transfer for businesses.' },
  { icon: Wallet, title: 'Cash', text: 'Cash payment accepted on site.' },
];

export function PaymentOptions() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-label="Payment options">
      <div className="container-pro">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Payments"
            title="Easy Payment Options"
            subtitle="We offer flexible payment methods to make working with us simple and convenient."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAYMENTS.map((payment, i) => {
            const Icon = payment.icon;
            return (
              <Reveal key={payment.title} delay={i * 80}>
                <div className="card h-full p-6 text-center transition-shadow hover:shadow-md">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-neutral-900">{payment.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{payment.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
