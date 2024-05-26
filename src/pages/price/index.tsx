import { Typography, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { css } from "@emotion/react";
import Head from "next/head";
import { useVehicleContext } from "@/contexts/Vehicle";
import { useEffect } from "react";
import { useRouter } from "next/router";

const FullHeightContainer = styled(Box)(
  ({ theme }) => css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.secondary.light};
  `
);

const Title = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 2rem;
  }
`;

const PriceContainer = styled(Box)(
  ({ theme }) => css`
    align-items: center;
    justify-content: center;
    border-radius: 5rem;
    background-color: ${theme.palette.secondary.main};
  `
);

const PriceText = styled(Typography)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.palette.secondary.contrastText};

    ${theme.breakpoints.down("sm")} {
      font-size: 1rem;
    }
  `
);

const Label = styled(Typography)(
  ({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.palette.text.secondary};
  `
);

export default function Price() {
  const { selectedBrand, selectedModel, selectedYear, price } =
    useVehicleContext();
  const router = useRouter();
  useEffect(() => {
    if (!(selectedBrand || selectedModel || selectedYear)) {
      router.push("/");
    }
  }, [selectedBrand, selectedModel, selectedYear, router]);

  return (
    <>
      <Head>
        <title>Preço</title>
      </Head>

      <FullHeightContainer>
        <Grid container justifyContent={"center"} mt={2}>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <Title sx={{ px: 3 }} variant="h4">
              {`Tabela Fipe: Preço ${selectedBrand?.nome} ${selectedModel?.nome}
          ${selectedYear?.nome}`}
            </Title>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} mt={2}>
          <Grid item xs={6} sm={6} md={6} lg={2}>
            <PriceContainer mt={3} px={3} py={1}>
              <PriceText>{price}</PriceText>
            </PriceContainer>
          </Grid>
        </Grid>
        <Label mt={2}>Este é o preço de compra do veículo</Label>
      </FullHeightContainer>
    </>
  );
}
