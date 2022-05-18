import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './SingleBlog.module.css';
import { useNavigate } from 'react-router-dom';

const SingleBlogCard = (props) => {
    const { img, title, chefImg, date, shortDesc, _id } = props.singleData;
    // console.log(_id);
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/blogSingle/${_id}`)
    }
    return (
        <div onClick={()=> handleNavigate()} className={styles.cardWrapper}>
            <div className="card border-0">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <div>
                        <img src={chefImg} alt="" className={`img-fluid ${styles.imgBlogChef}`} />
                    </div>
                    <h3 className="card-title mt-3">{title}</h3>
                    <p className={`card-text ${styles.messageText}`}>{shortDesc}</p>
                    <div className={`d-flex justify-content-between ${styles.cardFooter}`}>
                        <div className="d-flex">
                            <i> <FontAwesomeIcon icon={faClock} /> </i>
                            <p className="ms-2">{date}</p>
                        </div>
                        <div className="d-flex">
                            <i> <FontAwesomeIcon icon={faCommentDots} /> </i>
                            <p className="ms-2">0 Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogCard;