import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Client Stories</span>
          <h2 className="mt-4 text-4xl font-extrabold text-neutral-900 text-balance sm:text-5xl">
            Loved by Homeowners Across Vancouver
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Don't just take our word for it. Here's what our clients say about working with HomeTekk.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-surface p-8 hover:shadow-xl hover:shadow-primary-600/5 hover:-translate-y-1 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary-100" />
              <div className="relative">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary-400 text-secondary-400" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-neutral-700">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">{t.name}</div>
                    <div className="text-sm text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
