import React, { useRef, useState } from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import {
  Button,
  ErrorMessage,
  FormContainer,
  SuccesMessage,
} from "./StyledForm";
import { motion } from "framer-motion";
import { IoIosWarning, IoIosThumbsUp } from "react-icons/io";
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [name, setName] = useState({ field: "", valid: " " });
  const [mail, setMail] = useState({ field: "", valid: " " });
  const [text, setText] = useState({ field: "", valid: " " });

  const [validForm, setValidForm] = useState(null);
  console.log(text);

  const regEx = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.valid === "true" &&
      mail.valid === "true" &&
      text.valid === "true"
    ) {
      setValidForm(true);
      emailjs.sendForm("service_lsvmaja","template_vlcz2pf",form.current,"user_moeVd4MuPBX6YOkVYKSY0"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName({ field: "", valid: "" });
      setMail({ field: "", valid: "" });
      setText({ field: "", valid: "" });
    } else {
      setValidForm(false);
      console.log("error");
    }
  };
  return (
    <FormContainer
      ref={form}
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", delay: 0.8 }}
    >
      <Input
        placeholder="Enter your name"
        name="user_name"
        state={name}
        setState={setName}
        value={name.field}
        regex={regEx.name}
        errorMessage={"This field cannot contain numbers or be an empty space"}
      />
      <Input
        placeholder="Enter your mail"
        name="user_mail"
        state={mail}
        setState={setMail}
        value={mail.field}
        regex={regEx.mail}
        errorMessage={
          "This field can only contain an email and cannot be blank"
        }
      />
      <Textarea
        placeholder="Enter your message"
        name='message'
        state={text}
        setState={setText}
        value={text.field}
        errorMessage={"This field can only contain more than 10 characters"}
      />
      <Button>Send</Button>
      {validForm === true && (
        <SuccesMessage>
          <IoIosThumbsUp className="icon" />
          <span>Succes, message send correctly!</span>
        </SuccesMessage>
      )}
      {validForm === false && (
        <ErrorMessage>
          <IoIosWarning className="icon" />
          <span>Error, please complete all fields correctly.</span>
        </ErrorMessage>
      )}
    </FormContainer>
  );
};

export default Form;
