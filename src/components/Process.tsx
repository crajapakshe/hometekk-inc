import { processSteps, stats } from '@/data';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-primary-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-900/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-primary-300">
            How We Work
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-white text-balance sm:text-5xl">
            A Clear Path to Your Dream Home
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Our proven three-step process keeps you informed and confident from first sketch to final walkthrough.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <div className="card-surface bg-white/[0.07] border-white/10 p-8 hover:bg-white/[0.12] hover:-translate-y-1 backdrop-blur-sm">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-500 shadow-lg shadow-primary-500/30">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-2 text-5xl font-extrabold text-white/10">
                    0{idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/60">{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10 h-0.5 w-8 bg-gradient-to-r from-primary-500 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl bg-white/[0.05] border border-white/10 p-8 text-center backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/20">
                  <Icon className="h-6 w-6 text-primary-300" />
                </div>
                <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-white/50">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
