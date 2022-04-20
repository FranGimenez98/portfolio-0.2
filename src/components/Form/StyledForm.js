import styled  from "styled-components";
import { motion } from "framer-motion";

export const FormContainer = styled(motion.form)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 17rem;
  background-color: ${props => props.theme.background_alt};
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
  width: 5rem;
  height: 2rem;
  color: ${(props) => props.theme.background};
  cursor: pointer;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const ErrorMessage = styled.div`
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  .icon{
    font-size: 1.4rem;
    margin-right: 10px;
  }
`

export const SuccesMessage = styled.div`
  background-color: #3ed715;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  .icon{
    font-size: 1.4rem;
    margin-right: 10px;
  }
`