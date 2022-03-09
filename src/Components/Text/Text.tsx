import styled from "styled-components"
import { space, SpaceProps } from "styled-system";

type TextProps = SpaceProps;

export const Text = styled.p<TextProps>`
    color: #000;
    font-size: 18px;
 
    

    ${space}
`;


