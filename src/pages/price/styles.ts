import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { css } from "@emotion/react";

export const FullHeightContainer = styled(Box)(
  ({ theme }) => css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.secondary.light};
  `
);

export const Title = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 1.7rem;
  }
`;

export const PriceContainer = styled(Box)(
  ({ theme }) => css`
    align-items: center;
    justify-content: center;
    border-radius: 5rem;
    background-color: ${theme.palette.secondary.main};
  `
);

export const PriceText = styled(Typography)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.palette.secondary.contrastText};

    ${theme.breakpoints.down("sm")} {
      font-size: 1.2rem;
    }
  `
);

export const Label = styled(Typography)(
  ({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.palette.text.secondary};
  `
);
