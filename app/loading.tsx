export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-300">Loading MicroSaaS Academy AI...</h2>
        <p className="text-sm text-gray-500 mt-2">Preparing your AI mentor</p>
      </div>
    </div>
  );
}
