// import React, {useContext} from "react";
import React  from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";
// import { AppContext, useGlobalContext } from "../context";
import { useGlobalContext } from "../context";

// const HeroSection = ({name, image,names}) => {

  const HeroSection = () => {                                               //use reduccer technique and get through useGlobalcontext


  // const firstName = useContext(AppContext);
  // const firstName = useGlobalContext();
  // const {fname,age,firstname} = useGlobalContext();
  const {name, image} = useGlobalContext();   // useReducer used
    //console.log("first",firstName)
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          {/* <p className="hero-top-data">This is{names} me</p> */}
          <p className="hero-top-data">This is me</p>  
          <h1 className="hero-heading">{name} </h1>
          <p className="hero-para">
            {/* my name is {firstName} . is iiiiii khan and i am a full stakk web developer and this is my */}
            {/* my name is {fname} {age} {firstname}. is iiiiii khan and i am a full stakk web developer and this is my */}

            my name is {name}.And i am a full stack web developer i worked on the multiple projects and i have done my graduation in computer science;    
            
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={
              image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  // border: 0.5rem outset pink

  .section-hero-data {
    // border: 0.5rem outset pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    // border: 4mm ridge rgba(211, 220, 50, 0.6);
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
`;

export default HeroSection;
