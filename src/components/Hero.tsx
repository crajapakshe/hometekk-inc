import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/37153451/pexels-photo-37153451.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';
const floatingImage1 = 'https://images.pexels.com/photos/8082223/pexels-photo-8082223.jpeg?auto=compress&cs=tinysrgb&h=400&w=500';
const floatingImage2 = 'https://images.pexels.com/photos/276746/pexels-photo-276746.jpeg?auto=compress&cs=tinysrgb&h=400&w=500';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary-950">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautifully renovated kitchen"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-950/85 to-primary-900/70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-secondary-400 text-secondary-400" />
              <span className="text-sm font-medium text-white">Rated 5.0 by 200+ Vancouver homeowners</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              Transform Your Home Into a
              <span className="block bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-400 bg-clip-text text-transparent">
                Masterpiece
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Premium home renovation and improvement services tailored to your vision. From kitchens
              to whole-home transformations, we bring craftsmanship, design, and reliability to every project.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary text-base">
                Start Your Renovation
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#ideas" className="btn-secondary text-base">
                Explore Design Ideas
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {['Licensed & Insured', 'Free 3D Design', '2-Year Warranty'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-white/70">
                  <CheckCircle2 className="h-5 w-5 text-primary-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative animate-scale-in">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
                <img
                  src={floatingImage1}
                  alt="Luxury bathroom renovation"
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/5' }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 overflow-hidden rounded-2xl border-4 border-primary-950 shadow-2xl animate-float">
                <img
                  src={floatingImage2}
                  alt="Elegant living room"
                  className="w-full object-cover"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
              <div className="absolute -top-6 -right-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                  <span className="text-2xl font-extrabold text-primary-700">15+</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">Years of</div>
                  <div className="text-xs text-neutral-500">Craftsmanship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
