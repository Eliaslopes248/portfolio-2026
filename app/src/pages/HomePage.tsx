import AboutSection from '../components/home/AboutSection'
import FeaturedProjects from '../components/home/FeaturedProjects'
import HeroSection from '../components/home/HeroSection'
import SkillSection from '../components/home/SkillSection'
import Footer from '../components/ui/Footer'
import NavBar from '../components/ui/NavBar'

export default function HomePage() {
  return (
    <div className='w-screen h-screen'>
        <NavBar/>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <FeaturedProjects/>
        <Footer/>
    </div>
  )
}
