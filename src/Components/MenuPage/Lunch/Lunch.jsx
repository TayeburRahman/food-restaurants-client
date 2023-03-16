import React, { Fragment, useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import headingDark from "../../../utility/heading-dark.png";
import sitePic2 from "../../../utility/menuDishSiteImg2.jpg";
import Card from "../Card/Card";
import styles from "./Lunch.module.css";

const Lunch = () => {


  const [lunchFood, setLunchFood] = useState([])
  const [lunchDrink, setLunchDrink] = useState([])



  // const [lunchFood] = useFetch(
  //   "https://restaurants-server.vercel.app/LunchFood"
  // );
  // const [lunchDrink] = useFetch(
  //   "https://restaurants-server.vercel.app/LunchDrink"
  // );

  useEffect(() => {
    fetch(`https://restaurants-server.vercel.app/LunchFood`)
      .then((res) => res.json())
      .then((data) => {
        setLunchFood(data);
        // console.log('breakfastFood', data)
      });

    fetch(`https://restaurants-server.vercel.app/LunchDrink`)
      .then((res) => res.json())
      .then((data) => {
        setLunchDrink(data);
        // console.log('breakfastDrink', data)
      });


  }, [ ]);
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
                {
                  lunchDrink.length && lunchFood.length ? (
                    <Fragment>
                      <div className="col-md-6">
                        {lunchFood.map((singleFood) => (
                          <Card food={singleFood} key={Math.random()} />
                        ))}
                      </div>

                      <div className="col-md-6">
                        {lunchDrink.map((singleFood) => (
                          <Card food={singleFood} key={Math.random()} />
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
