import styled, {css} from "styled-components";

export const TextAreaContainer = styled.textarea`
  border: none;
  border-radius: 5px;
  background-color: #c7f9cc;
  padding: 5px;
  caret-color: ${(props) => props.theme.secondary};
  box-shadow: ${(props) => props.theme.boxShadow};

  &:focus {
    outline: none;
  }

  ${props => props.validate === "false" && css`
    border: 2px solid red;
  `}
`;

export const ErrorMessage = styled.div`
  color: red;
  display: none;
  font-size: 14px;
  text-align: center;

  ${props => props.validate === "false" && css`
    display: flex;
  `}

  ${
    props => props.validate === "true" && css`
      display: none;
    `
  }
`