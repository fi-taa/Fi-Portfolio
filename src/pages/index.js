import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Projects from '@/components/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Projects></Projects>
    </div>
  )
}
