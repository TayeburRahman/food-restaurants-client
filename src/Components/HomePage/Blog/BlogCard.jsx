import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleBlogCard from './SingleBlogCard';


const BlogCard = () => {
    const [blogCardData, setBlogCardData] = useState([])
    useEffect(() => {
        fetch("https://sheltered-crag-23788.herokuapp.com/homePageBlog")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setBlogCardData(data)
        })
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {
                blogCardData.map( singleData => <SingleBlogCard singleData={singleData} key={Math.random()} />)
            }
        </Slider>
    );
};

export default BlogCard;