import React from "react";
import Form from "../Form/Form";
import { Container } from "./StyledContact";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Container id="contact">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
      >
        Contact me
      </motion.span>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        Get in touch
      </motion.h2>
      <Form />
    </Container>
  );
};

export default Contact;
