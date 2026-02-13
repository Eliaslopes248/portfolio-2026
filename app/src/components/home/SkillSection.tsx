
/** types and skills */
type Skill = {
  name: string
  src: string
  alt: string
  invert?: boolean
}

/** skills in slider */
const MARQUEE_SKILLS: Skill[] = [
  { name: 'Python',      alt: 'Python',      src: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'C++ / C',     alt: 'C++',         src: 'https://cdn.simpleicons.org/cplusplus/00599C' },
  { name: 'Kubernetes',  alt: 'Kubernetes',  src: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'Docker',      alt: 'Docker',      src: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'AWS Cloud',   alt: 'AWS',         src: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000' },
]
/** skills in grid */
const GRID_SKILLS: Skill[] = [
  { name: 'AWS Cloud',      alt: 'AWS',           src: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000' },
  { name: 'Docker',         alt: 'Docker',        src: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'React.js',       alt: 'React',         src: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js',        alt: 'Node.js',       src: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'MySQL',          alt: 'MySQL',         src: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Git',            alt: 'Git',           src: 'https://cdn.simpleicons.org/git/F05032', invert: true },
  { name: 'C++ / C',        alt: 'C++',           src: 'https://cdn.simpleicons.org/cplusplus/00599C' },
  { name: 'Linux & Bash',   alt: 'Linux',         src: 'https://cdn.simpleicons.org/linux/FCC624' },
  { name: 'Java',           alt: 'Java',          src: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000' },
  { name: 'Spring Boot',    alt: 'Spring Boot',   src: 'https://cdn.simpleicons.org/springboot/6DB33F' },
  { name: 'Tailwind CSS',   alt: 'Tailwind CSS',  src: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'Firebase',       alt: 'Firebase',      src: 'https://cdn.simpleicons.org/firebase' },
  { name: 'Vercel',         alt: 'Vercel',        src: 'https://cdn.simpleicons.org/vercel' },
  { name: 'GitHub Actions', alt: 'GitHub Actions',src: 'https://cdn.simpleicons.org/githubactions' },
  { name: 'Jenkins',        alt: 'Jenkins',       src: 'https://cdn.simpleicons.org/jenkins' },
  { name: 'Perforce',       alt: 'Perforce',      src: 'https://cdn.simpleicons.org/perforce' },
]

export default function SkillSection() {
  return (
    <section className="py-24 bg-zinc-950" id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-emerald-500 mb-4">Stack &amp; Tools</h2>
            <h3 className="text-4xl font-light tracking-tight">Engineered for Performance.</h3>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">A curated selection of technologies I utilize to build scalable and efficient solutions.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 overflow-hidden">
        <div className="flex animate-marquee gap-4 whitespace-nowrap px-4">
          <div className="flex gap-4 items-center">
            {MARQUEE_SKILLS.map((skill, i) => (
              <div key={`marquee-${i}-${skill.name}`} className="skill-chip px-8 py-6 flex items-center gap-4 grayscale hover:grayscale-0">
                <img alt={skill.alt} className="w-10 h-10" src={skill.src} />
                <span className="text-sm font-bold tracking-widest uppercase">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
          {GRID_SKILLS.map((skill, i) => (
            <div key={`grid-${i}-${skill.name}`} className="skill-chip p-6 flex flex-col items-center gap-3">
              <img
                alt={skill.alt}
                className={`w-8 h-8 opacity-50 ${skill.invert ? 'invert' : ''}`}
                src={skill.src}
              />
              <span className="text-[10px] font-bold tracking-tighter uppercase opacity-50">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
