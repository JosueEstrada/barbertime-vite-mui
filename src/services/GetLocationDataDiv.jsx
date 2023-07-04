import { useEffect, useState } from "react";
import axios from "axios";

export default function GetLocationData() {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const obtenerCoordenadas = async (address, postal_code, country_code) => {
      const params = {
        apikey: import.meta.env.VITE_REACT_APP_MYMAPPI_API_TOKEN,
        q: address,
        postal_code,
        country_code,
      };

      try {
        const response = await axios.get(
          "https://api.mymappi.com/v2/geocoding/direct",
          { params }
        );

        if (
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          const { lat, lon } = response.data.data[0];
          return { lat, lon };
        }
      } catch (error) {
        console.error("Hubo un error al obtener las coordenadas: ", error);
      }

      return null;
    };

    // Uso de la función
    const address = "C. Schell 361";
    const postal_code = "15074";
    const country_code = "PER";

    const fetchCoordinates = async () => {
      const coords = await obtenerCoordenadas(
        address,
        postal_code,
        country_code
      );
      setCoordinates(coords);
    };
    fetchCoordinates();
  }, []);

  return (
    <div>
      {coordinates
        ? `Las coordenadas son: Latitud = ${coordinates.lat}, Longitud = ${coordinates.lon}`
        : "No se pudieron obtener las coordenadas"}
    </div>
  );
}
