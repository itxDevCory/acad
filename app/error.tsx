'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 border border-gray-700 rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold mb-4 text-red-400">Something went wrong!</h2>
        <p className="text-gray-300 mb-6">
          We encountered an unexpected error. Don't worry, your data is safe.
        </p>
        <div className="bg-gray-900 border border-gray-700 rounded p-4 mb-6 text-left">
          <p className="text-sm text-gray-400 font-mono break-all">
            {error.message || 'Unknown error occurred'}
          </p>
          {error.digest && (
            <p className="text-xs text-gray-500 mt-2">
              Error ID: {error.digest}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          <button
            onClick={reset}
            className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
          >
            Go Home
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          If this problem persists, please check your API key configuration in .env.local
        </p>
      </div>
    </div>
  );
}
