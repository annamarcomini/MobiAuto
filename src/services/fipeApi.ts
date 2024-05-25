const BASE_URL = "https://parallelum.com.br/fipe/api/v1";

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

const fetchYears = async (codigoBrand: string, codigoModels: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/carros/marcas/${codigoBrand}/modelos/${codigoModels}/anos`
    );
    const data = await response.json();
    console.log("okayyyyyyyyyyyyy", data);
    return data;
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};

const fipeApi = { fetchBrands, fetchModels, fetchYears };

export default fipeApi;
