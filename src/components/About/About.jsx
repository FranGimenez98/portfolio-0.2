import React from "react";
import {
  AboutContainer,
  ExperienceBox,
  Section,
  InforWrapper,
} from "./StyledABout";
import { RiComputerLine } from "react-icons/ri";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section id="about">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        My Intro
      </motion.span>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        About Me
      </motion.h2>
      <AboutContainer>
        <InforWrapper>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", delay: 0.8 }}
          >
            Enthusiast of the world of development and technology, in constant
            training of programming languages, frameworks and their updates.I am
            currently looking a for an opportunity to apply my technical
            knowledge, dedication and courage in the area of software
            development.
          </motion.p>
          <ExperienceBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", delay: 1.4 }}
          >
            <RiComputerLine className="computer" />
            <h3>Experience</h3>
            <h4>2 Year</h4>
            <span>As a self-taught developer.</span>
            <h4>4 Months</h4>
            <span>In SoyHenry Bootcamp.</span>
          </ExperienceBox>
        </InforWrapper>
      </AboutContainer>
    </Section>
  );
};

export default About;
