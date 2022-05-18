import React from 'react';
import Routers from "./Components/Routers/Routers";
import ScrollToTop from "react-scroll-to-top";
import AuthProvider from './Components/AllContext/AuthContext';
import CartProvider from './Components/AllContext/CartContext';



function App() {

  return (
    //* Auth Context Provider
    //* Cart Context Provider
    <AuthProvider>
      <CartProvider>
        <ScrollToTop smooth />
        <Routers />
      </CartProvider>
    </AuthProvider>
  );
}


export default App;
