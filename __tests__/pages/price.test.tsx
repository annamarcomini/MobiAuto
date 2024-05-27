import { render, act, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { useVehicleContext } from "@/contexts/Vehicle";
import theme from "@/src/theme";
import Price from "@/pages/price";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

const mockUseRouter = useRouter as jest.Mock;

jest.mock("../../src/contexts/Vehicle");
const mockUseVehicleContext = useVehicleContext as jest.Mock;

const makeMockVehicleContext = (newState = {}) => ({
  brands: [
    { codigo: "1", nome: "Toyota" },
    { codigo: "2", nome: "Honda" },
  ],
  selectedBrand: { codigo: "1", nome: "Toyota" },
  setSelectedBrand: jest.fn(),
  models: [
    { codigo: "1", nome: "Corolla" },
    { codigo: "2", nome: "Civic" },
  ],
  selectedModel: { codigo: "1", nome: "Corolla" },
  setSelectedModel: jest.fn(),
  years: [
    { codigo: "1", nome: "2020 Gasolina" },
    { codigo: "2", nome: "2021 Gasolina" },
  ],
  selectedYear: { codigo: "1", nome: "2020 Gasolina" },
  setSelectedYear: jest.fn(),
  price: "R$ 80.000,00",
  ...newState,
});

describe("Price Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("Should correctly render the description and value of the vehicle, when it has the selected brand, model and year", async () => {
    mockUseVehicleContext.mockImplementation(() => makeMockVehicleContext());

    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <Price />
        </ThemeProvider>
      );
    });

    expect(
      screen.getByText("Tabela Fipe: Preço Toyota Corolla 2020 Gasolina")
    ).toBeInTheDocument();
  });

  it("Should return to the home page if don't have any brand, model and year selected", async () => {
    mockUseVehicleContext.mockImplementation(() =>
      makeMockVehicleContext({
        selectedBrand: null,
        selectedModel: null,
        selectedYear: null,
      })
    );
    const mockRouter = { push: jest.fn() };
    mockUseRouter.mockReturnValue(mockRouter);

    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <Price />
        </ThemeProvider>
      );
    });
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
