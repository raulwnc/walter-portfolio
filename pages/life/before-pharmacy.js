import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ArrowLeft, ChevronDown, MapPin, Calendar, Heart } from 'lucide-react';

// Timeline data - YOU CAN CUSTOMIZE THIS
const TIMELINE_DATA = [
  {
    id: 'childhood',
    era: 'Childhood',
    years: 'Early Years',
    icon: '🧒',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    borderColor: 'border-blue-200 dark:border-blue-700',
    title: 'Roots & Early Years',
    subtitle: 'Where it all began',
    story: `This is where your childhood story goes. Talk about:
    
• Where you grew up
• Your family background
• Early interests and hobbies
• Memorable childhood moments
• Values instilled in you early on

Replace this placeholder text with your real story!`,
    milestones: [
      { icon: '🏡', label: 'Hometown', value: '[Your hometown]' },
      { icon: '👨‍👩‍👦', label: 'Family', value: '[Family background]' },
      { icon: '⭐', label: 'Early Interest', value: '[What you loved as a kid]' }
    ],
    photos: [
      { id: 1, caption: 'Childhood photo 1' },
      { id: 2, caption: 'Childhood photo 2' },
      { id: 3, caption: 'Childhood photo 3' }
    ],
    reflection: 'Looking back, this early foundation shaped who I am today by...'
  },
  {
    id: 'school',
    era: 'School Years',
    years: 'K-12',
    icon: '📚',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    borderColor: 'border-purple-200 dark:border-purple-700',
    title: 'Growing & Learning',
    subtitle: 'The formative years',
    story: `This is where your school story goes. Talk about:

• Elementary through high school experiences
• Favorite subjects and teachers
• Activities, sports, and clubs
• Friends and community connections
• Moments that shaped your interests

Replace this placeholder text with your real story!`,
    milestones: [
      { icon: '🎓', label: 'Schools', value: '[School names]' },
      { icon: '📖', label: 'Favorite Subject', value: '[Your favorite subject]' },
      { icon: '🏆', label: 'Achievement', value: '[Proud moment]' }
    ],
    photos: [
      { id: 1, caption: 'School photo 1' },
      { id: 2, caption: 'School photo 2' },
      { id: 3, caption: 'School photo 3' }
    ],
    reflection: 'These years taught me the importance of...'
  },
  {
    id: 'undergraduate',
    era: 'Undergraduate',
    years: '20XX - 20XX',
    icon: '🎓',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20',
    borderColor: 'border-amber-200 dark:border-amber-700',
    title: 'The Path to Pharmacy',
    subtitle: 'Finding my calling',
    story: `This is where your undergraduate story goes. Talk about:

• University name and major
• Why you chose that path initially
• Key experiences and projects
• Organizations and leadership roles
• The moment you decided on pharmacy
• Mentors who influenced you

Replace this placeholder text with your real story!`,
    milestones: [
      { icon: '🏫', label: 'University', value: '[University name]' },
      { icon: '📚', label: 'Major', value: '[Your major]' },
      { icon: '💡', label: 'The Moment', value: '[When you chose pharmacy]' }
    ],
    photos: [
      { id: 1, caption: 'Undergrad photo 1' },
      { id: 2, caption: 'Undergrad photo 2' },
      { id: 3, caption: 'Undergrad photo 3' }
    ],
    reflection: 'This journey led me to pharmacy because...'
  }
];

