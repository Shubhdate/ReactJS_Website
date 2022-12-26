import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const Error = () => {

    const Wrapper = styled.section`
    padding: 9rem 0;
    display:flex;
    align-items:center;
    flex-direction:column;

    .btn{
        margin-top:3rem;
        font-size:2rem;
    }
    `;

  return (
    <Wrapper>
        <img src='../images/error.svg' alt="error" />

        <NavLink to="/">
        <Button className='btn'>Go Back</Button>
        </NavLink>
    </Wrapper>
  )
}

export default Error