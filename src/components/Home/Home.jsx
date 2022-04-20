import React from "react";
import img from "../../assets/onix.png";
import { motion } from "framer-motion";

import {
  ButtonAbout,
  ButtonCV,
  HomeButtons,
  HomeContainer,
  HomeData,
  HomeHandle,
  HomeImageContainer,
  HomeSocial,
  HomeSocialLink,
  Image,
  Section,
} from "./StyledHome";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import cv from '../../assets/CV.pdf'

const Home = () => {
  return (
    <Section id="home">
      <HomeContainer>
        <HomeData>
          <motion.span
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2, bounce: 0.2 }}
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", delay: 0.6, bounce: 0.2 }}
          >
            Francisco Gimenez
          </motion.h1>
          <motion.h3
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", delay: 0.9, bounce: 0.2 }}
          >
            Full Stack Developer
          </motion.h3>

          <HomeButtons>
            <ButtonCV
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 3.5, bounce: 0.5 }}
            >
              <a href={cv} download target="_blank">Download CV</a>
            </ButtonCV>
            <ButtonAbout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 3.5, bounce: 0.5 }}
            >
              About
            </ButtonAbout>
          </HomeButtons>
        </HomeData>
        <HomeImageContainer>
          <HomeHandle
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              delay: 1.5,
              duration: 2,
              bounce: 0.3,
            }}
          />
          <Image
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              delay: 2.5,
              duration: 2,
              bounce: 0.4,
            }}
            src={img}
            alt="ipux"
          />
        </HomeImageContainer>

        <HomeSocial>
          <HomeSocialLink
            initial={{ x: "-100vW" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              delay: 4,
              duration: 2,
              bounce: 0.3,
            }}
            href="https://www.linkedin.com/in/francisco-gimenez-5419b3218/"
            target="_blank"
          >
            <AiFillLinkedin />
          </HomeSocialLink>
          <HomeSocialLink
            initial={{ x: "-100vW" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              delay: 4.2,
              duration: 2,
              bounce: 0.3,
            }}
            href="https://github.com/FranGimenez98?tab=repositories"
            target="_blank"
          >
            <AiFillGithub />
          </HomeSocialLink>
        </HomeSocial>
      </HomeContainer>
    </Section>
  );
};

export default Home;
