import React from 'react';
import styles from './InfoCard.module.css' 

const InfoCard = (props) => {
    const {image ,title, subTitle} = props.singleInfo
    return (
        <div className="col-sm-6 col-lg-3">
            <div className={styles.iconBoxText}>
                <div className={styles.infoIcon}>
                    <img src={image} alt="" className="img-fluid" />
                </div>
                <div className={styles.infoText}>
                    <h5>{title}</h5>
                    <p>{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;