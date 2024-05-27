import "@testing-library/jest-dom";

jest.mock("next/router", () => require("next-router-mock"));
import { BASE_URL } from "@/service/fipeApi";

const fetchMock = jest.fn();
//@ts-ignore
global.fetch = fetchMock;

beforeEach(() => {
  fetchMock.mockImplementation((url) => {
    if (url === `${BASE_URL}/carros/marcas`) {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            { codigo: "1", nome: "Ford" },
            { codigo: "2", nome: "Honda" },
          ]),
      });
    } else if (url === `${BASE_URL}/carros/marcas/2/modelos`) {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            modelos: [
              { codigo: "1", nome: "Aspire 1.3" },
              { codigo: "2", nome: "Accord Coupe EX" },
            ],
          }),
      });
    } else if (url === `${BASE_URL}/carros/marcas/2/modelos/2/anos`) {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            { codigo: "1", nome: "1995 Gasolina" },
            { codigo: "2", nome: "1998 Gasolina" },
          ]),
      });
    } else if (url === `${BASE_URL}/carros/marcas/2/modelos/2/anos/2`) {
      return Promise.resolve({
        json: () => Promise.resolve({ Valor: "R$ 104.933,00" }),
      });
    } else {
      return Promise.reject(new Error("Not Found"));
    }
  });
});
