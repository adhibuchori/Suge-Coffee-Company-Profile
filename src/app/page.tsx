'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Menu } from '@/components/sections/Menu';
import { Gallery } from '@/components/sections/Gallery';
import { Location } from '@/components/sections/Location';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

/** Home page — assembles all Suge Coffee sections. */
export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
