import { css, Global } from "@emotion/react"

export const GlobalStyle = () => {

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
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
  )
}
