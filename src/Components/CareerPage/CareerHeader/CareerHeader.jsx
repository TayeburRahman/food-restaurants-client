import React from 'react';
import styles from './CareerHeader.module.css'

const CareerHeader = () => {
    return (
        <div className={styles.careerHeaderWrapper}>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className={styles.careerTitleTexts}>
                        <h2>Career</h2>
                        <p>Information about our Restaurant Vacancy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerHeader;