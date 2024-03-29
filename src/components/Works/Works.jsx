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
import bazz from "../../assets/bazz.png";
import ecommerce from "../../assets/ecommerce.png";
import pokenext from "../../assets/pokenext.png";
import vook from "../../assets/vook.png";
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
              arrows: true,
              pagination: false,
              drag: "free",
              perPage: 3,
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
                <Image src={bazz} alt="" />
                <h3>Bazz ecommerce</h3>
                <DemoContainer>
                  <a
                    href="https://test-ecommerce-sandy.vercel.app/"
                    target="_blank"
                  >
                    <button>
                      Demo <IoIosPlay className="arrow" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/FranGimenez98/test-ecommerce"
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
                <Image src={vook} alt="" />
                <h3>Vook social web app</h3>
                <DemoContainer>
                  <a
                    href="https://vook.up.railway.app/"
                    target="_blank"
                  >
                    <button>
                      Demo <IoIosPlay className="arrow" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/FranGimenez98/vook"
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
                <Image src={pokenext} alt="" />
                <h3>PokeNext</h3>
                <DemoContainer>
                  <a
                    href="https://poke-next-woad.vercel.app/"
                    target="_blank"
                  >
                    <button>
                      Demo <IoIosPlay className="arrow" />
                    </button>
                  </a>
                  <a
                    href="https://github.com/FranGimenez98/pokeNext"
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
