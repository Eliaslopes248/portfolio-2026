import React from 'react'
import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import HeaderSection from '../components/projects/HeaderSection'
import ProjectSection from '../components/projects/ProjectSection'
import { useLocalStorage } from 'usehooks-ts'
import { type projectType } from '../components/home/ProjectCard'
import { useEffect } from 'react'
import { getProjects } from '../middleware/supabaseClient'


export default function ProjectCatalog() {

  return (
    <div className="w-screen h-screen flex-1">
        <NavBar/>
        <div className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
            <HeaderSection/>
            <ProjectSection/>
            <Footer/>
        </div>
    </div>
  )
}
