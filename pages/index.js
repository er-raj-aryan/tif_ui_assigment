import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LandingSection from '@/modules/Home/LandingSection'
import AboutUs from '@/modules/Home/AboutUsSection'
import LatestArticleSection from '@/modules/Home/LatestArticleSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Food Blogging</title>
        <meta name="description" content="Food blogging website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/companyLogo.png" />
      </Head>
      <main className={styles.main}>
       <Navbar />
       <LandingSection />
       <AboutUs />
       <LatestArticleSection />
       <Footer />
      </main>
    </>
  )
}
