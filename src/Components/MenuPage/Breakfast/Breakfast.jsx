import React from 'react';
import styles from './Breakfast.module.css'
import sitePic1 from '../../../utility/menuDishSiteImg1.jpg';
import headingDark from '../../../utility/heading-dark.png';
import Card from '../Card/Card';
import useFetch from "../useFetch.js";

const Breakfast = () => {
    const [breakfastFood] = useFetch('https://sheltered-crag-23788.herokuapp.com/BreakFastFood')
    const [breakfastDrink] = useFetch('https://sheltered-crag-23788.herokuapp.com/BreakFastDrink')

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 my-auto">
                        <div className={styles.menuSiteImages}>
                            <img src={sitePic1} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className={styles.menuBreakFastTitle}>
                            <p>Enjoy a sunny day with our breakfast</p>
                            <h2>Breakfast Menu</h2>
                            <img src={headingDark} alt="" className="img-fluid" />
                        </div>
                        <div className={styles.breakfast}>
                            <div className="row">
                                <div className="col-md-6">
                                    {
                                        breakfastFood.map(singleFood => <Card food={singleFood} key={Math.random()}/>  ) 
                                    }
                                </div>

                                <div className="col-md-6">
                                    {
                                        breakfastDrink.map(singleDrink => <Card food={singleDrink} key={Math.random()}/>  ) 
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breakfast;