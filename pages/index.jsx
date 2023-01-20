import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Header } from '../src/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Textuaria - Conteúdo Criativo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main style={{ height: '2000 px' }}>
        
      </main>
    </>
  )
}
