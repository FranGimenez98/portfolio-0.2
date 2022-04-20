import styled from "styled-components";

export const Container = styled.section`
  height:100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;

  h2 {
    color: ${(props) => props.theme.primary};
    margin-bottom: 2.5rem;
  }
`;

