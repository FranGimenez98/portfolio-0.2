import React from "react";
import { ErrorMessage, InputContainer, InputField } from "./StyledInput";

const Input = ({ state, setState, placeholder, value, regex, errorMessage, name }) => {
  const handleChange = (e) => {
    setState({
      ...state,
      field: e.target.value,
    });
  };

  const handleValidate = () => {
    if (regex) {
      if (regex.test(state.field)) {
        setState({ ...state, valid: "true" });
      } else {
        setState({ ...state, valid: "false" });
      }
    }
  };

  return (
    <>
      <InputContainer validate={state.valid}>
        <InputField
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyUp={handleValidate}
          onBlur={handleValidate}
          validate={state.valid}
        />
      </InputContainer>
      <ErrorMessage validate={state.valid}>{errorMessage}</ErrorMessage>
    </>
  );
};

export default Input;
