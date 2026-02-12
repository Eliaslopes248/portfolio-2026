import HEAD_SHOT from "../../assets/headshot.jpg"


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-stretch pt-20">
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-24 py-12 md:py-0 border-r border-white/5">
        <div className="space-y-6 max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-emerald-500"></span>
            <span className="text-emerald-500 text-xs font-bold tracking-[0.3em] uppercase">Based in NC</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-[1.1]">
            Elias Lopes <br />
            <span className="font-serif italic text-white/40">Solutions Architect</span> <br />
            <span className="text-gradient">&amp; Software Engineer</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed font-light max-w-lg">
          I’m an aspiring Solutions Architect studying at NC A&T State University, passionate 
          about system software, operating systems, automation, and developer tooling. I enjoy designing 
          scalable systems and building tools that simplify complex problems, turning low-level technology into practical, efficient solutions.
          </p>
          <div className="pt-8 flex flex-wrap gap-6">
            <a className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-none font-bold text-sm tracking-widest uppercase hover:bg-emerald-500 hover:text-white transition-all duration-300" href="/projectCatalog">
              View Projects
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a className="flex items-center gap-3 border border-white/10 px-8 py-4 rounded-none font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-all" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden bg-slate-900">
        <img
          alt="Elias Lopes"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-70 hover:grayscale-0 transition-all duration-1000"
          src={HEAD_SHOT}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-[#0a0a0a] md:to-transparent"></div>
      </div>
    </section>
  )
}
