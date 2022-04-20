import React from "react";
import {
  Container,
  SkillsBox,
  SkillsContainer,
  SkillsContent,
  SkillsData,
  SkillsGroup,
  Title,
} from "./StyledSkills";
import { ImCheckmark } from "react-icons/im";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Container id="skills">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        My Skills
      </motion.span>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        My Experience
      </motion.h2>
      <SkillsContainer>
        <SkillsContent
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", delay: 1 }}
        >
          <Title>Technologies</Title>
          <SkillsBox>
            <SkillsGroup>
              <SkillsData>
                <div>
                  <p>HTML</p>
                </div>
              </SkillsData>
              <SkillsData>
                <div>
                  <p>CSS</p>
                </div>
              </SkillsData>
              <SkillsData>
                <div>
                  <p>SCSS</p>
                </div>
              </SkillsData>
              <SkillsData>
                <div>
                  <p>
                    Styled
                    <br />
                    Components
                  </p>
                </div>
              </SkillsData>
              <SkillsData>
                <div>
                  <p>Tailwind</p>
                </div>
              </SkillsData>
            </SkillsGroup>

            <SkillsGroup>
              <SkillsData>
                <div>
                  <p>JavaScript</p>
                </div>
              </SkillsData>
              <SkillsData>
                <div>
                  <p>TypeScript</p>
                </div>
              </SkillsData>
              <SkillsData>
                <div>
                  <p>React</p>
                </div>
              </SkillsData>
              <SkillsData>
                <div>
                  <p>NextJS</p>
                </div>
              </SkillsData>
              <SkillsData>
                <div>
                  <p>Redux</p>
                </div>
              </SkillsData>
            </SkillsGroup>
            <SkillsGroup>
              <SkillsData>
                <div>
                  <p>NodeJS</p>
                </div>
              </SkillsData>
              <SkillsData>
                <div>
                  <p>Express</p>
                </div>
              </SkillsData>

              <SkillsData>
                <div>
                  <p>PostgreSql</p>
                </div>
              </SkillsData>
              <SkillsData>
                <div>
                  <p>Sequelize</p>
                </div>
              </SkillsData>
            </SkillsGroup>
          </SkillsBox>
        </SkillsContent>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
