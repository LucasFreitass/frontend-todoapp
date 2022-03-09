import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #347AB7;
    padding: 2px;
    border: 2px solid #000;

    cursor: pointer;
    color: #000;

    &:disabled {
      opacity: 0.4;
    }

`;