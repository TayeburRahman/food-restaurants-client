import React, {useEffect} from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AllMenu from './AllMenu/AllMenu';
import MenuHeader from './MenuHeader/MenuHeader';
import Footer from '../Shared/Footer/Footer';

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Navbar />
            <MenuHeader />
            <AllMenu />
            <Footer />
        </>

    );
};

export default Menu;