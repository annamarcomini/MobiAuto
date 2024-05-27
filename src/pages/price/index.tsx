import { Grid } from "@mui/material";
import Head from "next/head";
import { useVehicleContext } from "@/contexts/Vehicle";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  PriceContainer,
  PriceText,
  Label,
  FullHeightContainer,
  Title,
} from "../../styles/priceStyles";

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
