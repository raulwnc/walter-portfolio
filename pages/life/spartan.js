import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Zap, ArrowLeft } from 'lucide-react';

export default function SpartanSpirit() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Spartan Spirit | Walter Nieves</title>
        <meta name="description" content="Races that forged resilience" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-stone-900 dark:via-red-900/20 dark:to-orange-900/20">
        {/* Header with back button */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={() => router.push('/life')}
            className="inline-flex items-center text-stone-600 dark:text-stone-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Life</span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-amber-600 flex items-center justify-center mx-auto shadow-2xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 dark:from-red-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
                Spartan Spirit
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-stone-700 dark:text-stone-100 mb-12 font-light max-w-3xl mx-auto"
            >
              Races that test me. Obstacles that forge resilience. The journey of endurance.
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 py-12 pb-32">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-stone-800 rounded-3xl shadow-2xl p-8 sm:p-12 border border-stone-200 dark:border-stone-700"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 dark:bg-red-900/30 rounded-full text-red-800 dark:text-red-300 text-sm font-semibold">
                  <Zap className="w-4 h-4" />
                  Coming Soon
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100 mb-4">
                Race Gallery & Timeline
              </h2>
              
              <p className="text-center text-stone-600 dark:text-stone-200 mb-8 max-w-2xl mx-auto">
                I&apos;m currently gathering photos, stats, and reflections from my Spartan race experiences. 
                This space will feature a visual timeline of races, obstacle breakdowns, personal bests, 
                and the lessons learned through mud, sweat, and determination.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Race Photos Preview */}
                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl border-2 border-red-200 dark:border-red-700">
                  <div className="text-4xl mb-4">📸</div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Race Gallery
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-200">
                    Before, during, and after shots from each race. Victory and struggle captured.
                  </p>
                </div>

                {/* Stats Dashboard Preview */}
                <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border-2 border-orange-200 dark:border-orange-700">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Stats & Records
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-200">
                    Total races, miles conquered, obstacles crushed, and personal records.
                  </p>
                </div>

                {/* Motivation Preview */}
                <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border-2 border-amber-200 dark:border-amber-700">
                  <div className="text-4xl mb-4">💪</div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Why I Race
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-200">
                    Personal reflections on what drives me to push through every challenge.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  AROO! More coming soon ⚡
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}