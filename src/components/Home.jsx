import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Services from './Services'

import Team from './Team'
import Clients from './Clients'

import Footer from './Footer'

const Home = () => {
  return (
    <div className="container min-w-full min-h-lvh secondary-font">
      <NavBar />
      <section id="about" className="w-full  py-20  ">
        <Hero />
        </section>
      <section id="about" className="w-full max-h-fit py-32  overflow-hidden border-b border-white-100">
        <About />
      </section>
      <section id="services" className="w-full max-h-fit py-16  overflow-hidden border-b border-white-100">
        <Services />
      </section>
      {/* <section id="portfolio" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Portfolio />
      </section> */}
      {/* <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <FreqAskedQues />
      </section> */}
      <section >
        <Team />
      </section>
      <section className="w-full max-h-fit  overflow-hidden border-b border-white-100">
        <Clients />
      </section>
      {/* <section id="contact" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Contact />
      </section> */}
      {/* <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Newsletter />
      </section> */}
      <section className="w-full max-h-fit   overflow-hidden ">
        <Footer />
      </section>
    </div>
  )
}

export default Home
