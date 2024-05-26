export const BASE_URL = "https://parallelum.com.br/fipe/api/v1";

const fetchBrands = async () => {
  try {
    const response = await fetch(`${BASE_URL}/carros/marcas`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};

const fetchModels = async (codigoBrand: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/carros/marcas/${codigoBrand}/modelos`
    );
    const data = await response.json();

    return data.modelos;
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};

const fetchYears = async (codigoBrand: string, codigoModel: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/carros/marcas/${codigoBrand}/modelos/${codigoModel}/anos`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};

const fetchPrice = async (
  codigoBrand: string,
  codigoModel: string,
  codigoYear: string
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/carros/marcas/${codigoBrand}/modelos/${codigoModel}/anos/${codigoYear}`
    );
    const data = await response.json();
    return data.Valor;
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};
const fipeApi = { fetchBrands, fetchModels, fetchYears, fetchPrice };

export default fipeApi;
