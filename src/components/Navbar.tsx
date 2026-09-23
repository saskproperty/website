import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from '@/components/Logo';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Residential', href: '#residential' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'Lawn Care', href: '#lawn-care' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-pro flex h-24 items-center justify-between lg:h-28" aria-label="Main">
        <a href="#home" aria-label="SASKproperty Services home">
          <Logo />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+13067300462"
            className="flex items-center gap-2 text-sm font-semibold text-neutral-700 transition-colors hover:text-primary-700"
          >
            <Phone className="h-4 w-4 text-primary-600" aria-hidden="true" />
            (306) 730-0462
          </a>
          <a
            href="#contact"
            className="btn-primary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-800 transition-colors hover:bg-neutral-100 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-24 z-40 overflow-y-auto bg-white lg:hidden"
        >
          <div className="container-pro flex flex-col gap-1 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-lg px-4 py-3 text-base font-medium text-neutral-800 transition-colors hover:bg-primary-50 hover:text-primary-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+13067300462"
              onClick={handleNavClick}
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-semibold text-neutral-800 transition-colors hover:bg-primary-50 hover:text-primary-700"
            >
              <Phone className="h-5 w-5 text-primary-600" aria-hidden="true" />
              (306) 730-0462
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="btn-primary mt-4 w-full"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
