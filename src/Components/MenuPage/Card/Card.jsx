import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css'
const Card = (props) => {
    const { title, shortDescription, price, _id } = props.food
    const navigate = useNavigate()
    const handleGoSinglePage = (title, price) => {
        navigate(`/menuSingle/${_id}`)
        // console.log("Clicked", title, price, _id);
    }

    return (
        <div className={styles.foodCardWrapper} onClick={ ()=> handleGoSinglePage(title, price) }>
            <div className="d-flex justify-content-between">
                <div className="">
                    <h6>{title}</h6>
                    <p>{shortDescription}</p>
                </div>
                <div>
                    <h6>{price} Tk.</h6>
                </div>
            </div>
            <hr style={{marginTop : 0}}/>
        </div>
    );
};

export default Card;       