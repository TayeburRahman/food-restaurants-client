import {useState} from 'react';

const useCartFunctions = () => {
    const [cartItems, setCartItems] = useState([])

    const handleAddProduct = (product) => {
        // console.log("Got Item", product)
        const ProductExist = cartItems.find((item) => item._id === product._id)
        if (ProductExist) {
            setCartItems(cartItems.map((item) => item._id === product._id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
            )
        }
        else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    const handleRemoveProduct = (product) => {
        const ProductExist = cartItems.find((item) => item._id === product._id)
        if (ProductExist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item._id !== product._id))
        }
        else {
            setCartItems(cartItems.map((item) => item._id === product._id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item))
        }
    }

    const handleCartClearance = () => {
        setCartItems([])
    }

    return {
        cartItems,
        handleAddProduct,
        handleRemoveProduct,
        handleCartClearance
    }
};

export default useCartFunctions;