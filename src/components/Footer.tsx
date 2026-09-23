import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from '@/components/Logo';

const FOOTER_LINKS = [
  { label: 'Residential', href: '#residential' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'Lawn Care', href: '#lawn-care' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 pt-16 pb-8" aria-label="Site footer">
      <div className="container-pro">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              Professional Property Cleaning &amp; Lawn Care
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Serving residential and commercial properties across Saskatchewan.
            </p>
          </div>

          {/* Links */}
          <div className="lg:justify-self-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Services
            </h2>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-primary-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact placeholders */}
          <div className="lg:justify-self-end">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="tel:+13067300462" className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-primary-300">
                  <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                  (306) 730-0462
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-neutral-400">
                <a href="mailto:info@saskproperty.net" className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-primary-300">
                  <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                  info@saskproperty.net
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-neutral-400">
                <MapPin className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                Saskatchewan, Canada
              </li>
            </ul>
            <a href="#contact" className="btn-primary mt-5">
              Get a Quote
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6">
          <p className="text-center text-sm leading-relaxed text-neutral-400">
            Permits, licenses, and insurance certificates are available by email upon request.
          </p>
          <p className="mt-3 text-center text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} SASKproperty Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
