import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { ideas, type Idea } from '@/data';

interface IdeaDetailProps {
  idea: Idea;
}

const getRelatedIdeas = (idea: Idea): Idea[] =>
  ideas.filter((item) => item.category === idea.category && item.title !== idea.title).slice(0, 3);

export default function IdeaDetail({ idea }: IdeaDetailProps) {
  const relatedIdeas = getRelatedIdeas(idea);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-primary-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="./" className="flex items-center gap-2.5 text-white transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-extrabold tracking-tight">HomeTekk</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-primary-300">Inc.</span>
            </div>
          </a>
          <a href="./" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to ideas
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-primary-950">
          <div className="absolute inset-0">
            <img src={idea.image} alt="" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/80 to-primary-950/40" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-primary-100 backdrop-blur-sm">
                {idea.category} renovation idea
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                {idea.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
                {idea.description}
              </p>
              <a href="./#contact" className="btn-primary mt-8">
                Plan a Space Like This
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-neutral-200/60">
            <img src={idea.image} alt={idea.title} className="h-full min-h-[360px] w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="section-label">Make It Yours</span>
            <h2 className="mt-5 text-3xl font-extrabold text-neutral-900 sm:text-4xl">
              Thoughtful design, made for the way you live.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Our design team turns inspiration into a practical, personal plan for your home. We balance beautiful materials, smart layouts, and lasting craftsmanship so the finished space feels completely yours.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Personalized design consultation',
                'Premium materials selected for daily living',
                'Detailed planning from concept to completion',
                'Licensed craftsmanship backed by our warranty',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-neutral-700">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary-600" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-neutral-500">
              <MapPin className="h-4 w-4 text-secondary-600" />
              Serving Vancouver and surrounding communities
            </div>
          </div>
        </section>

        {relatedIdeas.length > 0 && (
          <section className="border-t border-neutral-200 bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-neutral-900">More {idea.category} inspiration</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {relatedIdeas.map((related) => (
                  <a
                    key={related.title}
                    href={`?idea=${encodeURIComponent(related.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img src={related.image} alt={related.title} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="flex items-center justify-between gap-4 p-5">
                      <span className="font-bold text-neutral-900">{related.title}</span>
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary-600 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-primary-950 px-6 py-8 text-center text-sm text-white/50">
        HomeTekk Inc. · Premium home renovation and improvement
      </footer>
    </div>
  );
}
