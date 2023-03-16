import React, { useEffect, useState } from "react";
import headingDark from "../../../utility/heading-dark.png";
import menuImage from "../../../utility/menuImage.png";
import styles from "./Food.module.css";
import FoodCard from "./FoodCard";

const Food = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    fetch("https://restaurants-server.vercel.app/HomeMenu")
      .then((res) => res.json())
      .then((data) => setMenuData(data));
  }, []);
  // console.log(homePageMenuData);
  return (
    <section className={styles.foodWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <div className={styles.foodTexts}>
                <p>Enjoy a complete food experience</p>
                <h2>Favorite Menus</h2>
                <img src={headingDark} alt="" />
              </div>
              <div>
                {menuData.map((singleMenuItem) => (
                  <FoodCard
                    singleMenuItem={singleMenuItem}
                    key={Math.random()}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={`col-md-6 my-auto ${styles.menuCartImage}`}>
            <img src={menuImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;
