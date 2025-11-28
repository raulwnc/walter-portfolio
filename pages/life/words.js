import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { BookOpen, ArrowLeft } from 'lucide-react';

export default function WordsWisdom() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Words & Wisdom | Walter Nieves</title>
        <meta name="description" content="Books I've read, poetry I've written" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-stone-900 dark:via-amber-900/20 dark:to-orange-900/20">
        {/* Header with back button */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={() => router.push('/life')}
            className="inline-flex items-center text-stone-600 dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 mb-8"
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center mx-auto shadow-2xl">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                Words & Wisdom
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-stone-700 dark:text-stone-100 mb-12 font-light max-w-3xl mx-auto"
            >
              Books that shape me. Words I write. Stories that inspire.
            </motion.p>
          </div>
        </section>

        {/* Two-Tab Layout: Books & Poetry */}
        <section className="px-4 py-12 pb-32">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-stone-800 rounded-3xl shadow-2xl p-8 sm:p-12 border border-stone-200 dark:border-stone-700"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-800 dark:text-amber-300 text-sm font-semibold">
                  <BookOpen className="w-4 h-4" />
                  Coming Soon
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100 mb-4">
                This section is under construction
              </h2>
              
              <p className="text-center text-stone-600 dark:text-stone-200 mb-8 max-w-2xl mx-auto">
                I&apos;m currently curating my reading list and compiling my poetry collection. 
                This space will soon feature two tabs: <strong>Reading Journey</strong> (books I've read with reviews) 
                and <strong>My Words</strong> (original poetry and my book in progress).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Reading Journey Preview */}
                <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border-2 border-amber-200 dark:border-amber-700">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Reading Journey
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-200">
                    Books that have shaped my thinking, complete with ratings, reviews, and key takeaways.
                  </p>
                </div>

                {/* My Words Preview */}
                <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border-2 border-orange-200 dark:border-orange-700">
                  <div className="text-4xl mb-4">✍️</div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                    My Words
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-200">
                    Original poetry, reflections, and a glimpse into my book in progress.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  Check back soon for the full experience ✨
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}