import React from 'react'
import { useLocalStorage }  from 'usehooks-ts'
import { type projectType } from '../home/ProjectCard'
import { useEffect }        from 'react'
import { getProjects }      from '../../middleware/supabaseClient'
import type { cacheItemType } from '../hooks/UseCache'
import useCache from '../hooks/UseCache'


/** filter configuration */
type filterConfigType = {classFilter: string, tagFilter: string}
const PROJECTS_CACHE_KEY = "projects";
//const CACHE_TTL_MS = 1000 * 10;

export default function ProjectSection() {

  // web hook made for caching
  const { getCachedData, setCachedData } = useCache();
  // set to cache value
  const [projects, setProjects]         = React.useState<cacheItemType | null>(()=>{ return getCachedData(PROJECTS_CACHE_KEY); });
  //const [projects, setProjects]         = useLocalStorage<projectType[] | null>("projects-catalog", null);
  const [filterConfig, setFilterConfig] = React.useState<filterConfigType>(
  {
    classFilter: "ALL",
    tagFilter: "ALL",
  });
  const [projTypes, setProjTypes]       = React.useState<string[]>(["ALL"]);
  const [tags, setTags]                 = React.useState<string[]>(["ALL"]);

  /** helper: normalize tags from project record into string[] */
  function getProjectTags(proj: projectType): string[] {
    if (Array.isArray(proj.tags)) {
      return proj.tags;
    }
    if (typeof proj.tags === "string") {
      try {
        const parsed = JSON.parse(proj.tags);
        if (Array.isArray(parsed)) {
          return parsed.filter((t) => typeof t === "string");
        }
      } catch {
        // ignore parse errors
      }
    }
    return [];
  }

  /** fetch the projects (cache-aware) */
  useEffect(() => {
    // check if item is cached
    const cached = getCachedData(PROJECTS_CACHE_KEY);
    // if found then set the data
    if (cached && cached.data.length > 0) {
      setProjects(cached);
      return;
    }
    // data is not cached, so must fetch from server
    let cancelled = false;
    (async () => {
      // request project data
      const data = await getProjects();
      if (cancelled || !data) return;
      // cache data in local storage
      setCachedData(PROJECTS_CACHE_KEY, data);
      // update useState
      setProjects(getCachedData(PROJECTS_CACHE_KEY));
    })();
    return () => { cancelled = true; };
  }, []);

  /** derive filter options whenever projects change */
  useEffect(() => {
    if (!projects || projects.data.length === 0) return;

    const typeSet = new Set<string>(["ALL"]);
    const tagSet  = new Set<string>(["ALL"]);

    for (let i = 0; i < projects.data.length; i++) {
      const proj = projects.data[i];
      typeSet.add(proj.project_type);

      const projTags = getProjectTags(proj);
      projTags.forEach((t: string) => {
        tagSet.add(t);
      });
    }

    setProjTypes(Array.from(typeSet));
    setTags(Array.from(tagSet));
  }, [projects]);

  /** handlers to update filter config (single-select per group) */
  function handleClassFilterChange(value: string) {
    setFilterConfig(prev => ({
      ...prev,
      classFilter: value,
    }));
  }

  function handleTagFilterChange(value: string) {
    setFilterConfig(prev => ({
      ...prev,
      tagFilter: value,
    }));
  }

  /** filter algorithm: derive list of projects from current filter config */
  const filteredProjects: projectType[] = React.useMemo(() => {
    if (!projects || projects.data.length === 0) return [];

    return projects.data.filter((proj:projectType) => {
      const classMatch =
        filterConfig.classFilter === "ALL" ||
        proj.project_type === filterConfig.classFilter;

      const projTags = getProjectTags(proj);
      const tagMatch =
        filterConfig.tagFilter === "ALL" ||
        projTags.includes(filterConfig.tagFilter);

      return classMatch && tagMatch;
    });
  }, [projects, filterConfig]);


  /** row component for each project in the table */
  function ProjectRow({ project }: { project: projectType }) {
    const projTags = getProjectTags(project);

    return (
      <div className="data-row grid grid-cols-12 gap-4 py-8 lg:px-4 px-16 items-center">
        <div className="col-span-3">
          <h3 className="text-lg font-medium text-white mb-1">
            {project.project_name}
          </h3>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">
            {project.project_type}
          </span>
        </div>
        <div className="col-span-3">
          <div className="flex flex-wrap gap-2">
            {projTags.map((t) => (
              <span
                key={`${project.project_name}-${t}`}
                className="px-2 py-0.5 border border-white/10 text-slate-300 text-[10px] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-4">
          <p className="text-sm text-slate-400 font-light leading-snug">
            {project.project_desc}
          </p>
        </div>
        <div className="col-span-2 flex justify-end gap-6">
          {project.github && (
            <a
              className="text-white hover:text-emerald-400 transition-colors"
              href={project.github}
              title="GitHub"
            >
              <span className="material-symbols-outlined text-xl">code</span>
            </a>
          )}
          {project.showcase_link && (
            <a
              className="text-white hover:text-emerald-400 transition-colors"
              href={project.showcase_link}
              title={project.showcase_type || "Live Demo"}
            >
              <span className="material-symbols-outlined text-xl">
                open_in_new
              </span>
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen flex-1">
        {/* filter parent */}
        <div className="mb-12 space-y-6">
            {/* filter 1 */}
            <div className="flex max-w-[900px] flex-col gap-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Filter by Classification</label>
            <div className="flex w-[94%] flex-wrap gap-3">
              {projTypes.length > 0 &&
                projTypes.map((t, i) => {
                  return (
                    <button
                      key={`${t}-${i}`}
                      className={`filter-btn ${filterConfig.classFilter === t ? "active" : ""}`}
                      type="button"
                      onClick={() => handleClassFilterChange(t)}
                    >
                      {t}
                    </button>
                  );
                })}
            </div>
            </div>
            {/* filter 2 */}
            <div className="flex max-w-[900px] flex-col gap-4">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Filter by Technology</label>
            <div className="flex w-[94%] flex-wrap gap-3 sm:p-[20px] md:p-0">
            {tags.length > 0 &&
                tags.map((t, i) => {
                  return (
                    <button
                      key={`${t}-${i}`}
                      className={`filter-btn ${filterConfig.tagFilter === t ? "active" : ""}`}
                      type="button"
                      onClick={() => handleTagFilterChange(t)}
                    >
                      {t}
                    </button>
                  );
                })}
            </div>
            </div>
        </div>
        <div className="overflow-x-auto">
        <div className="min-w-[1000px] max-w-[1200px]">
            {/* <!-- TableHeader start --> */}
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/20 md:px-4 px-6 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
              <div className="col-span-3">Project Name &amp; Type</div>
              <div className="col-span-3">Stack / Technologies</div>
              <div className="col-span-4">Technical Brief</div>
              <div className="col-span-2 text-right mr-[8vw] md:mr-[2vw] lg:mr-0">Links</div>
            </div>

            {/* map results here */}
            {filteredProjects.length === 0 ? (
              <div className="py-8 px-4 text-sm text-slate-500">
                No projects match the current filters.
              </div>
            ) : (
              filteredProjects.map((proj) => (
                <ProjectRow key={proj.project_name} project={proj} />
              ))
            )}

              


          </div>
        </div>
    </div>
  )
}
