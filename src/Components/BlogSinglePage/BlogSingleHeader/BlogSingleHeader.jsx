import React, { useState, useEffect } from 'react';
import styles from './BlogSingleHeader.module.css'
import { useParams } from "react-router-dom";



const BlogSingleHeader = () => {
    const [data, setData] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [directions, setDirections] = useState([])
    let singleID = useParams();
    let id = singleID.singleID
    // console.log(id)
    useEffect(() => {
        window.scrollTo(0,0)
        fetch(`https://sheltered-crag-23788.herokuapp.com/singleBlog/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
                setIngredients(data.Ingredients)
                setDirections(data.Directions)
            })
    }, [id])

    const { img, chefImg, title, date, rating, PrepTime, CookTime, TotalTime, Servings, longDesc, author, designation} = data
    // console.log(ingredients, directions);
    // console.log(img, chefImg, title, date, rating, PrepTime, CookTime, TotalTime, Servings, shortDesc, longDesc);

    return (
        <div className="pb-2" style={{ marginTop: 150 }}>
            <div className="container">
                <h2>{title}</h2>
                <p className={styles.dateTime}>{date}|| <i className={styles.love}>&hearts;</i> (3)</p>
                <p>{longDesc}</p>
                <div className='d-flex justify-content-between flex-wrap'>
                    <h5>Rating : {rating}</h5>
                    <h5>Servings : {Servings}</h5>
                    <h5>Ready Time : {TotalTime}</h5>
                    <h5>Prep Time : {PrepTime}</h5>
                    <h5>Cook Time : {CookTime}</h5>
                </div>

                <div className="row">
                    <div className="col-md-4 my-5">
                        <h4>Ingredients</h4>
                        <ul className="list-group list-group-flush list-group-numbered">
                            {
                                ingredients.map(singleIngredient => <li key={Math.random()} className="list-group-item list-group-item-action list-group-item-light">{singleIngredient}</li>)
                            }
                        </ul>
                    </div>
                    <div className="col-md-8 my-auto">
                        <div className="d-flex justify-content-center">
                            <figure>
                                <img src={img} alt="Single Page" className="img-fluid" />
                                <figcaption className="text-center mt-3">Picture - {title}.</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                <h4>Recipes Description</h4>
                {
                    directions.map(singleDir => <li className="my-3" key={Math.random()}>{singleDir}</li>)
                }

                <div className="d-flex mt-5">
                    <figure>
                        <img src={chefImg} alt="" className="img-fluid me-3" style={{width : 140, height : 130}}/>
                        <figcaption className="text-center">Author</figcaption>
                    </figure>
                    <div className="my-auto">
                        <h5>{author ? author : "Jenifer"}</h5>
                        <p className="m-0">{designation ? designation : "Chief Chef"}</p>
                        <p className="m-0">Dingo Restaurant</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSingleHeader;