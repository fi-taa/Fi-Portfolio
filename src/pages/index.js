import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Card2 from '@/components/Card2'
import Card from '@/components/Card'
import ProjectPreviewPage from '@/pages/ProjectView'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  return (
    <div>
      <HeroSection></HeroSection>
      <Card title="Web Development" />
      <Card2 title="Graphics Design" />
        {/* <ProjecPreviewPage/> */}
    </div>
  )
}
