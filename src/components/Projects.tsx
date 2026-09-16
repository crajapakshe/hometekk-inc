import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { projects } from '@/data';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Our Work</span>
          <h2 className="mt-4 text-4xl font-extrabold text-neutral-900 text-balance sm:text-5xl">
            Featured Renovation Projects
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Real transformations for real homeowners. See the difference craftsmanship makes.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative group">
                <div className="overflow-hidden rounded-3xl shadow-2xl shadow-neutral-300/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary-600 p-6 text-white shadow-xl sm:block">
                  <div className="text-3xl font-extrabold">0{idx + 1}</div>
                  <div className="text-xs font-medium text-primary-100">Project</div>
                </div>
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-700">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-600">
                    <Clock className="h-4 w-4" />
                    {project.duration}
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-neutral-900">{project.title}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-neutral-500">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                <p className="mt-5 text-lg leading-relaxed text-neutral-600">{project.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary-600 transition-all hover:gap-3 hover:text-primary-700"
                >
                  Start a Project Like This
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
