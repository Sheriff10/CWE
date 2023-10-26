import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Trusted from '../components/Trusted'

export default function Home() {
  return (
    <>
    <Header />
    <Intro />
    <Trusted />
    <About />
    <Experience />
    <Contact />
    <Footer />
    </>
  )
}
