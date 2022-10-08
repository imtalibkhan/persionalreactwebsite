import React from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./Styles/Button";

export const Services = () => {
  const { services } = useGlobalContext();
  console.log("srt", services);

  return (
    <Wrapepr className="section">
      <h2 className="common-heading"> our services </h2>
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { title, category, image, description } = curElem;
          return (
            <div key={title} className="card">
              <figure>
                <img src={image} alt={category} />
              </figure>

              <div className="card-data">
                <h3 className="h3">{category}</h3>
                <p>{description}</p>
                <NavLink to="/about" >
                  <Button className="btn">Read more</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapepr>
  );
};

const Wrapepr = styled.section`
padding: 9rem 0;
// border: 10px solid red;
background-color: ${({ theme }) => theme.colors.bg};

.container {
  // border 10px solid green;
  max-width: 120rem;
}
.card {
  border: 0.1rem solid rgb(170 170 170 / 40%);
  .card-data {
    padding: 0 1rem;
  }
  // border:20px solid black
  h3{
    margin: 2rem 0;
    font-weight: 300;
    font-size: 2.4rem;
  }
  .btn {
    margin:2rem auto;
    background-color:rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display:flex;
    justify-content:center;
    align-items:center;
    color: rgb(98 84 243);
    font-size: 1.4rem;

    &:hover{
      background-color: rgb(98 84 243);
      color: #fff;
  
    }
    // &:hover a {
    //   &:hover: #fff;
    // }
  //  a{
  //   color: rgb(98 84 243);
  //   font-size: 1.4rem;
  //  }
  } 
  
 
  
}


figure{
  width:auto;
  display:    flex:
  justify-content:center;
  // border 10px solid yellow;
  align-items:center;    
  position:relative;
  overflow:hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    // border: 10px solid pink;
    position:absolute;
    top: 0;
    left:0;
    width: 0%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor:pointer;
  }
  &:hover::after {
    width:100%;
  }
  &:hover img {
    transform: scale(1.2);
  }
  img {
    max-width:95%;
    margin-top: 1.5rem;
    height:22rem;
    transition:all 0.2s linear;
  }
  

}
@media (max ${({theme})=> theme.media.tab}) {
  .grid-three-column{
    grid-template-columns: 1fr 1fr;
  }
  }

  @media (max-width: ${({theme})=> theme.media.mobile}) {

    .grid {
       gap:3.2rem;
    }

    .grid-two-column,
    .grid-three-column {
       grid-template-columns: 1fr;
    }
}


`;

export default Services;
