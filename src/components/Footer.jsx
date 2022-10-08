import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>talk to us today</h3>
          </div>

          <div>
            <NavLink to="/">
              <Button>get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Abutalib Khan</h3>
            <p className="ps">
              i am a full stack web developper and i work on the
              multipleprojects
            </p>
          </div>
          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

           {/* 3rs column  */}
           <div className="footer-social">
             <h3>Follows Us</h3>
             <div className="footer-social--icons">
               <div>
                 <FaDiscord className="icons" />
               </div>
               <div> 
                <a href="https://www.instagram.com/">
                <FaInstagram className="icons" />
                </a>
                
               </div>
               <div>
                 <a
                  href="https://www.instagram.com/thetalibkhan/"
                  target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
           {/* 4th column  */}
           <div className="footer-contact">
             <h3>Call Us</h3>
             <h3>+91 7498913829</h3>
           </div>
           </div>

                    {/* bottom section  */}
         <div className="footer-bottom--section">
           <hr />
           <div className="container grid grid-two-column">
             <p>
               @{new Date().getFullYear()} Abutalib khan
             </p>
             <div>
               <p>PRIVACY POLICY</p>
               <p>TERMS & CONDITIONS</p>
             </div>
           </div>
         </div>
         
        
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 2rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      color: white;
    }

    .ps {
      color: white;
    }
    .footer-social--icons {
            display: flex;
            gap: 2rem;
            div {
              padding: 1rem;
              border-radius: 50%;
              border: 2px solid ${({ theme }) => theme.colors.white};
              .icons {
                color: white;
                font-size: 2.4rem;
                position: relative;
                cursor: pointer;
              }
            }
          }
          p{
            color:white;
          }
  }









  // footer {
  //   padding: 14rem 0 9rem 0;
  //   background-color: ${({ theme }) => theme.colors.footer_bg};

  //   h3 {
  //     color: ${({ theme }) => theme.colors.hr};
  //     margin-bottom: 2.4rem;
  //   }
  //   .p {
  //     color: white;
  //   }

  // }

  @media (max-width: ${({theme})=> theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding:2rem;
      display:flex;
      justify-content: center;
      align-items:center;


    }
  }

  

`;

export default Footer;

