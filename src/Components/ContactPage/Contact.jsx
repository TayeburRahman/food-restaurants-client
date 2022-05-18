import React, {useEffect} from 'react';
import ContactBody from './ContactBody/ContactBody';
import ContactHeader from './ContactHeader/ContactHeader';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div>
            <ContactHeader />
            <ContactBody />
            <Footer />
        </div>
    );
};

export default Contact;