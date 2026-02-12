/** type for project schema */
export type projectType = {
    project_name: string // name of project
    project_type: string // WEB APP, CLI TOOL , CLOUD INFRA, OS, KERNEL DRIVER
    project_desc: string // summary of project
    project_thumbnail: string | null // image thumbnail
    tags: string | string[] // json array from SQL (stringified) or parsed array
    github: string | null // github link for source code
    showcase_type: string // DEMO or LIVE
    showcase_link: string | null // link to demo video or real project
    propriotary: string // PUBLIC or PROPRIETARY
  }

export default function ProjectCard({ project }: { project: projectType }) {

    /** normalize tags column into a string[] */
    function normalizeTags(tags: string | string[]): string[] {
      if (Array.isArray(tags)) {
        return tags.filter((t) => typeof t === 'string').slice(0, 3)
      }
      if (typeof tags === 'string') {
        try {
          const parsed = JSON.parse(tags)
          if (Array.isArray(parsed)) {
            return parsed
              .filter((t) => typeof t === 'string')
              .slice(0, 3)
          }
        } catch {
          // fall through to empty array
        }
      }
      return []
    }

    const tagList    = normalizeTags(project.tags);
    const primaryTag = tagList[0] ?? '';
    return (
      <div className="glass-card group flex flex-col h-full">
        <div className="relative overflow-hidden aspect-video">
          <img
            alt={project.project_name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            src={project.project_thumbnail ?? ''}
          />
          <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
          {/* tags */}
          <div className="flex gap-2 mb-4 w-full flex-wrap">
            <span className="text-[10px] font-bold px-2 py-1 border border-emerald-500/20 text-emerald-400 uppercase">
              {project.project_type}
            </span>
            {primaryTag && (
              <span className="text-[10px] flex justify-center items-center text-center font-bold px-2 py-1 border border-white/10 text-slate-400 uppercase">
                {primaryTag}
              </span>
            )}
            {tagList.length > 1 &&
              tagList.slice(1).map((t, i) => (
                <span
                  key={`${project.project_name}-tag-${i}-${t}`}
                  className="text-[10px] font-bold px-2 py-1 border border-white/10 text-slate-400 uppercase"
                >
                  {t}
                </span>
              ))}
          </div>
          <h4 className="text-2xl font-light text-white mb-3">{project.project_name}</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
            {project.project_desc}
          </p>
          
          {/* github and live */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/5">
            {project.github && (
              <a
                className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-emerald-400 transition-colors"
                href={project.github}
              >
                <span className="material-symbols-outlined text-lg">code</span> GitHub
              </a>
            )}
            {project.showcase_link && (
              <a
                className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-emerald-400 transition-colors"
                href={project.showcase_link}
              >
                <span className={`material-symbols-outlined text-lg ${project.showcase_type? "":"hidden"}`}>open_in_new</span>{' '}
                {project.showcase_type}
              </a>
            )}
            {project.propriotary && (
              <p
                className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-emerald-400 transition-colors"
              >
                PROPRIOTARY
              </p>
            )}
          </div>
        </div>
      </div>
    )
}
