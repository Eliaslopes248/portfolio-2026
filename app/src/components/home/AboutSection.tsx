import React from 'react'

export default function AboutSection() {
  return (
    <section className="py-32 border-b border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-emerald-500 mb-4">Philosophy</h2>
            <p className="text-3xl font-serif italic leading-snug">"Architecture is not just about structure, but about the flow of logic from silicon to cloud."</p>
          </div>
          <div className="lg:col-span-8 space-y-8 text-slate-400 font-light text-xl leading-relaxed">
            <p>
            I like building systems that make work disappear.

I enjoy writing something once and letting it scale through automation and good architecture. Most of my work sits at the intersection of systems software, full stack development, and infrastructure. I care about performance, clarity, and making tools that feel simple even when the problems are not.
            </p>
            <p>
            I am currently pursuing Computer Science at North Carolina A&T with a 4.0 major GPA, focused on building software that is clean in code and reliable in production.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
