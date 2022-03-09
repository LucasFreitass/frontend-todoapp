import { createGlobalStyle } from "styled-components";
import { ThemeType } from "Themes";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;    }

    body {
        background-color: ${({theme}) => theme.colors.first }
    }

`;


