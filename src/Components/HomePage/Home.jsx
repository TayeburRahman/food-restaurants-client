import React, {useEffect} from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from './Header/Header';
import Info from './Info/Info';
import About from './About/About';
import Food from './Food/Food';
import PopularDish from './PopularDish/PopularDish';
import BookTable from '../Shared/BookTable/BookTable';
import Blog from './Blog/Blog';
import Footer from '../Shared/Footer/Footer';

//* Home Page
const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Navbar/>
            <Header />
            <Info />
            <About />
            <Food />
            <PopularDish />
            <BookTable />
            <Blog />
            <Footer />
        </>
    );
};

export default Home;