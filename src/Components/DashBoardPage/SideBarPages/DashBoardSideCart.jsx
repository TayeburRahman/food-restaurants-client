import React from 'react';
import styles from './DashBoardSideCart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountUp from 'react-countup';



const DashBoardSideCart = (props) => {
    const { icon, title, desc } = props.singleData;
    return (
        <div className={`border-0 card text-dark mt-3 ${styles.dashboardSideCart}`}>
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-lg-between justify-content-evenly">
                    <div className={styles.dashboardSiteCartIcon}>
                        <i className={styles.sideIcon}><FontAwesomeIcon icon={icon} /></i>
                    </div>
                    <div className="text-center">
                        <div className="d-flex justify-content-lg-end justify-content-evenly">
                            <h4>
                                <CountUp end={title} duration={5}/>K+
                            </h4>
                        </div>
                        <h6 className="card-title text-uppercase text-muted">{desc}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardSideCart;