import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  const MainHeader = styled.header`
    padding: 0 5rem;
    height:10rem;
    background-color: ${({theme}) => theme.colors.bg};
    display:flex;
    justify-content:space-between;
    align-items:center;

    .logo{
      height: auto;
      max-width:30%
    }
  `;
  
  return (
    <MainHeader>
      <NavLink to="/"> 
      {/* by using navlink we dont have to refresh page repeatedly */}
        <img src="#" alt="images" className='logo'/>
      </NavLink>

      <Navbar />
    </MainHeader>
  );
};



export default Header