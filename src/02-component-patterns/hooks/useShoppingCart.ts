import { useState } from "react";
import { OnChangeArgs, ProductInCart } from "../interfaces/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const handleProductChange = ({ count, product }: OnChangeArgs) => {
    setShoppingCart((prev) => {
      if (!count) {
        // delete { ...prev }[product.id];
        const { [product.id]: toDelete, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [product.id]: {
          ...product,
          count,
        },
      };
    });
  };

  return { shoppingCart, handleProductChange };
};

export default useShoppingCart;
