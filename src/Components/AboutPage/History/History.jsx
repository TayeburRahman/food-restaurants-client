import React from 'react';
import styles from './History.module.css'
import aboutPageSitePic from '../../../utility/aboutPageSiteImg.png';
import headingDark from '../../../utility/heading-dark.png'

const History = () => {
    return (
        <div className={styles.historyWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div className={styles.historyTitleTexts}>
                            <p>Our History</p>
                            <h2>Where The Food’s As Good As The Root Beer.</h2>
                            <img src={headingDark} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={aboutPageSitePic} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 my-auto">
                        <div className={styles.historyTexts}>
                            <h4>Satisfying people hunger for simple pleasures</h4>
                            <p>People who love to eat are always the best people. To eat is a necessity, but to eat intelligently is an art. We all eat, an it would be a sad waste of opportunity to eat badly. If you really want to make a friend, go to someone’s house and eat with him… The people who give you their food give you their heart.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;