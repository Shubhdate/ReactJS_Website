import React from 'react'
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  
  .container{
    margin-top:6rem;
    text-align:center;
  }

  .contact-form{
    max-width:50rem;
    margin:auto;

    .contact-inputs{
      display:flex;
      flex-direction:column;
      gap:3rem;
    }

    input[type="submit"]{
      cursor:pointer;
      transition:all 0.2s;
    }
    input[type="submit"]:hover{
      background-color:${({theme})=>theme.colors.white};
      border:1px solid ${({theme})=>theme.colors.btn};
      color:${({theme})=>theme.colors.btn};
      transform: scale(0.9);
    }
  }


  
  `;


  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20522.57730278305!2d73.31773314110582!3d19.204719698967676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be78d6d8cc5e3d3%3A0x94145934b87536e0!2sJanai%20Farms!5e1!3m2!1sen!2sin!4v1671949765549!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form className='contact-inputs' action="https://formspree.io/f/mwkjeabv" method='POST'>
            <input type="text" name="Username" id="" placeholder='Username' autoComplete='off' required/>
            <input type="email" name="email" id="" placeholder='Email' autoComplete='off' required/>
            <textarea name='message' cols="30" rows="6" autoComplete='off' required></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>

    </Wrapper>
  )
}

export default Contact