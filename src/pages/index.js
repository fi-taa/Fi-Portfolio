import React,{useRef} from 'react'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Card2 from '@/components/GraphicsCard'
import Card from '@/components/WebCard'
import ProjectPreviewPage from '@/pages/Developments'
import NavBar from '@/components/NavBar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Slide from '@/components/Slide'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const sectionRef = useRef(null);
  

  return (
    <div>
      <HeroSection></HeroSection>
      <div className='flex justify-center m-10'>
      <Slide/>
      </div>
      <div className='flex justify-center'>
      <Card title="Web Development" />
      <Card2 title="Graphics Design" />
      </div>
      <Contact  sectionRef={sectionRef}/>
    </div>
  )
}
