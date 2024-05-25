import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Autocomplete,
  TextField,
  Grid,
} from "@mui/material"
import { styled } from "@mui/system"
import { css } from "@emotion/react"
import Head from "next/head"

const FullHeightContainer = styled(Container)(
  ({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
)

const HeaderContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
)

const Title = styled(Typography)`
  font-size: 2.4rem;
  font-weight: bold;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 1.8rem;
  }
`

const Subtitle = styled(Typography)`
  font-size: 1.8rem;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 1.5rem;
  }
`

const ButtonContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
)

export default function Home() {
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
                  disablePortal
                  options={options}
                  fullWidth
                  sx={{ p: 3, pb: 3, px: 5 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Marca" />
                  )}
                />
                <Autocomplete
                  disablePortal
                  options={options}
                  sx={{ pt: 0, pb: 3, px: 5 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Modelo" />
                  )}
                />
                <Autocomplete
                  disablePortal
                  options={options}
                  sx={{ p: 0, px: 5 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Ano" />
                  )}
                />
                <ButtonContainer mt={4} mb={1}>
                  <Button
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
  )
}

const options = [
  {
    codigo: "1",
    label: "Acura",
  },
  {
    codigo: "2",
    label: "Agrale",
  },
  {
    codigo: "3",
    label: "Alfa Romeo",
  },
  {
    codigo: "4",
    label: "AM Gen",
  },
  {
    codigo: "5",
    label: "Asia Motors",
  },
  {
    codigo: "189",
    label: "ASTON MARTIN",
  },
  {
    codigo: "6",
    label: "Audi",
  },
  {
    codigo: "207",
    label: "Baby",
  },
  {
    codigo: "7",
    label: "BMW",
  },
  {
    codigo: "8",
    label: "BRM",
  },
  {
    codigo: "123",
    label: "Bugre",
  },
  {
    codigo: "238",
    label: "BYD",
  },
  {
    codigo: "236",
    label: "CAB Motors",
  },
  {
    codigo: "10",
    label: "Cadillac",
  },
  {
    codigo: "245",
    label: "Caoa Chery",
  },
  {
    codigo: "161",
    label: "Caoa Chery/Chery",
  },
  {
    codigo: "11",
    label: "CBT Jipe",
  },
  {
    codigo: "136",
    label: "CHANA",
  },
  {
    codigo: "182",
    label: "CHANGAN",
  },
  {
    codigo: "12",
    label: "Chrysler",
  },
  {
    codigo: "13",
    label: "Citroën",
  },
  {
    codigo: "14",
    label: "Cross Lander",
  },
  {
    codigo: "241",
    label: "D2D Motors",
  },
  {
    codigo: "15",
    label: "Daewoo",
  },
  {
    codigo: "16",
    label: "Daihatsu",
  },
  {
    codigo: "246",
    label: "DFSK",
  },
  {
    codigo: "17",
    label: "Dodge",
  },
  {
    codigo: "147",
    label: "EFFA",
  },
  {
    codigo: "18",
    label: "Engesa",
  },
  {
    codigo: "19",
    label: "Envemo",
  },
  {
    codigo: "20",
    label: "Ferrari",
  },
  {
    codigo: "21",
    label: "Fiat",
  },
  {
    codigo: "149",
    label: "Fibravan",
  },
  {
    codigo: "22",
    label: "Ford",
  },
  {
    codigo: "190",
    label: "FOTON",
  },
  {
    codigo: "170",
    label: "Fyber",
  },
  {
    codigo: "199",
    label: "GEELY",
  },
  {
    codigo: "23",
    label: "GM - Chevrolet",
  },
  {
    codigo: "153",
    label: "GREAT WALL",
  },
  {
    codigo: "24",
    label: "Gurgel",
  },
  {
    codigo: "240",
    label: "GWM",
  },
  {
    codigo: "152",
    label: "HAFEI",
  },
  {
    codigo: "214",
    label: "HITECH ELECTRIC",
  },
  {
    codigo: "25",
    label: "Honda",
  },
  {
    codigo: "26",
    label: "Hyundai",
  },
  {
    codigo: "27",
    label: "Isuzu",
  },
  {
    codigo: "208",
    label: "IVECO",
  },
  {
    codigo: "177",
    label: "JAC",
  },
  {
    codigo: "28",
    label: "Jaguar",
  },
  {
    codigo: "29",
    label: "Jeep",
  },
  {
    codigo: "154",
    label: "JINBEI",
  },
  {
    codigo: "30",
    label: "JPX",
  },
  {
    codigo: "31",
    label: "Kia Motors",
  },
  {
    codigo: "32",
    label: "Lada",
  },
  {
    codigo: "171",
    label: "LAMBORGHINI",
  },
  {
    codigo: "33",
    label: "Land Rover",
  },
  {
    codigo: "34",
    label: "Lexus",
  },
  {
    codigo: "168",
    label: "LIFAN",
  },
  {
    codigo: "127",
    label: "LOBINI",
  },
  {
    codigo: "35",
    label: "Lotus",
  },
  {
    codigo: "140",
    label: "Mahindra",
  },
  {
    codigo: "36",
    label: "Maserati",
  },
  {
    codigo: "37",
    label: "Matra",
  },
  {
    codigo: "38",
    label: "Mazda",
  },
  {
    codigo: "211",
    label: "Mclaren",
  },
  {
    codigo: "39",
    label: "Mercedes-Benz",
  },
  {
    codigo: "40",
    label: "Mercury",
  },
  {
    codigo: "167",
    label: "MG",
  },
  {
    codigo: "156",
    label: "MINI",
  },
  {
    codigo: "41",
    label: "Mitsubishi",
  },
  {
    codigo: "42",
    label: "Miura",
  },
  {
    codigo: "43",
    label: "Nissan",
  },
  {
    codigo: "44",
    label: "Peugeot",
  },
  {
    codigo: "45",
    label: "Plymouth",
  },
  {
    codigo: "46",
    label: "Pontiac",
  },
  {
    codigo: "47",
    label: "Porsche",
  },
  {
    codigo: "185",
    label: "RAM",
  },
  {
    codigo: "186",
    label: "RELY",
  },
  {
    codigo: "48",
    label: "Renault",
  },
  {
    codigo: "195",
    label: "Rolls-Royce",
  },
  {
    codigo: "49",
    label: "Rover",
  },
  {
    codigo: "50",
    label: "Saab",
  },
  {
    codigo: "51",
    label: "Saturn",
  },
  {
    codigo: "52",
    label: "Seat",
  },
  {
    codigo: "247",
    label: "SERES",
  },
  {
    codigo: "183",
    label: "SHINERAY",
  },
  {
    codigo: "157",
    label: "smart",
  },
  {
    codigo: "125",
    label: "SSANGYONG",
  },
  {
    codigo: "54",
    label: "Subaru",
  },
  {
    codigo: "55",
    label: "Suzuki",
  },
  {
    codigo: "165",
    label: "TAC",
  },
  {
    codigo: "56",
    label: "Toyota",
  },
  {
    codigo: "57",
    label: "Troller",
  },
  {
    codigo: "58",
    label: "Volvo",
  },
  {
    codigo: "59",
    label: "VW - VolksWagen",
  },
  {
    codigo: "163",
    label: "Wake",
  },
  {
    codigo: "120",
    label: "Walk",
  },
]
