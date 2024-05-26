/**
 * @jest-environment jsdom
 */
import { render, act, screen } from "@testing-library/react";
import Home from "@/pages/index";
import VehicleProvider from "@/contexts/Vehicle";
import { BASE_URL } from "@/service/fipeApi";

const fetchMock = jest.fn();

//@ts-ignore
global.fetch = fetchMock;

beforeEach(() => {
  fetchMock.mockImplementation((url) => {
    if (url === `${BASE_URL}/carros/marcas`) {
      return Promise.resolve({
        json: () =>
          Promise.resolve([{ codigo: "some_codigo", nome: "some_nome" }]),
      });
    } else {
      return Promise.reject(new Error("Not Found"));
    }
  });
});

describe("Home", () => {
  it("Should start up without year field showing on screen", async () => {
    render(
      <VehicleProvider>
        <Home />
      </VehicleProvider>
    );
    await act(() => {});

    expect(screen.getByLabelText("Campo marca")).toBeInTheDocument();
    expect(screen.getByLabelText("Campo modelo")).toBeInTheDocument();
    expect(screen.queryByLabelText("Campo ano")).not.toBeInTheDocument();
  });
});
