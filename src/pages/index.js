import Image from 'next/image'
import { Inter } from 'next/font/google'
import Page from './page'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Page />
    </div>
  )
}
