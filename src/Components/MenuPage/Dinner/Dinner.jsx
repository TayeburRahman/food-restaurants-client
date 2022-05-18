import React from 'react';
import sitePic3 from '../../../utility/menuDishSiteImg3.jpg';
import styles from './Dinner.module.css';
import headingDark from '../../../utility/heading-dark.png';
import Card from '../Card/Card';
import useFetch from "../useFetch.js";

const Dinner = () => {
    const [dinnerFood] = useFetch('https://sheltered-crag-23788.herokuapp.com/DinnerFood')
    const [dinnerDrink] = useFetch('https://sheltered-crag-23788.herokuapp.com/DinnerDrink')
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 my-auto">
                        <div className={styles.menuSiteImages}>
                            <img src={sitePic3} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className={styles.menuDinnerTitle}>
                            <p>Enjoy a day with our Dinner</p>
                            <h2>Dinner Menu</h2>
                            <img src={headingDark} alt="" className="img-fluid" />
                        </div>
                        <div className={styles.dinner}>
                            <div className="row">
                                <div className="col-md-6">
                                    {
                                        dinnerFood.map(singleFood => <Card food={singleFood} key={Math.random()} />)
                                    }
                                </div>

                                <div className="col-md-6">
                                    {
                                        dinnerDrink.map(singleFood => <Card food={singleFood} key={Math.random()} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dinner;