// import React from "react";
import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Services from "./Services"
import Contact from "./Contact"

const Home = () => {
  // const data = {
  //   name: "Abutalib khan",
  //   image: "./images/hero.svg",
  // };

  const {updateHomePage} = useGlobalContext();

  useEffect(() => {
      updateHomePage();
  }, [])
  
  // return <HeroSection {...data} />;
  return (
    <>
  <HeroSection  />
          <Services />
          <Contact />
          </>
          )
};

export default Home;
