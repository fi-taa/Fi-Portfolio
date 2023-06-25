import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import HeroSection from '@/components/HeroSection'
import Card2 from '@/components/Card2'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  return (
    <div>
      <HeroSection></HeroSection>
      <Card title="Web Development" />
      <Card title="Graphics Design" />
      {/* <Projects></Projects> */}
      
    </div>
  )
}
