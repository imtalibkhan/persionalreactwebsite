import React from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'
import { useEffect } from 'react'

 const About = () => {
  // const data = {
  //   name: "Abutalib Ashikezar khan",
  //   image: "./images/about1.svg",
  //   names: "ashikezar reshma"
  // };

  const {updateAboutPage} = useGlobalContext();

   useEffect(() => {
    updateAboutPage();
  }, []);
  
  // return <HeroSection {...data} /> 
  return <HeroSection /> 
}



export default About