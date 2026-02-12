export default function HeaderSection() {
  return (
    <header className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-px w-12 bg-emerald-500"></span>
          <span className="text-emerald-500 text-xs font-bold tracking-[0.3em] uppercase">Architecture Index</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-light tracking-tight mb-6">
          My Project <span className="font-serif italic text-white/40">Catalog</span>
        </h1>
        <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
          A technical deep-dive into the architectural portfolio of Elias Lopes. Efficiently filter by technology stack, project type, or deployment environment to evaluate specific system competencies.
        </p>
      </header>
  )
}
