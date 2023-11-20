import { ThemeProvider } from "styled-components";
import { white } from "../theme";

export function StyledThemeProvider({children}){

return <ThemeProvider theme={white}>
    {children}
</ThemeProvider>



}