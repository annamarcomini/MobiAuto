import { render, act, screen, fireEvent } from "@testing-library/react";
import Home from "@/pages/index";
import VehicleProvider from "@/contexts/Vehicle";

describe("Home Page", () => {
  it("Should start up without year field showing on screen", async () => {
    await act(async () => {
      render(
        <VehicleProvider>
          <Home />
        </VehicleProvider>
      );
    });

    expect(screen.getByLabelText("Campo marca")).toBeInTheDocument();
    expect(screen.getByLabelText("Campo modelo")).toBeInTheDocument();
    expect(screen.queryByLabelText("Campo ano")).not.toBeInTheDocument();
  });

  it("Should start up with model field disabled", async () => {
    await act(async () => {
      render(
        <VehicleProvider>
          <Home />
        </VehicleProvider>
      );
    });

    const modelInput = screen
      .getByLabelText("Campo modelo")
      .querySelector("input");

    expect(modelInput).toBeDisabled();
  });

  it("Should able model field when brand field it's filled", async () => {
    await act(async () => {
      render(
        <VehicleProvider>
          <Home />
        </VehicleProvider>
      );
    });

    const brandInput = screen
      .getByLabelText("Campo marca")
      .querySelector("input");

    expect(brandInput).toBeInTheDocument();

    await act(async () => {
      if (brandInput) {
        fireEvent.focus(brandInput);
        fireEvent.change(brandInput, { target: { value: "Hon" } });
        fireEvent.keyDown(brandInput, { key: "ArrowDown" });
        fireEvent.keyDown(brandInput, { key: "Enter" });
      }
    });

    expect(brandInput).toHaveProperty("value", "Honda");

    const modelInput = screen
      .getByLabelText("Campo modelo")
      .querySelector("input");

    expect(modelInput).not.toBeDisabled();
  });

  it("Should show up year field when brand and model fields are filled", async () => {
    await act(async () => {
      render(
        <VehicleProvider>
          <Home />
        </VehicleProvider>
      );
    });

    const brandInput = screen
      .getByLabelText("Campo marca")
      .querySelector("input");

    expect(brandInput).toBeInTheDocument();

    await act(async () => {
      if (brandInput) {
        fireEvent.focus(brandInput);
        fireEvent.change(brandInput, { target: { value: "Hon" } });
        fireEvent.keyDown(brandInput, { key: "ArrowDown" });
        fireEvent.keyDown(brandInput, { key: "Enter" });
      }
    });

    expect(brandInput).toHaveProperty("value", "Honda");

    const modelInput = screen
      .getByLabelText("Campo modelo")
      .querySelector("input");

    expect(modelInput).toBeInTheDocument();

    await act(async () => {
      if (modelInput) {
        fireEvent.focus(modelInput);
        fireEvent.change(modelInput, { target: { value: "Accor" } });
        fireEvent.keyDown(modelInput, { key: "ArrowDown" });
        fireEvent.keyDown(modelInput, { key: "Enter" });
      }
    });

    expect(modelInput).toHaveProperty("value", "Accord Coupe EX");

    expect(screen.getByLabelText("Campo ano")).toBeInTheDocument();
  });

  it("Should able button consult when brand, model and year fields are filled", async () => {
    await act(async () => {
      render(
        <VehicleProvider>
          <Home />
        </VehicleProvider>
      );
    });

    const brandInput = screen
      .getByLabelText("Campo marca")
      .querySelector("input");

    expect(brandInput).toBeInTheDocument();

    await act(async () => {
      if (brandInput) {
        fireEvent.focus(brandInput);
        fireEvent.change(brandInput, { target: { value: "Hon" } });
        fireEvent.keyDown(brandInput, { key: "ArrowDown" });
        fireEvent.keyDown(brandInput, { key: "Enter" });
      }
    });

    expect(brandInput).toHaveProperty("value", "Honda");

    const modelInput = screen
      .getByLabelText("Campo modelo")
      .querySelector("input");

    expect(modelInput).toBeInTheDocument();

    await act(async () => {
      if (modelInput) {
        fireEvent.focus(modelInput);
        fireEvent.change(modelInput, { target: { value: "Accor" } });
        fireEvent.keyDown(modelInput, { key: "ArrowDown" });
        fireEvent.keyDown(modelInput, { key: "Enter" });
      }
    });

    expect(modelInput).toHaveProperty("value", "Accord Coupe EX");

    const yearInput = screen.getByLabelText("Campo ano").querySelector("input");

    expect(yearInput).toBeInTheDocument();

    await act(async () => {
      if (yearInput) {
        fireEvent.focus(yearInput);
        fireEvent.change(yearInput, { target: { value: "1998" } });
        fireEvent.keyDown(yearInput, { key: "ArrowDown" });
        fireEvent.keyDown(yearInput, { key: "Enter" });
      }
    });

    expect(yearInput).toHaveProperty("value", "1998 Gasolina");

    expect(screen.getByLabelText("Consultar preço")).not.toBeDisabled();
  });
});
