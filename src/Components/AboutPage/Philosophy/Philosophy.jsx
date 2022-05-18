import React from 'react';
import styles from './Philosophy.module.css';
import sign from '../../../utility/sign-1.png';
import Chef from '../../../utility/chef-4.png';
import headingDark from '../../../utility/heading-dark.png'

const Philosophy = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 my-auto">
                    <div className={styles.philosophyWrapper}>
                        <h6>Our story meet our strategy</h6>
                        <h2>Philosophy</h2>
                        <img src={headingDark} alt="" className="img-fluid" />

                        <p>Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships. Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.</p>

                    </div>
                    <img src={sign} alt="" className="img-fluid" />
                </div>

                <div className="col-12 col-md-4">
                    <img src={Chef} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Philosophy;