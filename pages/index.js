export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-gray-100 border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <span className="text-xl font-bold text-blue-600">Walter Nieves-Canabal</span>
          <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#research" className="hover:text-blue-600">Research</a></li>
            <li><a href="#presentations" className="hover:text-blue-600">Presentations</a></li>
            <li><a href="#leadership" className="hover:text-blue-600">Leadership</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            <li><a href="#references" className="hover:text-blue-600">References</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 sm:py-20 px-4 sm:px-6 md:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Tech-Driven Pharmacist</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Human-Centered Innovation</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Harnessing clinical insight to build digital health solutions that matter.
        </p>
        <div className="flex justify-center items-center gap-2 mt-4">
          <img
            src="/puerto-rico-flag.png"
            alt="Puerto Rico Flag"
            className="w-5 sm:w-6 h-auto rounded shadow"
          />
          <span className="text-sm text-gray-600 italic">Proudly Puerto Rican</span>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-3xl mx-auto py-16 px-4 sm:px-6 md:px-8">
  <div className="text-center">
    <h2 className="text-2xl font-semibold mb-4">About Me</h2>
    <div className="flex justify-center mb-6">
      <img
        src="/walter-headshot.png"
        alt="Walter Nieves-Canabal"
        className="w-32 h-32 rounded-full object-cover shadow-md"
      />
    </div>
  </div>
  <p className="mb-4">
    I’m a rising third-year PharmD student at the University of Pittsburgh, blending clinical insight with a passion for tech innovation. I bring a unique lens to pharmacy and digital health solutions.
  </p>
</section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2">Pharmacy Tech Innovation Lab</h3>
              <p className="text-sm text-gray-700">Leading the design and implementation of a pharmacist-centered digital tool that integrates biometric data to support clinical insight and patient engagement. Focused on enhancing decision-making and workflow efficiency through real-time, data-informed interventions.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2">Script Your Future</h3>
              <p className="text-sm text-gray-700">Led a digital campaign reaching 10,000+ individuals to improve hypertension awareness, medication adherence, and patient empowerment through social outreach and education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="max-w-5xl mx-auto py-16 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold mb-8 text-center">Research & Innovation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold">Virtual Reality & Pharmacy Education</h3>
            <p className="text-sm text-gray-700">Developed and tested VR modules (SimX) to improve counseling, experiential learning, and clinical decision-making. Presented at the 2024 Health Disparities & Social Justice Poster Competition.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">FDA Fellowship</h3>
            <p className="text-sm text-gray-700">Translated regulatory data into visual insights; co-led an initiative enhancing industry understanding of regulatory frameworks.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Drug Metabolism Research</h3>
            <p className="text-sm text-gray-700">Analyzed PEG-ASNase’s impact on cytochrome P450 and phase II enzymes to inform medical communication strategies.</p>
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section id="presentations" className="bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Presentations</h2>
          <ul className="list-disc list-inside space-y-4 text-sm text-gray-700">
            <li><strong>Capstone:</strong> The Future is Remote — FDA Guidance & Regulatory Strategy for RPM in Drug Research (April 2025)</li>
            <li><strong>Seminar:</strong> AI in Drug Regulatory Decision-Making — Applicability in Drug Development (March 2025)</li>
          </ul>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="max-w-5xl mx-auto py-16 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-semibold mb-8 text-center">Leadership Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">RxAmbassador Program</h3>
            <p className="text-sm text-gray-700">Co-President — leading outreach and mentorship efforts for future pharmacy students while representing Pitt Pharmacy nationally.</p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">APhA Academy of Student Pharmacists (APhA-ASP)</h3>
            <p className="text-sm text-gray-700">International Vice President — promoting global collaboration among pharmacy students and leading national representation efforts.</p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Phi Delta Chi Pharmacy Fraternity</h3>
            <p className="text-sm text-gray-700">Treasurer — managing organizational finances and leading initiatives to promote professional brotherhood and community engagement.</p>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">ALPFA (Association of Latino Professionals For America)</h3>
            <p className="text-sm text-gray-700">Vice President — driving DEI efforts and professional development programming for Latino students across the University of Pittsburgh.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 px-4 sm:px-6 md:px-8">
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Contact Info */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="mb-2">Email: <a className="text-blue-600 hover:underline" href="mailto:wrn9@pitt.edu">wrn9@pitt.edu</a></p>
      <p className="mb-2">
        LinkedIn: <a
          className="text-blue-600 hover:underline"
          href="https://www.linkedin.com/in/walter-nieves-canabal/"
          target="_blank"
          rel="noopener noreferrer"
        >This will take you to my LinkedIn profile</a>
      </p>
      <p>
        CV: <a
          className="text-blue-600 hover:underline"
          href="/CV_Walter_Nieves_Canabal_2025.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >Download CV (PDF)</a>
      </p>
    </div>

    {/* References Info */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">References</h2>
      <ul className="space-y-4 text-sm text-gray-700">
        <li>
          <strong>Dr. Ashley Yarabinec, PharmD</strong><br />
          <a href="mailto:aby12@pitt.edu" className="text-blue-600 hover:underline">aby12@pitt.edu</a>
        </li>
        <li>
          <strong>Dr. Christian Fernandez, PhD</strong><br />
          <a href="mailto:chf63@pitt.edu" className="text-blue-600 hover:underline">chf63@pitt.edu</a>
        </li>
        <li>
          <strong>Marijke Koppenol-Raab</strong><br />
          <a href="mailto:Marijke.Koppenol-Raab@fda.hhs.gov" className="text-blue-600 hover:underline">Marijke.Koppenol-Raab@fda.hhs.gov</a>
        </li>
        <li>
          <strong>Suzanne Mannino</strong><br />
          <a href="mailto:smm198@pitt.edu" className="text-blue-600 hover:underline">smm198@pitt.edu</a>
        </li>
      </ul>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-4">
        &copy; 2025 Walter Nieves-Canabal | Built with 💻 + 🧠
      </footer>
    </main>
  );
}
