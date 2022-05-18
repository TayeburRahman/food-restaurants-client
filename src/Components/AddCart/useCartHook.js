import { useContext } from "react"
import { CartContext } from "../AllContext/CartContext";

const useCart = () => {
    return useContext(CartContext)
}
export default useCart;