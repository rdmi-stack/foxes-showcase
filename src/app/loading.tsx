export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
        <span className="text-white/50 text-sm font-medium">Loading...</span>
      </div>
    </div>
  );
}
