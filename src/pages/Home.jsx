import Nav from '@/components/site/Nav';
import Hero from '@/components/site/Hero';
import Approach from '@/components/site/Approach';
import Services from '@/components/site/Services';
import ImageBand from '@/components/site/ImageBand';
import Team from '@/components/site/Team';
import CallToAction from '@/components/site/CallToAction';
import Contact from '@/components/site/Contact';
import Footer from '@/components/site/Footer';

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Approach />
        <Services />
        <ImageBand />
        <Team />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}