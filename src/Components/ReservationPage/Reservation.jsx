import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import BookTable from '../Shared/BookTable/BookTable';
import ShortInfo from './ShortInfo/ShortInfo';
import Footer from '../Shared/Footer/Footer';
import ReserveHeader from './ReserveHeader/ReserveHeader';

const Reservation = () => {
    return (
        <>
            <Navbar />
            <ReserveHeader />
            <BookTable />
            <ShortInfo />
            <Footer />
        </>
    );
};

export default Reservation;