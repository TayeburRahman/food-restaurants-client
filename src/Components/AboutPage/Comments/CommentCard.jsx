import React from 'react';
import styles from '../Comments/Comment.module.css'
import avatar from "../../../utility/commentAvatar.jpg"

const CommentCard = (props) => {
    const { img, name, date, profession, message } = props.singleData
    return (
        <div className={styles.commentBox}>
            <div className="row">
                <div className="col-md-2 mx-auto">
                    <img src={img ? img : avatar} alt="" className="img-fluid p-1" style={{ width: 150 }} />
                </div>
                <div className="col-md-10">
                    <div className="mx-2">
                        <h6 className={styles.commentName}>{name}</h6>
                        <div className="d-flex flex-wrap">
                            <p className="me-3">{date}</p>
                            <p>{profession}</p>
                        </div>
                        <p>{message}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CommentCard;