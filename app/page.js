import AboutSection from './components/homepage/about';
import ContactSection from './components/homepage/contact';
import Education from './components/homepage/education';
import Experience from './components/homepage/experience';
import HeroSection from './components/homepage/hero-section';
import Projects from './components/homepage/projects';
import Skills from './components/homepage/skills';
import SearchSection from './components/homepage/search';

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      <SearchSection />
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  )
}
