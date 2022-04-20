import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  padding-top: 1rem;

  h2 {
    color: ${(props) => props.theme.primary};
    margin-bottom: 2.5rem;
    
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  ;

  @media(min-width: 968px){
    max-width: 50%
  }
`

export const WorkContainer = styled.div`
  background-color: ${(props) => props.theme.background_alt};
  display: flex;
  flex-flow: column nowrap;
  height: 15.4rem;
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-bottom: 2rem;
  padding: 5px;
  cursor: grab;

  h3 {
    margin: 8px 0;
    color: ${(props) => props.theme.primary};
    margin-left: 10px;
  }

  span {
    margin-left: 1rem;
    color: ${(props) => props.theme.font};
  }
`;
export const Image = styled.img`
  height: 10rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const DemoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;

  span {
    color: ${(props) => props.theme.font};
  }

  .arrow {
    color: ${(props) => props.theme.background};
    font-size: 1.1rem;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    border-radius: 15px;
    background-color: ${(props) => props.theme.primary};
    width: 4.4rem;
    height: 1.8rem;
    color: ${(props) => props.theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
    gap:2.5px;
    cursor: pointer;
    transition: .3s ease;

    &:hover{
        background-color: ${props => props.theme.hover};
    }
  }
`;

export const Container2 = styled(motion.div)`
  max-width: 100%;
`