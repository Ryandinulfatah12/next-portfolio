import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Ryan Dinul Fatah</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="mx-auto mt-16 max-w-4xl antialiased">
        <Hero />
      </main>
    </div>
  )
}
