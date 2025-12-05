import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Performance from './components/Performance'
import Showcase from './components/Showcase'
import Highlights from './components/Highlights'
import Features from './components/Features'
import Footer from './components/Footer'
import gsap from "gsap";
import {ScrollTrigger , SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
   <main>
    <NavBar/>
    <Hero/>
    <ProductViewer/>
    <Showcase/>
    <Performance/>
    <Features/>
    <Highlights/>
    <Footer/>
   </main>
  )
}

export default App
