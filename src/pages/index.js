import React,{useRef} from 'react'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Card2 from '@/components/GraphicsCard'
import Card from '@/components/WebCard'
import ProjectPreviewPage from '@/pages/WebProjects'
import NavBar from '@/components/NavBar'
import Contact from '@/components/Contact'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const sectionRef = useRef(null);
  

  return (
    <div>
      <NavBar sectionRef={sectionRef} />
      <HeroSection></HeroSection>
      <Card title="Web Development" />
      <Card2 title="Graphics Design" />
      <Contact  sectionRef={sectionRef}/>
    </div>
  )
}
