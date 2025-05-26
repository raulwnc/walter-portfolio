import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6 py-16 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold text-blue-600 mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl font-semibold mb-2"
      >
        You’ve wandered outside the treatment plan 🚧
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-md sm:text-lg text-gray-600 max-w-xl mb-8"
      >
        Let&apos;s get you back on track.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        <Link href="/">
          <span className="text-blue-600 hover:underline text-base sm:text-lg">
            ← Return to walternieves.com
          </span>
        </Link>
      </motion.div>
    </main>
  );
}
