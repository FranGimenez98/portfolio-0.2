import styled, {css} from "styled-components";

export const InputContainer = styled.div`
  width: 15rem;
  height: 2.4rem;
  background-color: #c7f9cc;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadow};

  ${props => props.validate === "false" && css`
    border: 2px solid red;
  `}
`;

export const InputField = styled.input`
  background-color: transparent;
  border: none;
  caret-color: ${(props) => props.theme.secondary};
  width: 90%;

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  display: none;
  font-size: 14px;
  text-align: center;

  ${props => props.validate === "false" && css`
    display: flex;
  `}
`