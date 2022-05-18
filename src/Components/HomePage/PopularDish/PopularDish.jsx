import React from 'react';
import styles from './PopularDish.module.css';
import headingDark from '../../../utility/heading-dark.png'
import popularDish1 from '../../../utility/popularDish1.webp';
import popularDish2 from '../../../utility/popularDish2.webp';
import popularDish3 from '../../../utility/popularDish3.webp';
import SingleDishCard from './SingleDishCard';

const PopularDish = () => {
    const popularDishData = [
        {
            img: popularDish1,
            name: "Bread Fruit Cheese Sandwich",
            price: "59.99"
        },
        {
            img: popularDish2,
            name: "Beef Cutlet with Spring Onion",
            price: "49.99"
        },
        {
            img: popularDish3,
            name: "Meat with sauce & Vegetables",
            price: "99.99"
        },
    ]
    return (
        <section className="container">
            <div className={styles.popularDishTexts}>
                <div>
                    <p>Our Top Rated Dishes</p>
                    <h2>Try Something New!</h2>
                    <img src={headingDark} alt="" className="img-fluid" />
                </div>
                <div className={styles.topDishWrapper}>
                    <div className="row">
                        {popularDishData.map(singleData => <SingleDishCard singleData={singleData} key={Math.random()} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularDish;