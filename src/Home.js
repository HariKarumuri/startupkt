import React from 'react'
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Contact from './components/contact/Contact';
import Services from './components/servicess/Services';
import Blog from './components/blog/Blog';

const Home = () => {

  if(window.innerWidth<992){
    return (
      <div>
        <Hero/>
        <Services/>
        <About/>
        <Blog/>
        <Contact/>
      </div>)
  }
  else{

  return (
    <div>
      <Hero/>
      <Services/>
      <About/>
      
      <Contact/>
    </div>
  )
}}

export default Home
