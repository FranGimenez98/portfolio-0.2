import styled from "styled-components";
import { Link as LinkS } from "react-scroll/modules";
import { motion } from "framer-motion";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  z-index: 10;

  .icon {
    color: ${(props) => props.theme.primary};
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .code{
    color: ${props => props.theme.primary};
    text-align: center;
    font-size: 1.5rem;
    margin-left: 5px;
  }
`

export const NavContainer = styled(motion.nav)`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 968px;
  margin-left: 1rem;
  margin-right: 1rem;

  @media(min-width: 968px){
    margin: 0 auto;
  }
`;
export const Logo = styled.h2`
  color: ${(props) => props.theme.primary};
  font-weight: normal;
  font-size: 1.2rem;
  
`;

export const NavMenu = styled(motion.div)`
  position: fixed;
  bottom: 1rem;
  width: 90%;
  background-color: hsla(134, 32%, 16%, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1rem 2.25rem;

  @media(min-width: 968px){
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(LinkS)`
  color: white;
  font-size: 1.5rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  border-radius: 99999px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .2s ease;

  &:hover{
    color: ${props => props.theme.primary};
  }

  &.active {
    background: rgb(199,249,204);
background: linear-gradient(0deg, rgba(199,249,204,1) 0%, rgba(128,237,153,1) 100%);
    color: ${(props) => props.theme.background};
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`