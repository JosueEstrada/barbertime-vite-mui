import { useState } from "react";

export const useServiciosState = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (service, price) => {
    setCart([...cart, service]);
    setTotal(total + parseFloat(price));
  };

  const removeFromCart = (serviceToRemove) => {
    setCart(cart.filter((service) => service !== serviceToRemove));
    setTotal(total - parseFloat(serviceToRemove.price));
  };

  const resetCart = () => {
    setCart([]);
    setTotal(0);
  };

  return { cart, total, addToCart, removeFromCart, resetCart };
};
