import React from "react";
import {
  Header,
  Logo,
  NavContainer,
  NavItem,
  NavLink,
  NavList,
  NavMenu,
  TitleContainer,
  ToggleContainer,
} from "./StyledNavbar";

import { AiOutlineHome } from "react-icons/ai";
import { HiCode } from "react-icons/hi";

import { FaRegMoon, FaSun } from "react-icons/fa";
import {
  MdWorkOutline,
  MdOutlineFolder,
  MdOutlineEmail,
  MdPersonOutline,
} from "react-icons/md";

const Navbar = ({ theme, setTheme }) => {
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const iconTheme =
    theme === "dark" ? (
      <FaSun className="icon" />
    ) : (
      <FaRegMoon className="icon" />
    );

  return (
    <Header>
      <NavContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", delay: 5.8 }}
      >
        <TitleContainer>
          <Logo>Fran</Logo>
          <HiCode className="code" />
        </TitleContainer>

        <NavMenu>
          <NavList>
            <NavItem>
              <NavLink
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <AiOutlineHome />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <MdPersonOutline />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="skills"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <MdOutlineFolder />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="works"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <MdWorkOutline />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <MdOutlineEmail />
              </NavLink>
            </NavItem>
          </NavList>
        </NavMenu>

        <ToggleContainer onClick={handleTheme}>{iconTheme}</ToggleContainer>
      </NavContainer>
    </Header>
  );
};

export default Navbar;
