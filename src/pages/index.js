import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import HeroSection from '@/components/HeroSection'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <Card image="bg.jpeg"></Card>
      <Card image="bg1.jpeg"></Card>
      <Projects></Projects>
      
    </div>
  )
}
