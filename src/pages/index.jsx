import React from 'react'
import Purposes from '../components/Purposes'
import { Charters } from '../components/Charters'
import Jet from '../components/jet'
import Membership from '../components/membership'
import Footer from '../components/footer'
import HeaderHero from '../components/header-hero'

const MainPages = () => {
  return (
    <div  style={{width : '100%' , height : '100vh'}} id='home'>
   <HeaderHero/>
   <Purposes/>
   <Jet/>
   <Charters/>
   <Membership/>
   <Footer/>
    </div>
  )
}

export default MainPages