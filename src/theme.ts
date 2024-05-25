import { Roboto } from "next/font/google"
import { createTheme } from "@mui/material/styles"
import { deepPurple, teal } from "@mui/material/colors"

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      light: deepPurple[50],
      dark: deepPurple[100],
    },
    secondary: {
      main: teal[500],
      light: teal[50],
      
    },
    background: {
      default: deepPurple[50],
      
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme
