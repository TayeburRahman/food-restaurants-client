import React from 'react';
import styles from './About.module.css';
import sign from '../../../utility/sign-1.png'
import Chefs from '../ChefsCarousal/Chefs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import headingDark from '../../../utility/heading-dark.png';

const About = () => {
    return (
        <section className={styles.aboutWrapper}>
            <div className="container">
                <div className="row">
                    <div className={`col-sm-12 ${styles.aboutCentralize}`}>
                        <div className={styles.textContainer}>
                            <p className={styles.aboutTitleParagraph}>Your pleasure of teasing</p>
                            <h2>Let’s Eat Together!</h2>
                            <img src={headingDark} alt="" className="img-fluid"/>
                            <p className={styles.aboutDescription}> <sup><FontAwesomeIcon icon={faQuoteLeft} /></sup> Dear guests, you are welcomed to dine with us at <strong>Dingo Good Food restaurant</strong>. We will serve you with the mouth watering dishes. Have a pleasant dining experience. <sub><FontAwesomeIcon icon={faQuoteRight} /></sub> </p>
                            
                            <img src={sign} alt="" className="img-fluid" />

                            <div>
                                <Chefs/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;<h1>About</h1>