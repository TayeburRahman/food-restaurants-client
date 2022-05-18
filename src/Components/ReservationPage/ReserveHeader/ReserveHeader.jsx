import React from 'react';
import styles from './ReserveHeader.module.css';
const ReserveHeader = () => {
    return (
        <div className={styles.reserveHeaderWrapper}>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className={styles.reservationTitleTexts}>
                        <h2>Reservation</h2>
                        <p>Make A Table Reservation With Your Love.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReserveHeader;