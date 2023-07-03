import TopDetailCard from "../components/ServiciosPage/TopDetailCard.jsx";
import ServicioCard from "../components/ServiciosPage/ServicioCard.jsx";
import BackButton from "../components/ServiciosPage/BackButton.jsx";
import Carrito from "../components/ServiciosPage/Carrito.jsx";
import { useServiciosState } from "../hooks/useServiciosState.jsx";

export default function Servicios() {
  const { cart, total, addToCart, removeFromCart } = useServiciosState();

  return (
    <>
      <h1>Servicios</h1>
      <BackButton />
      <TopDetailCard
        barber={{ barberName: "Barber Name", address: "Barber Adress" }}
      />
      <ServicioCard onServiceSelected={addToCart} />
      <Carrito cart={cart} total={total} onRemove={removeFromCart} />
    </>
  );
}
