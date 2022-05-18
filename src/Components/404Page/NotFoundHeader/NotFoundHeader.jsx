import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import styles from './NotFoundHeader.module.css'
const NotFoundHeader = () => {
    return (
        <div className={styles.notFoundHeaderWrapper}>
            <Navbar />
            <div className="d-flex justify-content-center text-center">
                <div className={styles.titleTexts}>
                    <h2>404</h2>
                    <h3>Looks Like Something Going Wrong</h3>
                </div>
            </div>
        </div>
    );
};

export default NotFoundHeader;