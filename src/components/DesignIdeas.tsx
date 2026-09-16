import { useState } from 'react';
import { ideas, ideaCategories } from '@/data';
import { ArrowUpRight } from 'lucide-react';

export default function DesignIdeas() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? ideas
    : ideas.filter((idea) => idea.category === activeCategory);

  return (
    <section id="ideas" className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Design Inspiration</span>
          <h2 className="mt-4 text-4xl font-extrabold text-neutral-900 text-balance sm:text-5xl">
            Renovation Ideas to Spark Your Imagination
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Browse our curated collection of design ideas across every room. Filter by space to find
            the style that speaks to you.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {ideaCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-primary-300 hover:text-primary-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((idea) => (
            <div
              key={idea.title}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={idea.image}
                alt={idea.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 backdrop-blur-sm">
                  {idea.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{idea.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-400 group-hover:max-h-32 group-hover:opacity-100">
                  {idea.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  View Details
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-outline">
            Bring Your Idea to Life
          </a>
        </div>
      </div>
    </section>
  );
}
