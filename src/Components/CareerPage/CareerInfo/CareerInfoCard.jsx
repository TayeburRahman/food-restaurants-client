import React from 'react';
import styles from './CareerInfo.module.css';
const CareerInfoCard = (props) => {
    const {img, title, des} = props.data
    return (
        <div className="col-md-4">
            <div className={`d-flex align-items-center ${styles.CareerInfoImg}`}>
                <div className="me-2">
                    <img src={ img } alt="" className="img-fluid" />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{des}</p>
                </div>
            </div>
        </div>
    );
};

export default CareerInfoCard;