import {createContext , useReducer} from "react";
import cartReducer from "../reducer/cartReducer";

export const CartContext = createContext();

function CartProvider({children}) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{cart, dispatch}}>
    {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
