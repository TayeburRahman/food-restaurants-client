import React from 'react';
import styles from './Lunch.module.css'
import sitePic2 from '../../../utility/menuDishSiteImg2.jpg';
import headingDark from '../../../utility/heading-dark.png';
import Card from '../Card/Card';
import useFetch from "../useFetch.js";

const Lunch = () => {
    const [lunchFood] = useFetch('https://sheltered-crag-23788.herokuapp.com/LunchFood')
    const [lunchDrink] = useFetch('https://sheltered-crag-23788.herokuapp.com/LunchDrink')
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className={styles.menuLunchTitle}>
                            <p>Enjoy a sunny day with our lunch</p>
                            <h2>Lunch Menu</h2>
                            <img src={headingDark} alt="" className="img-fluid" />
                        </div>
                        <div className={styles.lunch}>
                            <div className="row">
                                <div className="col-md-6">
                                    {
                                        lunchFood.map(singleFood => <Card food={singleFood} key={Math.random()} />)
                                    }
                                </div>

                                <div className="col-md-6">
                                    {
                                        lunchDrink.map(singleFood => <Card food={singleFood} key={Math.random()} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 my-auto">
                        <div className={styles.menuSiteImages}>
                            <img src={sitePic2} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lunch;