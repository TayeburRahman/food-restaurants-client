import React from 'react';
import Video from '../Video/Video';
import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <section className={styles.bannerWrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.bannerInnerText}>
                                <h5>Expensive But The Best</h5>
                                <h1>We believe good food {window.innerWidth > 780 ? <br /> : ""} offer great smile</h1>
                                <p>Eating is not merely a material pleasure. Eating well gives a spectacular joy to life and contributes immensely to goodwill and happy companionship.</p>
                            </div>
                            <Video />
                        </div>
                    </div>
                </div>
                {/* After background img*/}
            </section>
        </>
    );
};

export default Header;