import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BlogCard.module.css';


const BlogCard = (props) => {
    const { date, img, title, shortDesc, time, _id } = props.blogData;
    // console.log(_id);
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/blogSingle/${_id}`)
    }
    return (
        <div onClick={()=> handleNavigate()} className={styles.cardWrapper}>
            <div className="container">
                <div className="card border-0">
                    <div className={`card-header ${styles.cardHeader}`}>
                        <div className="d-flex align-items-center">
                            <h3 className="card-title me-3">{title}</h3>
                            <p className="card-text text-muted">{date}</p>
                        </div>
                    </div>
                    <div className={styles.cardImg}>
                        <img src={img} className="card-img-top img-fluid" alt="..." />
                    </div>
                    <div className="card-body">
                        <p className="card-text mt-2">{shortDesc}</p>
                        <p className="card-text text-muted">{time}</p>
                        <p>See More...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;