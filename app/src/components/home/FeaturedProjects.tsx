import { useEffect }            from 'react'
import ProjectCard              from './ProjectCard'
import { getProjects }          from '../../middleware/supabaseClient'
import { useLocalStorage }      from 'usehooks-ts'

/** type for project schema */
type projectType = {
  project_name:       string // name of project
  project_type:       string // WEB APP, CLI TOOL , CLOUD INFRA, OS, KERNEL DRIVER
  project_desc:       string // summary of project
  project_thumbnail:  string | null | any // image thumbnail
  tags:               string | string[] // json array from SQL (stringified) or parsed array
  github:             string | null // github link for source code
  showcase_type:      string // DEMO or LIVE
  showcase_link:      string | null // link to demo video or real project
  propriotary:        string // PUBLIC or PROPRIETARY
  featured:           boolean | null
}

/** featured projects data */
const FEATURED_PROJECTS: projectType[] = [
  {
    project_name: 'Boilr Open Source CLI',
    project_type: 'CLI Tool',
    project_desc:
      'A high-performance command-line interface designed to automate repository scaffolding and workflow orchestration for enterprise DevOps.',
    project_thumbnail:
      "https://vrqwsbqzliixthngwfmo.supabase.co/storage/v1/object/public/projects/boilr-thumbnail.png",
    tags: '["C++"]',
    github: '#',
    showcase_type: 'Live',
    showcase_link: 'https://boilr-oudyisdf0-eliaslopes-projects.vercel.app/',
    propriotary: 'PUBLIC',
    featured: true
  },
  {
    project_name: 'The D.R.E.A.M.S Collective',
    project_type: 'FULL STACK',
    project_desc:
      'Enterprise-grade web presence for an academic collective, featuring a headless CMS integration and automated deployment pipelines via GitHub Actions.',
    project_thumbnail:
      'https://vrqwsbqzliixthngwfmo.supabase.co/storage/v1/object/public/projects/dreamscollective.png',
    tags: '["AWS"]',
    github: '#',
    showcase_type: 'Live',
    showcase_link: 'www.thedreamscollective.org',
    propriotary: 'PUBLIC',
    featured: true
  },
  {
    project_name: 'Gate City Gigs',
    project_type: 'Web App',
    project_desc:
      'Won 1st Place at BE SMART Hackathon. A local gig-economy platform architected with AWS Lambda and real-time database synchronization.',
    project_thumbnail:
      'https://vrqwsbqzliixthngwfmo.supabase.co/storage/v1/object/public/projects/gcgs.png',
    tags: '["React.js"]',
    github: '#',
    showcase_type: 'Demo',
    showcase_link: '#',
    propriotary: 'PUBLIC',
    featured: true
  },
]



export default function FeaturedProjects() {

  /** projects */
  //const [projects, setProjects] = React.useState<projectType[]>([]);
  const [projects, setProjects] = useLocalStorage<projectType[] | null>("projects", null);
  /** fetch the projects */
  useEffect(()=>{
    /** check cache first */
    if (projects && projects.length > 0){
      console.log("Projects cahced!");
      return;
    }
    /** fetch projects */
    async function fetch(){
        const data = await getProjects();
        setProjects(data);
    }

    fetch(); 

  }, []);

  //useEffect(()=>{console.log("projs:", projects)},[projects]);


  return (
    <section className="py-32 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-emerald-500 mb-4">Portfolio</h2>
          <div className="flex w-full border-0 border-white flex-1 justify-between flex-wrap gap-[20px]">
            <h3 className="text-5xl font-light tracking-tight text-white">Featured Projects.</h3>
            <a className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-none font-bold text-sm tracking-widest uppercase hover:bg-emerald-500 hover:text-white transition-all duration-300" href="/projectCatalog">
              View Projects
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects && projects.length > 0
            ? (() => {
                const featured = projects.filter((p) => p.featured === true);
                const toShow = featured.length > 0 ? featured.slice(0, 3) : projects.slice(0, 3);
                return toShow.map((project) => (
                  <ProjectCard
                    key={project.project_name}
                    project={{
                      project_name: project.project_name,
                      project_type: project.project_type,
                      project_desc: project.project_desc,
                      project_thumbnail: project.project_thumbnail,
                      tags: project.tags,
                      github: project.github,
                      showcase_type: project.showcase_type,
                      showcase_link: project.showcase_link,
                      propriotary: project.propriotary,
                      featured: project.featured ?? null,
                    }}
                  />
                ));
              })()
            : FEATURED_PROJECTS.map((project) => (
                <ProjectCard
                  key={project.project_name}
                  project={{
                    project_name: project.project_name,
                    project_type: project.project_type,
                    project_desc: project.project_desc,
                    project_thumbnail: project.project_thumbnail,
                    tags: project.tags,
                    github: project.github,
                    showcase_type: project.showcase_type,
                    showcase_link: project.showcase_link,
                    propriotary: project.propriotary,
                    featured: project.featured ?? null,
                  }}
                />
              ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-0"></div>
    </section>
  )
}
