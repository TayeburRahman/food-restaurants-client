import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import styles from './BlogHeader.module.css'
const BlogHeader = () => {
    return (
        <>
        <Navbar/>
            <div className={styles.blogHeaderWrapper}>
                <div className="container">
                    <div className="">
                        <div className="d-flex justify-content-center">
                            <div className={styles.blogBannerTexts}>
                                <h2>Blogs</h2>
                                <p>News and interesting news from our world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogHeader;