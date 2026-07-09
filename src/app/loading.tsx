export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-10 w-10">
          <div className="border-secondary-200 absolute inset-0 rounded-full border-2" />
          <div className="border-t-primary-600 absolute inset-0 animate-spin rounded-full border-2 border-transparent" />
        </div>
        <p className="text-secondary-500 text-sm font-medium tracking-wide">
          Loading
        </p>
      </div>
    </div>
  )
}
