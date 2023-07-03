import TopDetailCard from "../components/ServiciosPage/TopDetailCard.jsx";
import ServicioCard from "../components/ServiciosPage/ServicioCard.jsx";
import BackButton from "../components/ServiciosPage/BackButton.jsx";

export default function Servicios() {
  return (
    <>
      <h1>Servicios</h1>
      <BackButton />
      <TopDetailCard
        barber={{ barberName: "Barber Name", address: "Barber Adress" }}
      />
      <ServicioCard />
    </>
  );
}
