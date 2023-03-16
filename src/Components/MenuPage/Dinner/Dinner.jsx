import React, { Fragment, useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import headingDark from "../../../utility/heading-dark.png";
import sitePic3 from "../../../utility/menuDishSiteImg3.jpg";
import DinnerCard from "../Card/DinnerCard";
import styles from "./Dinner.module.css";

const Dinner = () => {



  const [dinnerFood, setBreakfastFood] = useState([])
  const [dinnerDrink, setBreakfastDrink] = useState([])


  // const [dinnerFood] = useFetch(
  //   "https://restaurants-server.vercel.app/DinnerFood"
  // );
  // const [dinnerDrink] = useFetch(
  //   "https://restaurants-server.vercel.app/DinnerDrink"
  // );

  useEffect(() => {
    fetch(`https://restaurants-server.vercel.app/DinnerFood`)
      .then((res) => res.json())
      .then((data) => {
        setBreakfastFood(data);
        console.log('breakfastFood', data)
      });

    fetch(`https://restaurants-server.vercel.app/DinnerDrink`)
      .then((res) => res.json())
      .then((data) => {
        setBreakfastDrink(data);
        console.log('breakfastDrink', data)
      });


  }, [ ]);

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
                {
                  dinnerFood?.length && dinnerDrink.length ? (
                    <Fragment>
                      <div className="col-md-6">
                        {dinnerFood.map((singleFood) => (
                          <DinnerCard food={singleFood} key={Math.random()} />
                        ))}
                      </div>

                      <div className="col-md-6">
                        {dinnerDrink.map((singleFood) => (
                          <DinnerCard food={singleFood} key={Math.random()} />
                        ))}
                      </div>
                    </Fragment>
                  ) :
                    (
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
    </>
  );
};

export default Dinner;
