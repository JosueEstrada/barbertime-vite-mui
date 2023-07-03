import TopDetailCard from "../components/ServiciosPage/TopDetailCard.jsx";
import ServicioCard from "../components/ServiciosPage/ServicioCard.jsx";
import BackButton from "../components/ServiciosPage/BackButton.jsx";
import Carrito from "../components/ServiciosPage/Carrito.jsx";
import { useState } from "react";

export default function Servicios() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = (service, price) => {
    setCart([...cart, service]);
    setTotal(total + parseFloat(price));
  };

  const removeFromCart = (serviceToRemove) => {
    setCart(cart.filter((service) => service !== serviceToRemove));
    setTotal(total - parseFloat(serviceToRemove.price));
  };

  return (
    <>
      <h1>Servicios</h1>
      <BackButton />
      <TopDetailCard
        barber={{ barberName: "Barber Name", address: "Barber Adress" }}
      />
      <ServicioCard onServiceSelected={handleClick} />
      <Carrito cart={cart} total={total} onRemove={removeFromCart} />
    </>
  );
}
