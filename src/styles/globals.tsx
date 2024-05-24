import { css, Global } from "@emotion/react"
import { useTheme } from "@mui/material/styles"

export const GlobalStyle = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        html,
        body {
          max-width: 100vw;
          overflow-x: hidden;
          background-color: ${theme.palette.background.default};
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  )
}
