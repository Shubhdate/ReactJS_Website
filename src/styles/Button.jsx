import styled from "styled-components";

export const Button = styled.button`
    text-decoration:none;
    max-width:auto;
    background-color:rgb(98 84 243);
    color:rgb(255 255 255);
    padding: 1.4rem 2.5rem;
    border:none;
    text-transform: uppercase;
    text-align:center;
    cursor:pointer;
    transition:all 0.3s ease;
    --webkit-transitions:all 0.3s ease;
    --moz-transitions:all 0.3s ease;
    -o-transitions:all 0.3s ease;


    &:hover,
    &:active{
        box-shadow:0 2remm 2rem 0 rgb(132 144 255 / 30%);
        box-shadow:${({theme}) => theme.colors.shadowSupport};
        transform: scale(0.9);
    }

    a{
        text-decoration:none;
        color: rgb(255 255 255);
        font-size: 2rem;
    }

`;