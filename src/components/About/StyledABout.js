import styled from "styled-components";
import { motion } from "framer-motion";
import { RiComputerLine } from "react-icons/ri";

export const Section = styled(motion.section)`
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h2 {
    color: ${(props) => props.theme.primary};
  }
`;

export const AboutContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  position: relative;
  row-gap: 1rem;
  padding-top: 2rem;
  display: grid;
  text-align: center;

  @media(min-width: 968px){
    
    max-width: 600px;
  }
`;

export const ImageHandle = styled.div`
  width: 290px;
  height: 290px;
  background: rgb(247, 37, 133);
  background: linear-gradient(
    180deg,
    rgba(247, 37, 133, 1) 0%,
    rgba(255, 77, 158, 0.8547794117647058) 46%,
    rgba(255, 77, 158, 0) 95%
  );
  justify-self: center;
  border-radius: 9999999px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  align-self: center;
`;

export const InforWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-left: 1rem;
  margin-right: 1rem;
  gap: 10px;
`;

export const ExperienceBox = styled(motion.div)`
  background-color: ${(props) => props.theme.background_alt};
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 1rem;
  gap: 10px;
  border-radius: 15px;
  box-shadow: ${props => props.theme.boxShadow};
  margin: 1rem 0 2rem 0;

  .computer{
      color: ${props => props.theme.primary};
      font-size: 2rem;
  }

  h3{
      margin-bottom: .9rem;
      color: ${props => props.theme.primary};
  }

  h4{
    color: ${props => props.theme.primary};
  }

  span{
      margin-bottom: .9rem;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.primary};
  width: 9rem;
  height: 3rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.background};
  cursor: pointer;
  transition: 0.5s;
`;
