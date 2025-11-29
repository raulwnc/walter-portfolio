import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { BookOpen, Camera, Zap, Sparkles } from 'lucide-react';

export default function Life() {
  const router = useRouter();

  const sections = [
    {
      id: 'before-pharmacy',
      title: 'Life Before Pharmacy',
      description: 'The journey that led me here',
      icon: Sparkles,
      gradient: 'from-blue-400 to-purple-600',
      href: '/life/before-pharmacy',
      available: true
    },
    {
      id: 'words',
      title: 'Words & Wisdom',
      description: 'Books I have read, poetry I have written',
      icon: BookOpen,
      gradient: 'from-amber-400 to-orange-600',
      href: '/life/words',
      available: true
    },
    {
      id: 'spartan',
      title: 'Spartan Spirit',
      description: 'Races that forged resilience',
      icon: Zap,
      gradient: 'from-red-500 to-amber-600',
      href: '/life/spartan',
      available: true
    },
    {
      id: 'photography',
      title: 'Through My Lens',
      description: 'Moments worth capturing',
      icon: Camera,
      gradient: 'from-emerald-400 to-teal-600',
      href: '/life/photography',
      available: true
    }
  ];

  const handleCardClick = (section) => {
    if (section.available) {
      router.push(section.href);
    }
  };

  return (
    <>
      <Head>
        <title>Life | Walter Nieves</title>
        <meta name="description" content="Beyond the white coat - the human behind the PharmD" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 dark:from-zinc-800 dark:via-neutral-800 dark:to-stone-800">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence baseFrequency="0.9" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")'
          }} />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Small profile photo - placeholder for now */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 mx-auto shadow-2xl" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                Beyond the White Coat
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-stone-700 dark:text-stone-100 mb-8 font-light"
            >
              The human behind the PharmD
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-stone-600 dark:text-stone-200 max-w-3xl mx-auto leading-relaxed"
            >
              The journey that brought me here. Books that shape me. Races that test me. 
              <br className="hidden md:block" />
              Moments I capture. Words I write.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16"
            >
              <div className="inline-flex flex-col items-center">
                <span className="text-sm text-stone-500 dark:text-stone-300 mb-2">Explore</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-stone-400 dark:text-stone-500"
                >
                  ↓
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Cards */}
        <section className="px-4 py-20 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                
                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => handleCardClick(section)}
                    className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-stone-700 shadow-xl hover:shadow-2xl transition-all duration-500 ${
                      section.available ? 'cursor-pointer' : 'cursor-not-allowed opacity-75'
                    }`}
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative p-10 md:p-12">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900 dark:text-stone-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 dark:group-hover:from-amber-400 dark:group-hover:to-orange-400 transition-all duration-500">
                        {section.title}
                      </h2>

                      {/* Description */}
                      <p className="text-lg text-stone-600 dark:text-stone-200 leading-relaxed">
                        {section.description}
                      </p>

                      {/* Arrow indicator */}
                      {section.available && (
                        <motion.div
                          className="mt-8 inline-flex items-center text-stone-500 dark:text-stone-300 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <span className="text-sm font-medium mr-2">Explore</span>
                          →
                        </motion.div>
                      )}

                      {/* Coming soon badge */}
                      {!section.available && (
                        <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-400 text-sm font-medium">
                          Coming Soon
                        </div>
                      )}
                    </div>

                    {/* Decorative corner accent */}
                    <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${section.gradient} opacity-10 dark:opacity-20 rounded-full blur-2xl`} />
                  </motion.div>
                );
              })}
            </div>

            {/* Back to portfolio link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-16"
            >
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center text-stone-600 dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300"
              >
                <span className="mr-2">←</span>
                <span className="text-lg">Back to Portfolio</span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}