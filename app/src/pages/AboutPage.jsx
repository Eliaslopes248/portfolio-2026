import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import NavBar from '../components/ui/NavBar'
import { secondary_font_style } from '../components/ui/colors'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Layout>
        <NavBar/>
        {/* banner of page */}
        <div className="w-screen text-center flex justify-center items-center border-0 border-white mt-[10vh]">
            <h1 className={`text-center text-5xl transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}>
                <span className='text-green-400'>About </span> 
                <span className='italic text-white' style={secondary_font_style}>Me</span>
            </h1>
        </div>  
    </Layout>
  )
}
