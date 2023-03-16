import React, { Fragment, useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import headingDark from "../../../utility/heading-dark.png";
import sitePic1 from "../../../utility/menuDishSiteImg1.jpg";
import Card from "../Card/Card";
import styles from "./Breakfast.module.css";

const Breakfast = () => {

  const [breakfastFood, setBreakfastFood] = useState([])
  const [breakfastDrink, setBreakfastDrink] = useState([])


  // const [breakfastFood] = useFetch(
  //   "https://restaurants-server.vercel.app/BreakFastFood"
  // );
  // const [breakfastDrink] = useFetch(
  //   "https://restaurants-server.vercel.app/BreakFastDrink"
  // );

  useEffect(() => {
    fetch(`https://restaurants-server.vercel.app/BreakFastFood`)
      .then((res) => res.json())
      .then((data) => {
        setBreakfastFood(data);
        // console.log('breakfastFood', data)
      });

    fetch(`https://restaurants-server.vercel.app/BreakFastDrink`)
      .then((res) => res.json())
      .then((data) => {
        setBreakfastDrink(data);
        // console.log('breakfastDrink', data)
      });


  }, []);

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

                {
                  breakfastFood.length && breakfastDrink.length ? (
                    <Fragment>
                      <div className="col-md-6">
                        {breakfastFood.map((singleFood) => (
                          <Card food={singleFood} key={Math.random()} />
                        ))}
                      </div>

                      <div className="col-md-6">
                        {breakfastDrink.map((singleDrink) => (
                          <Card food={singleDrink} key={Math.random()} />
                        ))}
                      </div>
                    </Fragment>
                  ) : ( 
                    <Rings
                      height="80"
                      width="80"
                      color="#4fa94d"
                      radius="6"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="rings-loading"
                    />
                  )
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
