import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizzing:border-box;
    font-family: 'Patrick Hand', cursive;

}

html{
    font-size:62.5%;
    overflow-x:hidden;
}

body{
    overflow-x:hidden;
}

::-webkit-scrollbar{
    width:1.5rem;
}

::-webkit-scrollbar-thumb{
    background:#fff;
    border:5px solid transparent;
    border-radius:10px;
    background-clip:content-box;
}

::-webkit-scrollbar-track{
    background-color:rgb(24 24 29);
}

h1{
    font-size:6rem;
    font-weight:900;
    color: ${({theme})=>theme.colors.heading};
    // by this we can get our colors property of css 
}

h2{
    font-size:4.5rem;
    font-weight:400;
    color: ${({theme})=>theme.colors.heading};
    // by this we can get our colors property of css 
    white-space:normal;
    text-align:center;
}

h2{
    font-size:2rem;
    font-weight:300;
}

p{
    font-size:1.5rem;
    font-weight:400;
    color: ${({theme})=>theme.colors.text};
    opacity: 0.7;
    line-height:1.5;
}

a{
    text-decoration:none;
}

li{
    list-style:none;
}

.container{
    max-width:120rem;
    margin: 0 auto;
}

.grid{
    display:grid;
    gap:9rem;
}

.grid-two-columns{
    grid-template-columns: repeat(2,1fr);
}

.grid-three-columns{
    grid-template-columns: repeat(3,1fr);
}

.grid-four-columns{
    grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
}

.common-heading{
    font-size:3.8rem;
    font-weight:600;
    margin-bottom:6rem;
    text-transform:capitalize;
}

    input, textarea{
        max-width:50rem;
        color:${({theme})=>theme.colors.black};
        padding: 1.6rem 2.5rem;
        border:1px solid ${({theme})=>theme.colors.border};
        box-shadow:${({theme})=>theme.colors.shadowSupport};
        font-size:2rem;
    }

    input[type="submit"]{
        max-width:16rem;
        margin-top:2rem;
        background-color:${({theme})=>theme.colors.btn};
        color:${({theme})=>theme.colors.white};
        padding:1.4rem 2.2rem
        border-style: solid;
        border-width:0.1rem;
        text-transform:uppercase;
        font-size:1.8rem;
        cursor:pointer;
    }


    @media(max-width:${({theme})=>theme.media.tab}){
        .container{
            padding: 0 3.2rem;
        }

        .grid-three-columns{
            grid-template-column:1fr 1fr;
        }
    }

    @media(max-width:${({theme})=>theme.media.mobile}){
        .grid{
            display:inline-block;
            gap:3.2rem;
        }

        .grid-two-columns,
        .grid-three-columns,
        .grid-four-columns
        {
            grid-template-column:1fr;
        }
    }

`;
