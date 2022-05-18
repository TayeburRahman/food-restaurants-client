import React, {useEffect} from 'react';
import BlogHeader from './BlogHeader/BlogHeader';
import AllBlog from './AllBlog/AllBlog';
import Footer from '../Shared/Footer/Footer';

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <BlogHeader />
            <AllBlog />
            <Footer />
        </>
    );
};

export default Blogs;