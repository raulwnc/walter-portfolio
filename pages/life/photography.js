import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Camera, ArrowLeft } from 'lucide-react';

export default function ThroughMyLens() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Through My Lens | Walter Nieves</title>
        <meta name="description" content="Moments worth capturing - Samsung photography" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-stone-900 dark:via-emerald-900/20 dark:to-teal-900/20">
        {/* Header with back button */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={() => router.push('/life')}
            className="inline-flex items-center text-stone-600 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 mb-8"
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mx-auto shadow-2xl">
                <Camera className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Through My Lens
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-stone-700 dark:text-stone-100 mb-12 font-light max-w-3xl mx-auto"
            >
              Moments I capture. Beauty I notice. Stories told through Samsung photography.
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
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-800 dark:text-emerald-300 text-sm font-semibold">
                  <Camera className="w-4 h-4" />
                  Coming Soon
                </div>
              </div>

              <h2 className="text-3xl font-bold text-center text-stone-900 dark:text-stone-100 mb-4">
                Photo Gallery
              </h2>
              
              <p className="text-center text-stone-600 dark:text-stone-200 mb-8 max-w-2xl mx-auto">
                I'm currently curating my favorite Samsung photos—sunsets that stopped me in my tracks, 
                beach moments that felt timeless, flowers that caught the light just right, and scenery 
                that made me pause. This space will feature an interactive masonry gallery with filters by theme.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {/* Sunsets Preview */}
                <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border-2 border-orange-200 dark:border-orange-700">
                  <div className="text-4xl mb-4">🌅</div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Sunsets
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-200">
                    Golden hour magic
                  </p>
                </div>

                {/* Beach Preview */}
                <div className="p-6 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl border-2 border-cyan-200 dark:border-cyan-700">
                  <div className="text-4xl mb-4">🏖️</div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Beach
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-200">
                    Ocean & sand
                  </p>
                </div>

                {/* Flowers Preview */}
                <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-2xl border-2 border-pink-200 dark:border-pink-700">
                  <div className="text-4xl mb-4">🌸</div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Flowers
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-200">
                    Nature's details
                  </p>
                </div>

                {/* Scenery Preview */}
                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border-2 border-emerald-200 dark:border-emerald-700">
                  <div className="text-4xl mb-4">🏞️</div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                    Scenery
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-200">
                    Landscapes
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 dark:bg-stone-700 rounded-full text-stone-600 dark:text-stone-300 text-sm">
                  <Camera className="w-4 h-4" />
                  <span>Shot on Samsung</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  Full masonry gallery coming soon 📸
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}