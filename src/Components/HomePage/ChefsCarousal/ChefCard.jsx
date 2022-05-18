import React from 'react';
import styles from './Chefs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons'

const ChefCard = (props) => {
    const {photo, name, design, message} = props.singleChef
    return (
        <div className={styles.chefDetails}>
            <img src={photo} alt="" className="img-fluid" />

            <div className={styles.chefOverlay}>
                <div className={styles.overlayText}>
                    <h5 className="pt-1">{name}</h5>
                    <h6>{design}</h6>
                    <div className={styles.socialIcons}>
                        <FontAwesomeIcon className={styles.faSocial} icon={faFacebookF} />
                        <FontAwesomeIcon className={styles.faSocial} icon={faTwitter} />
                        <FontAwesomeIcon className={styles.faSocial} icon={faLinkedinIn} />
                    </div>
                    <p> <sup><FontAwesomeIcon icon={faQuoteLeft} /></sup> {message} <sub><FontAwesomeIcon icon={faQuoteRight} /></sub> </p>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;