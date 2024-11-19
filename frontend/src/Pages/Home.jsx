import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'
import About1 from '../components/About1'


const Home = () => {
  return (
    <>
    
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <About1 />
      <Footer/>
  
    </>
  )
}

export default Home
