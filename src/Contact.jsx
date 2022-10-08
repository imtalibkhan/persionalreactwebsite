import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapepr = styled.section`
    // border: 10px solid pink;
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;
      // border: 10px solid black;
      
      .contact-form {
        max-width: 50rem;
        margin:auto;

        .contact-inputs{
          display:flex;
          flex-direction: column;
          gap:3rem
        }
      }
    }
  `;

  return (
    <Wrapepr>
      <h2 className="common-heading"> feel free to Contact us </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60209.60613486072!2d72.77088921536536!3d19.40806824583419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a93891055565%3A0xf39283d30d9ad8cc!2sNala%20Sopara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1664705370469!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="container">

          <div className="contact-form">

            <form action="https://formspree.io/f/xbjbyglo" method="POST" className="contact-inputs">
              <input type="text" name="username" placeholder="username" autoComplete="off" required/>

              <input type="email" name="Email" placeholder="Email" autoComplete="off" required/>

              <textarea name="messsage" id="" cols="30" rows="6" autoComplete="off" required></textarea>

              <input type="submit" value="send" />
            </form>

          </div>


        </div>
    </Wrapepr>
  );
};

export default Contact;
