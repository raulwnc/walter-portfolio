import { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  // Simple toggle function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Simplified scroll function - no conflicting event listeners
  const scrollToSection = (sectionId) => {
    // Close menu immediately
    setIsMenuOpen(false);
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get the actual nav height dynamically
        const navElement = document.querySelector('nav');
        const navHeight = navElement ? navElement.offsetHeight : 0;
        
        // Add extra padding for better positioning
        const extraPadding = isMobile ? 20 : 10;
        const elementPosition = element.offsetTop - navHeight - extraPadding;
        
        window.scrollTo({
          top: Math.max(0, elementPosition),
          behavior: 'smooth'
        });
      }
    }, 150); // Slightly longer delay
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <nav className="bg-gray-100 border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <span className="text-xl font-bold text-blue-600">Walter Nieves-Canabal</span>
            <button 
              onClick={toggleMenu}
              className="sm:hidden p-2 bg-gray-200 rounded-md text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex w-full sm:w-auto mt-4 sm:mt-0 nav-menu`}>
            <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm font-medium bg-gray-100 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
  {['about', 'projects', 'research', 'presentations', 'leadership', 'contact'].map((item) => (
    <li key={item} className="w-full sm:w-auto">
      <button
        onClick={() => scrollToSection(item)}
        className="cursor-pointer hover:text-blue-600 px-3 py-2 transition-colors block w-full sm:w-auto text-center sm:text-left bg-transparent border-none text-inherit font-inherit text-sm hover:bg-gray-200 sm:hover:bg-transparent rounded"
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </button>
    </li>
  ))}
  
  {/* Mobile-only contact form link */}
  <li className="w-full sm:hidden">
    <button
      onClick={() => scrollToSection('contact-form')}
      className="cursor-pointer hover:text-blue-600 px-3 py-2 transition-colors block w-full text-center bg-blue-50 border border-blue-200 text-blue-700 font-medium text-sm hover:bg-blue-100 rounded"
    >
      📝 Send Me a Message
    </button>
  </li>
</ul>
          </div>
        </div>
      </nav>
      
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:py-20 px-4 sm:px-6 md:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Tech-Driven Pharmacist</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Human-Centered Innovation</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Harnessing clinical insight to build digital health solutions that matter.
        </p>
        <div className="flex justify-center items-center gap-2 mt-4">
          <img src="/puerto-rico-flag.webp" alt="Puerto Rico Flag" className="w-5 sm:w-6 h-auto rounded shadow" />
          <span className="text-sm text-gray-600 italic">Proudly Puerto Rican</span>
        </div>
      </section>

      <section id="about" className="max-w-3xl mx-auto py-16 px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <div className="flex justify-center mb-6">
            <img src="/walter-headshot.webp" alt="Walter Nieves-Canabal" width={128} height={128} className="w-32 h-32 rounded-full object-cover shadow-md" />
          </div>
        </div>
        <div className="prose prose-blue max-w-none text-center">
  <p className="text-center">
    I&apos;m a rising third-year PharmD student at the University of Pittsburgh, blending clinical insight with a passion for tech innovation. I bring a unique lens to pharmacy and digital health solutions.
  </p>
</div>
      </section>

      <section id="projects" className="bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto prose prose-blue">
          <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2">Pharmacy Tech Innovation Lab</h3>
              <p>Leading the design and implementation of a pharmacist-centered digital tool that integrates biometric data to support clinical insight and patient engagement. Focused on enhancing decision-making and workflow efficiency through real-time, data-informed interventions.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2">Script Your Future</h3>
              <p>Led a digital campaign reaching 10,000+ individuals to improve hypertension awareness, medication adherence, and patient empowerment through social outreach and education.</p>
            </div>
            <div className="bg-white border border-dashed border-gray-300 p-6 rounded-lg text-center text-gray-500 italic">
              🚧 Innovation Project Coming Soon — Watch this space.
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="max-w-5xl mx-auto py-16 px-4 sm:px-6 md:px-8 prose prose-blue">
        <h2 className="text-2xl font-semibold mb-8 text-center">Research & Innovation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold">Virtual Reality & Pharmacy Education</h3>
            <p>Developed and tested VR modules (SimX) to improve counseling, experiential learning, and clinical decision-making.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">FDA Fellowship</h3>
            <p>Translated regulatory data into visual insights; co-led an initiative enhancing industry understanding of regulatory frameworks.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Drug Metabolism Research</h3>
            <p>Analyzed PEG-ASNase&apos;s impact on cytochrome P450 and phase II enzymes to inform medical communication strategies.</p>
          </div>
        </div>
      </section>

      <section id="presentations" className="bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto prose prose-blue">
          <h2 className="text-2xl font-semibold mb-8 text-center">Presentations</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Capstone:</strong> The Future is Remote — FDA Guidance & Regulatory Strategy for RPM in Drug Research (April 2025)</li>
            <li><strong>Seminar:</strong> AI in Drug Regulatory Decision-Making — Applicability in Drug Development (March 2025)</li>
          </ul>
        </div>
      </section>

      <section id="leadership" className="max-w-5xl mx-auto py-16 px-4 sm:px-6 md:px-8 prose prose-blue">
        <h2 className="text-2xl font-semibold mb-8 text-center">Leadership Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">RxAmbassador Program</h3>
            <p>Co-President — leading outreach and mentorship efforts for future pharmacy students.</p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">APhA-ASP</h3>
            <p>International Vice President — promoting global collaboration among pharmacy students.</p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Phi Delta Chi</h3>
            <p>Treasurer — managing finances and promoting professional brotherhood.</p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">ALPFA</h3>
            <p>Vice President — driving DEI efforts and professional programming for Latino students.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Contact</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Existing Contact Info */}
            <div className="prose prose-blue">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p>Email: <a href="mailto:raulwnc@gmail.com" className="text-blue-600 hover:underline">raulwnc@gmail.com</a></p>
              <p><a href="https://www.linkedin.com/in/walter-nieves-canabal/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
              <p>CV: <a href="/CV_Walter_Nieves_Canabal_2025.pdf" className="text-blue-600 hover:underline" download target="_blank" rel="noopener noreferrer">Download CV (PDF)</a></p>
              <p className="mt-6 italic">I&apos;m always excited to connect with others passionate about pharmacy, tech, and innovation — feel free to reach out!</p>
              
              {/* References moved here */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">References</h3>
                <ul className="space-y-3">
                  <li><strong>Dr. Ashley Yarabinec, PharmD</strong><br /><a href="mailto:aby12@pitt.edu" className="text-blue-600 hover:underline">aby12@pitt.edu</a></li>
                  <li><strong>Dr. Christian Fernandez, PhD</strong><br /><a href="mailto:chf63@pitt.edu" className="text-blue-600 hover:underline">chf63@pitt.edu</a></li>
                  <li><strong>Marijke Koppenol-Raab</strong><br /><a href="mailto:Marijke.Koppenol-Raab@fda.hhs.gov" className="text-blue-600 hover:underline">Marijke.Koppenol-Raab@fda.hhs.gov</a></li>
                  <li><strong>Suzanne Mannino</strong><br /><a href="mailto:smm198@pitt.edu" className="text-blue-600 hover:underline">smm198@pitt.edu</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-500 py-4">
        &copy; 2025 Walter Nieves-Canabal | Built with 💻 + 🧠
      </footer>
    </main>
  );
}

