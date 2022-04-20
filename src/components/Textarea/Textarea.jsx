import React from "react";
import { ErrorMessage, TextAreaContainer } from "./StyledTextArea";

const Textarea = ({ value, name, state, setState, errorMessage }) => {
  const handleChange = (e) => {
    setState({
      ...state,
      field: e.target.value,
    });
  };

  const handleValidate = () => {
    if (state.field.length < 10) {
      setState({ ...state, valid: "false" });
    } else {
      setState({ ...state, valid: "true" });
    }
  };

  return (
    <>
      <TextAreaContainer
        name={name}
        cols={29}
        rows={10}
        placeholder="Enter your message"
        value={value}
        onChange={handleChange}
        onKeyUp={handleValidate}
        onBlur={handleValidate}
        validate={state.valid}
      />
      <ErrorMessage validate={state.valid}>{errorMessage}</ErrorMessage>
    </>
  );
};

export default Textarea;
