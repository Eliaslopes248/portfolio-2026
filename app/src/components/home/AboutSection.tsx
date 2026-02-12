import React from 'react'

export default function AboutSection() {
  return (
    <section className="py-32 border-b border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-emerald-500 mb-4">Philosophy</h2>
            <p className="text-3xl font-serif italic leading-snug">"Architecture is not just about structure, but about the flow of logic through silicon and cloud."</p>
          </div>
          <div className="lg:col-span-8 space-y-8 text-slate-400 font-light text-xl leading-relaxed">
            <p>
              Currently pursuing Computer Science at <span className="text-white font-medium">North Carolina A&amp;T</span> with a 3.93 GPA. My technical foundation is built on the intersection of low-level systems programming and modern cloud infrastructure.
            </p>
            <p>
              Having architected tools like <span className="text-white font-medium">Boilr CLI</span> and contributed to performance engineering at <span className="text-white font-medium">NVIDIA</span>, I specialize in building software that is as aesthetically sound in its code as it is functional in production.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
