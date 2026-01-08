import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="text-8xl mb-4">🔍</div>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-300">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
        >
          Go Back Home
        </Link>
        <div className="mt-8 text-sm text-gray-500">
          <p>Looking for something specific?</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-blue-400 hover:text-blue-300">
                → Main Chat Interface
              </Link>
            </li>
            <li>
              <Link href="/api/chat" className="text-blue-400 hover:text-blue-300">
                → API Health Check
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
