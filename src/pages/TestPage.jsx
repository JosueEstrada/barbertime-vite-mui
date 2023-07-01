import MapView from "../components/MapView.jsx";
import GetLocationData from "../services/GetLocationData.jsx";

export default function TestPage() {
  return (
    <>
      <h1>Esta es la pagina de pruebas</h1>
      <p>{process.env.NODE_ENV}</p>
      <p>{import.meta.env.VITE_API}</p>
      <p>{import.meta.env.VITE_REACT_APP_MYMAPPI_API_TOKEN}</p>
      <GetLocationData />
      <MapView />
    </>
  );
}
