import { ThemeProvider } from 'styled-components'; 

const first = '#fff';
const second = '#C0C0C0';
const third = '#347AB7';

const theme = {
    colors: {
        first,
        second,
        third
    },
};

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children}) => {
    return <ThemeProvider theme={theme}>{ children }</ThemeProvider>
}
