import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import DesignIdeas from '@/components/DesignIdeas';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import IdeaDetail from '@/components/IdeaDetail';
import { ideas } from '@/data';

export default function App() {
  const ideaTitle = new URLSearchParams(window.location.search).get('idea');
  const selectedIdea = ideaTitle ? ideas.find((idea) => idea.title === ideaTitle) : undefined;

  if (selectedIdea) {
    return <IdeaDetail idea={selectedIdea} />;
  }

  return (
    <div className="min-h-screen bg-white font-body text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DesignIdeas />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
