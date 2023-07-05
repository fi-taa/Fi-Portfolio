import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Card2 from '@/components/GraphicsCard'
import Card from '@/components/WebCard'
import ProjectPreviewPage from '@/pages/WebProjects'
import NavBar from '@/components/NavBar'
import Contact from '@/components/Contact'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  return (
    <div>
      <NavBar />
      <HeroSection></HeroSection>
      <Card title="Web Development" />
      <Card2 title="Graphics Design" />
      <Contact />
        {/* <ProjecPreviewPage/> */}
    </div>
  )
}