const ChapterCard = ({ chapter, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline connector (not on last item) */}
      {index < TIMELINE_DATA.length - 1 && (
        <div className="hidden md:block absolute top-1/2 left-full w-16 h-1 bg-gradient-to-r from-stone-300 to-stone-200 dark:from-stone-600 dark:to-stone-700" />
      )}

      {/* Chapter Card */}
      <div
        onClick={() => onToggle(chapter.id)}
        className={`bg-gradient-to-br ${chapter.bgColor} border-2 ${chapter.borderColor} rounded-3xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 ${
          isExpanded ? 'shadow-2xl scale-105' : 'shadow-lg'
        }`}
      >
        {/* Card Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${chapter.color} flex items-center justify-center text-3xl shadow-lg`}>
              {chapter.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                {chapter.era}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300">
                {chapter.years}
              </p>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-stone-500 dark:text-stone-400" />
          </motion.div>
        </div>

        {/* Preview (always visible) */}
        <div className="mb-4">
          <h4 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">
            {chapter.title}
          </h4>
          <p className="text-sm text-stone-600 dark:text-stone-300 italic">
            {chapter.subtitle}
          </p>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 border-t-2 border-stone-200 dark:border-stone-700">
                {/* Story */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    My Story
                  </h5>
                  <p className="text-stone-700 dark:text-stone-200 whitespace-pre-line leading-relaxed">
                    {chapter.story}
                  </p>
                </div>

                {/* Milestones */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">
                    Key Milestones
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {chapter.milestones.map((milestone, i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-stone-800 p-4 rounded-xl border border-stone-200 dark:border-stone-700"
                      >
                        <div className="text-2xl mb-2">{milestone.icon}</div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">
                          {milestone.label}
                        </div>
                        <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                          {milestone.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery Placeholder */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">
                    Photo Gallery
                  </h5>
                  <div className="grid grid-cols-3 gap-4">
                    {chapter.photos.map((photo) => (
                      <div
                        key={photo.id}
                        className="aspect-square bg-stone-200 dark:bg-stone-700 rounded-xl flex items-center justify-center border-2 border-dashed border-stone-300 dark:border-stone-600"
                      >
                        <div className="text-center">
                          <div className="text-3xl mb-2">📷</div>
                          <div className="text-xs text-stone-500 dark:text-stone-400">
                            {photo.caption}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-3 text-center">
                    Add your photos here!
                  </p>
                </div>

                {/* Reflection */}
                <div className="bg-white dark:bg-stone-800 p-6 rounded-xl border-2 border-stone-200 dark:border-stone-700">
                  <h5 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-2">
                    💭 Reflection
                  </h5>
                  <p className="text-sm text-stone-700 dark:text-stone-200 italic">
                    {chapter.reflection}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand hint */}
        {!isExpanded && (
          <div className="text-center mt-4">
            <span className="text-xs text-stone-500 dark:text-stone-400">
              Click to read more →
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function BeforePharmacy() {
  const router = useRouter();
  const [expandedChapter, setExpandedChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  return (
    <>
      <Head>
        <title>Life Before Pharmacy | Walter Nieves</title>
        <meta name="description" content="My journey before pharmacy school" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/30 dark:from-stone-900 dark:via-stone-800 dark:to-amber-900/20">
        {/* Header with back button */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={() => router.push('/life')}
            className="inline-flex items-center text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 mb-8"
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
              className="mb-8"
            >
              <div className="text-7xl mb-4">🌱</div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 dark:from-blue-400 dark:via-purple-400 dark:to-amber-400 bg-clip-text text-transparent">
                Before the White Coat
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-stone-700 dark:text-stone-100 mb-12 font-light max-w-3xl mx-auto"
            >
              The journey that led me here. The experiences that shaped who I am.
            </motion.p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-4 py-12 pb-32">
          <div className="max-w-7xl mx-auto">
            {/* Desktop: Horizontal Timeline */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {TIMELINE_DATA.map((chapter, index) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  index={index}
                  isExpanded={expandedChapter === chapter.id}
                  onToggle={toggleChapter}
                />
              ))}
            </div>

            {/* Mobile: Vertical Timeline */}
            <div className="md:hidden space-y-8">
              {TIMELINE_DATA.map((chapter, index) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  index={index}
                  isExpanded={expandedChapter === chapter.id}
                  onToggle={toggleChapter}
                />
              ))}
            </div>

            {/* Journey Continues */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="inline-block bg-white dark:bg-stone-800 px-8 py-6 rounded-3xl border-2 border-stone-200 dark:border-stone-700 shadow-xl">
                <div className="text-4xl mb-3">→</div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                  The Journey Continues
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 max-w-md">
                  From these roots to pharmacy school at University of Pittsburgh. 
                  Every experience shaped the pharmacist I'm becoming.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}