import React from 'react'
import ProjectCard from './ProjectCard'
import BOILR_THUMNAIL from "../../assets/projects/boilr-thumbnail.png"
/** type for project schema */
type projectType = {
  project_name: string // name of project
  project_type: string // WEB APP, CLI TOOL , CLOUD INFRA, OS, KERNEL DRIVER
  project_description: string // summary of project
  project_thumbnail: string | null | any // image thumbnail
  tags: string // json array from SQL
  github: string | null // github link for source code
  showcase_type: string // DEMO or LIVE
  showcase_link: string | null // link to demo video or real project
  propriotary: string // PUBLIC or PROPRIETARY
}

/** featured projects data */
const FEATURED_PROJECTS: projectType[] = [
  {
    project_name: 'Boilr Open Source CLI',
    project_type: 'CLI Tool',
    project_description:
      'A high-performance command-line interface designed to automate repository scaffolding and workflow orchestration for enterprise DevOps.',
    project_thumbnail:
      "https://vrqwsbqzliixthngwfmo.supabase.co/storage/v1/object/public/projects/boilr-thumbnail.png",
    tags: '["C++"]',
    github: '#',
    showcase_type: 'Live',
    showcase_link: 'https://boilr-oudyisdf0-eliaslopes-projects.vercel.app/',
    propriotary: 'PUBLIC',
  },
  {
    project_name: 'The D.R.E.A.M.S Collective',
    project_type: 'FULL STACK',
    project_description:
      'Enterprise-grade web presence for an academic collective, featuring a headless CMS integration and automated deployment pipelines via GitHub Actions.',
    project_thumbnail:
      'https://vrqwsbqzliixthngwfmo.supabase.co/storage/v1/object/public/projects/dreamscollective.png',
    tags: '["AWS"]',
    github: '#',
    showcase_type: 'Live',
    showcase_link: 'www.thedreamscollective.org',
    propriotary: 'PUBLIC',
  },
  {
    project_name: 'Gate City Gigs',
    project_type: 'Web App',
    project_description:
      'Won 1st Place at BE SMART Hackathon. A local gig-economy platform architected with AWS Lambda and real-time database synchronization.',
    project_thumbnail:
      'https://vrqwsbqzliixthngwfmo.supabase.co/storage/v1/object/public/projects/gcgs.png',
    tags: '["React.js"]',
    github: '#',
    showcase_type: 'Demo',
    showcase_link: '#',
    propriotary: 'PUBLIC',
  },
]

function getPrimaryTag(tags: string): string {
  try {
    const parsed = JSON.parse(tags)
    if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'string') {
      return parsed[0]
    }
    return ''
  } catch {
    return ''
  }
}

export default function FeaturedProjects() {
  return (
    <section className="py-32 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-emerald-500 mb-4">Portfolio</h2>
          <h3 className="text-5xl font-light tracking-tight text-white">Featured Projects.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => {

            return (<ProjectCard project={project}/>)
          })}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-0"></div>
    </section>
  )
}
