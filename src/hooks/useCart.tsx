import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import type { useCartContextType } from "../context/CartProvider";

const useCart = (): useCartContextType => {
    return useContext(CartContext)
}

export default useCart