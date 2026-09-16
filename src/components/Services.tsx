import { ArrowRight } from 'lucide-react';
import { services } from '@/data';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">What We Do</span>
          <h2 className="mt-4 text-4xl font-extrabold text-neutral-900 text-balance sm:text-5xl">
            Comprehensive Renovation Services
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            From single-room updates to whole-home transformations, we handle every aspect of your
            renovation with precision and care.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-surface group p-8 hover:shadow-xl hover:shadow-primary-600/10 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 transition-all duration-300 group-hover:bg-primary-600 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{service.description}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-1.5 text-xs font-medium text-neutral-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-all group-hover:gap-3 hover:text-primary-700"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
