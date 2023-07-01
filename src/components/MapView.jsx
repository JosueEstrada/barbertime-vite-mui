import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ lat, lon }) {
  const position = [lat, lon];

  return (
    <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{"Aquí ira el nombre de la Barberia"}</Popup>
      </Marker>
    </MapContainer>
  );
}

MapView.defaultProps = {
  lat: -12.046017442000606,
  lon: -77.03064786820016,
};
