import React, { useEffect, useState } from "react";
import reviewRight1 from "../../../utility/reviewRight1.jpg";
import reviewRight2 from "../../../utility/reviewRight2.jpg";
import reviewRight3 from "../../../utility/reviewRight3.jpg";
import styles from "./Review.module.css";
import ReviewCard from "./ReviewCard";
import ReviewImgCard from "./ReviewImgCard";

const Review = () => {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    fetch("https://restaurants-server.vercel.app/restaurantReview")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setReviewData(data);
      });
  }, []);
  const imgData = [
    { img: reviewRight1 },
    { img: reviewRight2 },
    { img: reviewRight3 },
  ];
  return (
    <div className="">
      <div className="row">
        <div className="col-md-8">
          <div className="ms-3">
            <h3>Recent Review</h3>
            <p>Here is customer review about your restaurant</p>
          </div>
          <div className="overflow-auto vh-100 px-3 mb-3">
            {reviewData.map((singleReview) => (
              <ReviewCard singleReview={singleReview} key={Math.random()} />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.reviewRightWrapper}>
            {imgData.map((singleData) => (
              <ReviewImgCard singleData={singleData} key={Math.random()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
