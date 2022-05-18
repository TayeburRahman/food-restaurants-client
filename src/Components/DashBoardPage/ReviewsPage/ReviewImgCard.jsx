import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewImgCard = (props) => {
    const {img} = props.singleData
    return (
        <div className="card mb-2 border-0">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body text-center">
            <i><FontAwesomeIcon icon={faStar} /></i>
            <i><FontAwesomeIcon icon={faStar} /></i>
            <i><FontAwesomeIcon icon={faStar} /></i>
            <i><FontAwesomeIcon icon={faStar} /></i>
            <i><FontAwesomeIcon icon={faStar} /></i>
        </div>
    </div>
    );
};

export default ReviewImgCard;