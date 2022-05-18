import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FoodCard.module.css'

const FoodCard = (props) => {
    const {title, shortDescription, price, _id} = props.singleMenuItem
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/menuSingle/${_id}`)
        // console.log(_id);
    }
    return (
        <div onClick={()=> handleNavigate()} className={styles.menuItem}>
            <div>
                <h5>{title}</h5>
                <p>{shortDescription}</p>
            </div>
            <h5>{price} Tk.</h5>
        </div>
    );
};

export default FoodCard;