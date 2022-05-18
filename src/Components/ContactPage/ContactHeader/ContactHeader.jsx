import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './ContactHeader.module.css';
import { Link } from 'react-router-dom';


const ContactHeader = () => {
    return (
        <>
            <Navbar />
            <div className={styles.contactHeaderWrapper}>
                <div className={styles.contactTexts}>
                    <div className="d-flex justify-content-center">
                        <div className={styles.contactTitles}>
                            <h2>Contact Us</h2>
                            <p>Make sure we contact you fast.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactHeader;