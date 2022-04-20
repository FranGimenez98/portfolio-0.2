import styled from "styled-components";
import { motion } from "framer-motion"

export const Section = styled.section`
  padding: 4.5rem 0 1rem;
  height: 100vh;
`;
export const HomeContainer = styled.div`
  max-width: 968px;
  margin-left: 1rem;
  margin-right: 1rem;
  position: relative;
  row-gap: 2rem;
  padding-top: 5rem;
  display: grid;

  @media(min-width: 968px){
    margin: 0 auto;
    padding-top: 2rem;
  }
  
`;

export const HomeData = styled.div`
  text-align: center;

  span {
    display: block;
  }

  span,
  h3 {
    font-size: 15px;
  }

  h3 {
    margin-bottom: 1rem;
    font-weight: normal;
    font-size: 1.10rem;
    color: ${(props) => props.theme.primary};
  }

  h1 {
    font-size: 25px;
    margin-bottom: 0.2rem;
  }
`;

export const HomeHandle = styled(motion.div)`
  width: 250px;
height: 250px;
background: rgb(247,37,133);
background: linear-gradient( 180deg, rgba(247,37,133,1) 0%, rgba(255,77,158,0.8547794117647058) 46%, rgba(255,77,158,0) 95% );
justify-self: center;
border-radius: 9999999px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-align-items: flex-end;
-webkit-box-align: flex-end;
-ms-flex-align: flex-end;
align-items: flex-end;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
overflow: hidden;
margin-top: 2rem;
`;
export const Image = styled(motion.img)`
 height: 300px;
position: absolute;
bottom: -10px;
`;

export const HomeSocial = styled.div`
  left: 0;
  display: grid;
  row-gap: 0.5rem;
  position: absolute;
  height: 2rem;
  top: 30rem;

  @media(min-width: 968px){
    top: 25rem;
    left: 10rem;
  }
`;

export const HomeSocialLink = styled(motion.a)`
  width: max-content;
  background-color: ${(props) => props.theme.socials};
  color: ${(props) => props.theme.background};
  padding: 0.25rem;
  border-radius: 999999px;
  display: flex;
  font-size: 1.45rem;
  cursor: pointer;
`;

export const HomeButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const ButtonCV = styled(motion.button)`
  border: none;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.primary};
  width: 7.5rem;
  height: 2rem;
  border-radius: 1rem;
  
  cursor: pointer;
  transition: 0.3s;

  a{
    text-decoration: none;
    color: ${(props) => props.theme.primary};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.hover};
    color: ${(props) => props.theme.hover};
  }
`;

export const ButtonAbout = styled(motion.button)`
  border: none;
  background-color: ${(props) => props.theme.primary};
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.background};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const HomeImageContainer = styled.div`
  margin: 0 auto;

`