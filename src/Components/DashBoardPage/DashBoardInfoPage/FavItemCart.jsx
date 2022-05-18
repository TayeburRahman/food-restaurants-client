import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './FavItems.module.css';
import { faStar } from '@fortawesome/free-regular-svg-icons';


const FavItemCart = (props) => {
    const { img, title, like, rating } = props.singleFav
    return (
        <div className="col-md-4">
            <div className="card m-3 border-0">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <i className="me-1">
                        <FontAwesomeIcon className={styles.StarIcon} icon={faStar} />
                    </i>
                    <i className="me-1">
                        <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="me-1">
                        <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="me-1">
                        <FontAwesomeIcon icon={faStar} />
                    </i>
                    <i className="me-3">
                        <FontAwesomeIcon icon={faStar} />
                    </i>
                    <span>{rating}</span>

                    <p className="card-text">reviews</p>
                    <span className="badge rounded-pill bg-primary">{like}k Like it</span>
                </div>
            </div>
        </div>
    );
};

export default FavItemCart;