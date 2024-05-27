import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { css } from "@emotion/react";

export const FullHeightContainer = styled(Container)(
  ({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
);

export const HeaderContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
);

export const Title = styled(Typography)`
  font-size: 2.4rem;
  font-weight: bold;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled(Typography)`
  font-size: 1.8rem;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
);
