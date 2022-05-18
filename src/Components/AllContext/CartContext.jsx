import { createContext } from 'react';
import useCartFunctions from '../AddCart/useCartFunctions';

export const CartContext = createContext({})

const CartProvider = ({ children }) => {
    const cartValues = useCartFunctions()
    // console.log(cartValues)
    return <CartContext.Provider value={cartValues}>
        {children}
    </CartContext.Provider>
};
export default CartProvider;