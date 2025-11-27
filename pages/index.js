import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Research from '../components/Research';
import Presentations from '../components/Presentations';
import Leadership from '../components/Leadership';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.3 });
  const [researchRef, researchInView] = useInView({ threshold: 0.3 });
  const [presentationsRef, presentationsInView] = useInView({ threshold: 0.3 });
  const [leadershipRef, leadershipInView] = useInView({ threshold: 0.3 });
  const [contactRef, contactInView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (heroInView) setActiveSection('hero');
    else if (aboutInView) setActiveSection('about');
    else if (experienceInView) setActiveSection('experience');
    else if (researchInView) setActiveSection('research');
    else if (presentationsInView) setActiveSection('presentations');
    else if (leadershipInView) setActiveSection('leadership');
    else if (contactInView) setActiveSection('contact');
  }, [heroInView, aboutInView, experienceInView, researchInView, presentationsInView, leadershipInView, contactInView]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">Skip to main content</a>
      <Navigation activeSection={activeSection} />
      <main id="main-content" className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
        <div ref={heroRef}><Hero /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={researchRef}><Research /></div>
        <div ref={presentationsRef}><Presentations /></div>
        <div ref={leadershipRef}><Leadership /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      <Footer />
    </>
  );
}