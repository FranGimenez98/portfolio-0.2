import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${props => props.theme.background};
        /* background-color: ${(props) => props.theme.background}; */
        /* background: rgb(3,7,30);
        background: linear-gradient(180deg, rgba(3,7,30,1) 0%, rgba(55,6,23,1) 49%, rgba(106,4,15,1) 85%);           */
        font-family: "IBM Plex Sans Arabic", sans-serif;
        font-family: "Poppins", sans-serif;
        font-family: "Roboto", sans-serif;
        color: ${props => props.theme.font};
        scroll-behavior: smooth;
    }

    a{
        list-style: none;
    }

    ul{
        list-style: none;
    }
`;
