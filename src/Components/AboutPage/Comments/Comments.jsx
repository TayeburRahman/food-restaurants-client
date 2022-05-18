import React, {useState, useEffect} from 'react';
import CommentCard from './CommentCard';

const Comments = () => {
    const [commentData, setCommentData] = useState([])
    useEffect(() => {
        fetch("https://sheltered-crag-23788.herokuapp.com/restaurantReview")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setCommentData(data)
        })
    },[])
    // console.log(commentData);
    return (
        <div className="container">
            <h3>Comments</h3>
            <h5 className="mb-3 text-muted">Our Happy Customers Review</h5>      
            {
                commentData.slice(-2).map(singleData => <CommentCard singleData={singleData} key={Math.random()}/>)
            }
        </div>
    );
};

export default Comments;