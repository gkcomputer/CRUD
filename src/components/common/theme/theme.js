import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F2930B", // Change this to your primary color
    },
    secondary: {
      main: "#E41F9C", // Change this to your secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: 16,
  },
  colors: {
    green: "#64DC54",
  },
  fontColor: {
    yellow: "#FFC300",
    red: "#ff0000",
  },
});

export default theme;
