import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  h2{
      color: ${props => props.theme.primary};
      margin-bottom: 1rem;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 968px;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;

  @media(min-width: 968px){
    flex-flow: row nowrap;
    gap:3rem;
  }
`;

export const Title = styled.h3`
    text-align: center;
      margin-bottom: 1rem;
      color: ${props => props.theme.primary};
`

export const SkillsContent = styled(motion.div)`
margin-top: 1rem;    
    background-color: ${props => props.theme.background_alt};
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: ${props => props.theme.boxShadow};
`

export const SkillsBox = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;
    gap: 2.5rem;
`
export const SkillsGroup = styled.div`
    display: grid;
    align-content: flex-start;
    row-gap: 1rem;
`

export const SkillsData = styled.div`
    display: flex;
    column-gap: .5rem;

    .cheked{
        color: ${props => props.theme.secondary};
    }

`