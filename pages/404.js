import Link from "next/link";

export default function Custom404() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6 py-16 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl sm:text-2xl font-medium mb-4">Lost in the data?</p>
      <p className="text-md sm:text-lg text-gray-600 mb-8">
        The page you’re looking for doesn’t exist. But innovation is never far away.
      </p>
      <Link href="/">
        <span className="text-blue-600 hover:underline text-base sm:text-lg">
          Go back to walternieves.com
        </span>
      </Link>
    </main>
  );
}
