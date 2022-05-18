import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.headerWrapper}>
                <div className="d-flex justify-content-center">
                    <div className={styles.headerTexts}>
                        <h2>About Us</h2>
                        <p>Information about our restaurant and our philosophy</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;