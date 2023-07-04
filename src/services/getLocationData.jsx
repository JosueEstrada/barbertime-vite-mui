import axios from "axios";

export async function getLocationData(address, postal_code, country_code) {
  const params = {
    apikey: import.meta.env.VITE_REACT_APP_MYMAPPI_API_TOKEN,
    q: address,
    postal_code,
    country_code,
  };
  console.log("params:", params);

  try {
    const response = await axios.get(
      "https://api.mymappi.com/v2/geocoding/direct",
      { params }
    );
    console.log(response);

    if (response.data && response.data.data && response.data.data.length > 0) {
      const { lat, lon } = response.data.data[0];
      return { lat, lon };
    }
  } catch (error) {
    console.error("Hubo un error al obtener las coordenadas: ", error);
  }

  return null;
}

// Uso de la función
const address = "C. Schell 361";
const postal_code = "15074";

getLocationData(address, postal_code, "PER").then((result) =>
  console.log(result)
);
