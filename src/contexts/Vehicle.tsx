import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import fipeApi from "../services/fipeApi";

interface Brand {
  codigo: string;
  nome: string;
}

interface Model {
  codigo: string;
  nome: string;
}

interface Year {
  codigo: string;
  nome: string;
}

interface VehicleContextState {
  brands: Brand[];
  selectedBrand: Brand | null;
  setSelectedBrand: (value: Brand | null) => void;
  models: Model[];
  selectedModel: Model | null;
  setSelectedModel: (value: Model | null) => void;
  years: Year[];
  selectedYear: Year | null;
  setSelectedYear: (value: Year | null) => void;
}

const VehicleContext = createContext<VehicleContextState | undefined>(
  undefined
);

export const useVehicleContext = (): VehicleContextState => {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error("useVehicleContext must be used within a VehicleProvider");
  }
  return context;
};

type Props = {
  children: ReactNode;
};

function VehicleProvider({ children }: Readonly<Props>) {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [years, setYears] = useState<Year[]>([]);
  const [selectedYear, setSelectedYear] = useState<Year | null>(null);

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    if (!(selectedBrand === null)) fetchModels(selectedBrand?.codigo);
  }, [selectedBrand]);

  useEffect(() => {
    if (!(selectedBrand === null || selectedModel === null))
      fetchYears(selectedBrand?.codigo, selectedModel?.codigo);
  }, [selectedBrand, selectedModel]);

  const fetchBrands = async () => {
    setSelectedModel(null);
    setSelectedYear(null);
    const data = await fipeApi.fetchBrands();
    setBrands(data);
  };

  const fetchModels = async (codigoBrand: string) => {
    setSelectedModel(null);
    setSelectedYear(null);
    const data = await fipeApi.fetchModels(codigoBrand);
    setModels(data);
  };

  const fetchYears = async (codigoBrand: string, codigoModels: string) => {
    setSelectedYear(null);
    const data = await fipeApi.fetchYears(codigoBrand, codigoModels);
    setYears(data);
  };

  const contextValue = {
    brands,
    selectedBrand,
    setSelectedBrand,
    models,
    selectedModel,
    setSelectedModel,
    years,
    selectedYear,
    setSelectedYear,
  };

  return (
    <VehicleContext.Provider value={contextValue}>
      {children}
    </VehicleContext.Provider>
  );
}

export default VehicleProvider;
