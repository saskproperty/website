import { useState, type FormEvent } from 'react';
import { Send, CalendarCheck, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

const PROPERTY_TYPES = ['Residential', 'Apartment', 'Commercial'];
const SERVICE_OPTIONS = [
  'Regular Cleaning',
  'Deep Cleaning',
  'Move-In / Move-Out Cleaning',
  'Lawn Mowing',
  'Other',
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ============================================================
    // STATIC FORM — NO BACKEND
    // To connect an external form service (e.g. Formspree, Web3Forms,
    // FormSubmit, Netlify Forms), set the `action` attribute on the
    // <form> tag below to your form endpoint URL and change method to
    // "POST". Remove this preventDefault handler to allow real submit.
    //
    // Example:
    //   action="https://formspree.io/f/your-id" method="POST"
    // ============================================================
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28" aria-label="Contact and get a quote">
      <div className="container-pro">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Get in Touch"
            title="Get a Quote"
            subtitle="Tell us about your property and the service you need — we'll get back to you with a clear, honest quote."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="card p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <CheckCircle2 className="h-8 w-8 text-primary-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-neutral-900">Thank You!</h3>
                  <p className="mt-2 max-w-sm text-neutral-600">
                    Your quote request has been prepared. Connect an external form service to start
                    receiving submissions, or contact us directly using the information on the
                    right.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost mt-6"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* ============================================================
                      FORM ACTION PLACEHOLDER
                      Replace "#" with your external form endpoint URL and
                      change method to "POST" to enable real submissions.
                      Example: action="https://formspree.io/f/your-id"
                      ============================================================ */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" type="text" required placeholder="Your full name" />
                    <Field label="Phone" name="phone" type="tel" required placeholder="Your phone number" />
                  </div>

                  <Field label="Email" name="email" type="email" required placeholder="you@example.com" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField label="Property Type" name="propertyType" options={PROPERTY_TYPES} required />
                    <SelectField label="Service Needed" name="service" options={SERVICE_OPTIONS} required />
                  </div>

                  <Field
                    label="Property Address"
                    name="address"
                    type="text"
                    placeholder="Street address, city, SK"
                  />

                  <div>
                    <label
                      htmlFor="details"
                      className="mb-1.5 block text-sm font-semibold text-neutral-800"
                    >
                      Additional Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      placeholder="Tell us about your property size, preferred schedule, or any specific needs..."
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button type="submit" className="btn-primary flex-1">
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Get a Quote
                    </button>
                    <button type="submit" className="btn-secondary flex-1" onClick={() => {}}>
                      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                      Book a Service
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact info sidebar */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl bg-primary-700 p-8 text-white">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <p className="mt-2 text-sm text-primary-50/90">
                  Ready to get started? Reach out and we'll be happy to help with your property
                  service needs.
                </p>

                <div className="mt-6 space-y-4">
                  <a href="tel:+13067300462" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                      <Phone className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary-200">Phone</p>
                      <p className="text-sm font-semibold text-white">
                        (306) 730-0462
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                      <Mail className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary-200">Email</p>
                      <p className="text-sm font-semibold text-white">
                        <a href="mailto:info@saskproperty.net" className="transition-opacity hover:opacity-80">
                          info@saskproperty.net
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/15 pt-5">
                  <p className="text-xs text-primary-50/70">
                    Serving residential and commercial properties across Saskatchewan.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                  Service Area
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  We are currently expanding across Saskatchewan and do not yet serve the entire
                  province — but we will definitely be serving all cities soon. Contact us to find
                  out if we're available in your area yet.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}

function Field({ label, name, type, required, placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-neutral-800">
        {label}
        {required && <span className="text-primary-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

function SelectField({ label, name, options, required }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-neutral-800">
        {label}
        {required && <span className="text-primary-600"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
