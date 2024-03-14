import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Instant & Seamless DEMO</title>
      </Head>
      <Navbar />
      <main className={`text-slate-700 max-w-4xl m-auto`}>{children}</main>
      <Footer />
    </>
  )
}
