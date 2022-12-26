import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import {FaDiscord} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";

const Footer = () => {
  const Wrapper = styled.section`

  .contact-short{
    max-width:60vw;
    margin:auto;
    padding:5rem 10rem;
    background-color:${({theme})=>theme.colors.bg};
    border-radius:1rem;
    box-shadow:${({theme})=>theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  .contact-short-btn{
    justify-self:end;
    align-self:center;
  }

  footer{
    padding:14rem 0 9rem 0;
    background-color:${({theme})=>theme.colors.footer_bg};

    h3{
     color:${({theme})=>theme.colors.hr};
    }

    p{
      color:${({theme})=>theme.colors.white};
    }

    .footer-social--icons{
      display:flex;
      gap:2rem;

      div{
        padding:1rem:
        border:2px solid ${({theme})=>theme.colors.white};

        .icons{
          color:${({theme})=>theme.colors.white};
          position:relative;
          cursor:pointer;
          font-size:3rem;
         border-radius:50%;
        }
      }
    }

    .footer-bottom--section{
      padding-top:9rem;

      hr{
        margin-bottom:2rem;
        color:${({theme})=>theme.colors.hr};
        height:0.2px;
      }
    }

  }

  @media(max-width:${({theme})=>theme.media.mobile}){
    .contact-short{
      max-width:95vw;
      padding: 2rem orem;
      display:flex;
      justify-content:center;
      align-items:center;

      .contact-short-btn{
        text-align:center;
        justify-self:flex-start;
      }
      
    }

    footer .footer-bottom--section{
      padding-top:3.2rem;
    }
  }

  `;
  return (
    <Wrapper>
      <section className="contact-short">
        <div className='grid grid-two-columns'>
          <div>
            <h3>Ready To Get Started?</h3>
            <h3>Talk to us Today</h3>
          </div>

          <div className='contact-short-btn'>
            <NavLink to="/Contact">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-columns">
          <div className="footer-about">
            <h3>Shubhaaam.com</h3>
            <p>Get Your Website From Us at a Cheap Cost , Huppry Up Now</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get imortant updates</h3>
            <form action="">
              <input type="email" placeholder='Email' name="" id="" required autoComplete='off'/>
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div><a href="#"><FaDiscord className='icons'/></a></div>
              <div><a href="#"><FaInstagram className='icons'/></a></div>
              <div><a href="#"><FaFacebook className='icons'/></a></div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 0987654321</h3>
          </div>

        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-columns">
            <p>@{new Date().getFullYear()} Shubhaaam.com . All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
               <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>

    </Wrapper>
  )
}

export default Footer