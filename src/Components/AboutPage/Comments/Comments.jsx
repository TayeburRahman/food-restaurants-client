import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

const Comments = () => {
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    fetch("https://restaurants-server.vercel.app/restaurantReview")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCommentData(data);
      });
  }, [commentData]);
  // console.log(commentData);
  return (
    <div className="container">
      <h3>Comments</h3>
      <h5 className="mb-3 text-muted">Our Happy Customers Review</h5>
      {commentData.slice(-3).map((singleData) => (
        <CommentCard singleData={singleData} key={Math.random()} />
      ))}
    </div>
  );
};

export default Comments;
