import {
  Card,
  CardContent,
  Button,
  Autocomplete,
  TextField,
  Grid,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useVehicleContext } from "../contexts/Vehicle";
import {
  FullHeightContainer,
  HeaderContainer,
  Title,
  Subtitle,
  ButtonContainer,
} from "./styles";

export default function Home() {
  const router = useRouter();

  const {
    brands,
    selectedBrand,
    setSelectedBrand,
    models,
    selectedModel,
    setSelectedModel,
    years,
    selectedYear,
    setSelectedYear,
  } = useVehicleContext();

  const hasSelectedBrand = selectedBrand !== null;

  const hasSelectedModel = selectedModel !== null;

  const hasSelectedYear = selectedYear !== null;

  const isFormCompleted =
    hasSelectedBrand && hasSelectedModel && hasSelectedYear;

  const onSubmit = () => {
    router.push("/price");
  };

  return (
    <>
      <Head>
        <title>Mobiauto</title>
      </Head>

      <FullHeightContainer>
        <HeaderContainer>
          <Title mb={1} variant="h4" align="center">
            Tabela Fipe
          </Title>
          <Subtitle align="center">
            Consulte o valor do veículo de forma gratuita
          </Subtitle>
        </HeaderContainer>
        <Grid container justifyContent={"center"} mt={2}>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <Card variant="outlined">
              <CardContent>
                <Autocomplete
                  aria-label="Campo marca"
                  disablePortal
                  options={brands}
                  getOptionLabel={(option) => option.nome}
                  fullWidth
                  onChange={(_, value) => {
                    setSelectedBrand(value);
                  }}
                  value={selectedBrand}
                  sx={{ pt: 3, px: 5 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Marca" />
                  )}
                />
                <Autocomplete
                  aria-label="Campo modelo"
                  disablePortal
                  disabled={!hasSelectedBrand}
                  options={models}
                  getOptionLabel={(option) => option.nome}
                  onChange={(_, value) => {
                    setSelectedModel(value);
                  }}
                  value={selectedModel}
                  sx={{ pt: 3, px: 5 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Modelo" />
                  )}
                />
                {hasSelectedModel && (
                  <Autocomplete
                    aria-label="Campo ano"
                    disablePortal
                    options={years}
                    getOptionLabel={(option) => option.nome}
                    onChange={(_, value) => {
                      setSelectedYear(value);
                    }}
                    value={selectedYear}
                    sx={{ p: 0, pt: 3, px: 5 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Ano" />
                    )}
                  />
                )}
                <ButtonContainer mt={4} mb={1}>
                  <Button
                    onClick={onSubmit}
                    disabled={!isFormCompleted}
                    sx={{ px: 5, pb: 1, pt: 1, fontSize: 12 }}
                    size={"large"}
                    variant="contained"
                  >
                    Consultar preço
                  </Button>
                </ButtonContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </FullHeightContainer>
    </>
  );
}
