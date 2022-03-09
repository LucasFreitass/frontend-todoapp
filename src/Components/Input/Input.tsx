import styled from "styled-components";
import { flex, FlexProps } from "styled-system";

type InputProps = FlexProps;

export const Input = styled.input<InputProps>`
    background-color: transparent;
    padding: 2px;
    border: 2px solid #000;
    color: #000;

    &::placeholder {
        color: rgba(0, 0, 0, 0.6 );
    }

    ${flex}
`;