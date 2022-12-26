import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
// import { AppContext } from '../Context';
// import { useContext } from 'react';
import { useGlobalContext } from '../Context';

// const HeroSectiuon = ({name,image}) => {
    const HeroSectiuon = () => {

    // const userName = useContext(AppContext);
    // const userName = useGlobalContext();

    const {name, image} = useGlobalContext();

    const Wrapper = styled.section`
        padding: 10rem 0;

        .section-hero-data{
            display-flex;
            flex-direction:column;
            justify-content:center;
        }

        .btn{
            max-width:15rem;
        }

        .hero-top-data{
            text-transform:uppercase;
            font-weight:500;
            font-size:1.5rem;
            color:${({theme}) => theme.colors.helper};
        }

        .hero-heading{
            font-size:6.5rem;
        }

        .hero-para{
            margin-top:1.5rem;
            margin-bottom:3rem;
            max-width:60rem;
        }

        .section-hero-images{
            display:flex;
            justify-content:center;
            align-items:center;
        }

        picture{
            text-align:center;
        }

        .hero-img{
            max-width: 90%;
        }
    `;

  return (
    <Wrapper>
        <div className="container grid grid-two-columns">

            <div className="section-hero-data">
                <p className='hero-top-data'>THIS IS ME</p>
                <h1 className='hero-heading'>{name}</h1>
                <p className='hero-para'>I'm {name}. A Full stack Developer and Freelancer.</p>

                <Button className="btn hireme-btn">
                    <NavLink to="/Contact">Hire Me</NavLink>
                </Button>
            </div>


            <div className="section-hero-images">
                <picture>
                    <img src={image} alt="home" className='hero-img'/>
                </picture>
            </div>

        </div>
    </Wrapper>
  )
}

export default HeroSectiuon