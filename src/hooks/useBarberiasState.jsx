import { useEffect, useState } from "react";
import axios from "axios";

export function useBarberiasState() {
  const [barberias, setBarberias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchBarbers = () => {
      axios
        .get("http://localhost:3000/barberias")
        .then((response) => {
          const data = response.data;
          console.log(data);
          setBarberias(data);
          console.log("Información recibida y almacenada.");
          setLoading(false);
          setIsEmpty(data.length === 0);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    };
    fetchBarbers();
  }, []);

  return { barberias, loading, isEmpty };
}
