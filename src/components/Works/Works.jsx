import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import {
  Container,
  Container2,
  DemoContainer,
  Image,
  WorkContainer,
  Wrapper,
} from "./StyledWorks";
import "@splidejs/react-splide/css";
import movie from "../../assets/movies.png";
import doggies from "../../assets/Doggies.png";
import netflix from "../../assets/netflix.png";
import ecommerce from "../../assets/ecommerce.png";
import { IoMdCode, IoIosPlay } from "react-icons/io";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <Container id="works">
      <Wrapper>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          My Portfolio
        </motion.span>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          Recent Works
        </motion.h2>
        <Container2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", delay: 1 }}
        >
          <Splide
            options={{
              arrows: false,
              pagination: false,
              drag: "free",
              perPage: 2,
              gap: "10px",
              breakpoints: {
                640: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <WorkContainer>
                <Image src={ecommerce} alt="" />
                <h3>NextJS Ecommerce</h3>
                <DemoContainer>
                  <a
                    href="https://fruits-nextjs-ecommerc.vercel.app/"
                    target="_blank"
                  >
                    <button>
                      Demo <IoIosPlay className="arrow" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/FranGimenez98/fruits-nextjs-ecommerc"
                    target="_blank"
                  >
                    <button>
                      Code
                      <IoMdCode className="arrow" />
                    </button>
                  </a>
                </DemoContainer>
              </WorkContainer>
            </SplideSlide>
            <SplideSlide>
              <WorkContainer>
                <Image src={movie} alt="" />
                <h3>Front End Movies SPA</h3>
                <DemoContainer>
                  <a
                    href="https://infallible-golick-51fe61.netlify.app/"
                    target="_blank"
                  >
                    <button>
                      Demo
                      <IoIosPlay className="arrow" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/FranGimenez98/React-Movies-App"
                    target="_blank"
                  >
                    <button>
                      Code
                      <IoMdCode className="arrow" />
                    </button>
                  </a>
                </DemoContainer>
              </WorkContainer>
            </SplideSlide>
            <SplideSlide>
              <WorkContainer>
                <Image src={doggies} alt="" />
                <h3>PERN Doggies SPA</h3>
                <DemoContainer>
                  <a
                    href="https://pern-doggies-app.netlify.app"
                    target="_blank"
                  >
                    <button>
                      Demo <IoIosPlay className="arrow" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/FranGimenez98/FullStack-DogsApp"
                    target="_blank"
                  >
                    <button>
                      Code
                      <IoMdCode className="arrow" />
                    </button>
                  </a>
                </DemoContainer>
              </WorkContainer>
            </SplideSlide>
            <SplideSlide>
              <WorkContainer>
                <Image src={netflix} alt="" />
                <h3>NextJS Netflix clone</h3>
                <DemoContainer>
                  <a
                    href="https://netflix-nextjs-ts-clone.vercel.app/"
                    target="_blank"
                  >
                    <button>
                      Demo <IoIosPlay className="arrow" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/FranGimenez98/nextjs-netflix-cone"
                    target="_blank"
                  >
                    <button>
                      Code
                      <IoMdCode className="arrow" />
                    </button>
                  </a>
                </DemoContainer>
              </WorkContainer>
            </SplideSlide>
          </Splide>
        </Container2>
      </Wrapper>
    </Container>
  );
};

export default Works;
