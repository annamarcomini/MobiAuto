import { Typography, Box } from "@mui/material"
import { styled } from "@mui/system"
import { css } from "@emotion/react"
import Head from "next/head"

const FullHeightContainer = styled(Box)(
  ({ theme }) => css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.secondary.light};
  `
)

const Title = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 40px;
  }
`

const PriceContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5rem;
    background-color: ${theme.palette.secondary.main};
  `
)

const Price = styled(Typography)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.9rem;
    font-weight: bold;
    color: ${theme.palette.secondary.contrastText};
  `
)

const Label = styled(Typography)(
  ({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.palette.text.secondary};
  `
)

export default function Home() {
  const price = 90000.99
  return (
    <>
      <Head>
        <title>Preço</title>
      </Head>

      <FullHeightContainer>
        <Title variant="h4">Tabela Fipe: Preço</Title>

        <PriceContainer mt={3} px={3} py={1}>
          <Price>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Price>
        </PriceContainer>
        <Label mt={2}>Este é o preço de compra do veículo</Label>
      </FullHeightContainer>
    </>
  )
}
