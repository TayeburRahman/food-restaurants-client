import React from 'react';
import styles from './MenuHeader.module.css';

const MenuHeader = () => {
    return (
        <>
            <div className={styles.menuBgWrapper}>
                <div className="d-flex justify-content-center">
                    <div className={styles.menuBannerTexts}>
                        <h2 className={styles.menuBannerTitle}>Menu</h2>
                        <p className={styles.menuBannerDesc}>All Your Favorite Foods</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuHeader;