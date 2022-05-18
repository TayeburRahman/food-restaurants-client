import React from 'react';
import styles from './SingleCard.module.css'

const SingleDishCard = (props) => {
    const { img, name, price } = props.singleData
    return (
        <div className="col-md-4">
            <div className={`card mb-2 mx-auto ${styles.cardWrapper}`}>
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <div className={`text-center ${styles.cardTexts}`}>
                        <h4 className="card-text">{name}</h4>
                        <h6>Bread/Potato/Cheese</h6>
                        <p>{price} Tk.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDishCard;