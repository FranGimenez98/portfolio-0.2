import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 3rem;
    background-color: ${props => props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column nowrap;

    span{
        margin: 2px 2px;
        color: ${props => props.theme.background};
        font-size: 10px;
    }
`