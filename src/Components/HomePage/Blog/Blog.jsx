import React from 'react';
import BlogCard from './BlogCard';
import styles from './Blog.module.css';
import headingDark from '../../../utility/heading-dark.png';

const Blog = () => {
    return (
        <div className={styles.postWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className={`mx-auto ${styles.blogMaxWidth}`}>
                            <div className={styles.postTexts}>
                                <p>Latest Post</p>
                                <h2>From The Blog</h2>
                                <img src={headingDark} alt="" className="img-fluid" />
                            </div>
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;