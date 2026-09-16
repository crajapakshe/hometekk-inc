import { Hammer, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500">
                <Hammer className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-tight">HomeTekk</span>
                <span className="text-[10px] font-medium text-primary-300 tracking-widest uppercase">Inc.</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/50 max-w-xs">
              Premium home renovation and improvement services. Bringing craftsmanship, design, and
              reliability to every project since 2009.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all hover:bg-primary-600 hover:scale-110"
                  aria-label="Social media link"
                >
                  <Icon className="h-5 w-5 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-300">Services</h4>
            <ul className="mt-5 space-y-3">
              {['Kitchen Remodeling', 'Bathroom Renovation', 'Living Spaces', 'Whole-Home Renovation', 'Exterior & Outdoor', 'Interior Finishes'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-white/60 transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-300">Company</h4>
            <ul className="mt-5 space-y-3">
              {[
                { label: 'About Us', href: '#' },
                { label: 'Our Projects', href: '#projects' },
                { label: 'Design Ideas', href: '#ideas' },
                { label: 'Our Process', href: '#process' },
                { label: 'Reviews', href: '#testimonials' },
                { label: 'Get a Quote', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-300">Contact</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-sm text-white/60">
                  1247 Renovation Way<br />Vancouver, BC V6B 1A1
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary-400" />
                <a href="tel:+16045551234" className="text-sm text-white/60 transition-colors hover:text-white">
                  (604) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary-400" />
                <a href="mailto:hello@hometekk.ca" className="text-sm text-white/60 transition-colors hover:text-white">
                  hello@hometekk.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} HomeTekk Inc. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/40 transition-colors hover:text-white/70">Privacy Policy</a>
            <a href="#" className="text-sm text-white/40 transition-colors hover:text-white/70">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
