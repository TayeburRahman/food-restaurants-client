import React from 'react';
import styles from './ChooseUs.module.css'
import chooseUsImg from '../../../utility/chooseUsImg.webp'
import headingDark from '../../../utility/heading-dark.png'

const ChooseUS = () => {
    return (
        <div className={styles.chooseUsWrapper}>
            <div className="container">
                <div className={styles.ChooseUsTitlesText}>
                    <p>Tell Us</p>
                    <h2>Why Choose Us?</h2>
                    <img src={headingDark} alt="" className="img-fluid" />
                </div>
                <div className={styles.ChooseUsDescription}>
                    <div className="d-flex justify-content-center">
                        <p className="w-75">Our's Best Delicious food make your mind charming, joyful. You feel So good when you test our foods. Because we believe that A recipe has no soul. You, as the cook, must bring soul to the recipe.</p>
                    </div>

                    <div className="d-flex justify-content-center">
                        <img src={chooseUsImg} alt="" className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChooseUS;