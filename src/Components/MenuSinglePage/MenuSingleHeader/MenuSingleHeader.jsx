import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import useCart from '../../AddCart/useCartHook';




const MenuSingleHeader = () => {
    const { handleAddProduct } = useCart()
    const [data, setData] = useState([])
    const [allIngredient, setAllIngredient] = useState([])
    const [allFoodInstructions, setFoodInstructions] = useState([])
    let homeData = useParams();
    let id = homeData.menuSingleID
    // console.log(id)
    // console.log(allIngredient);
    // console.log(data);

    useEffect(() => {
        window.scrollTo(0, 0)
        fetch(`https://sheltered-crag-23788.herokuapp.com/singleMenu/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setAllIngredient(data.ingredient)
                setFoodInstructions(data.foodInstructions)
            })
    }, [id])

    const { name, title, foodCategory, shortDescription, price, rating, servings, readyTime, prepTime, cookTime, makingPic1, makingPic2, makingPic3 } = data

    const orderNavigate = useNavigate()
    const navigate = (productItem) => {
        handleAddProduct(productItem)
        orderNavigate("/addCart")
    }

    return (
        <div style={{ marginTop: 120 }}>
            <div className="container">
                <div>
                    <h2 className='text-center text-capitalize mb-2'>{title}</h2>
                    <p className="text-center">{shortDescription}</p>
                </div>
                <button onClick={() => navigate(data)} className="btn btn-primary my-3">Make A Order</button>
                <h4 className="mb-2"># Food Category : {foodCategory}</h4>
                {/* <h5 className="text-primary"># {tags}</h5> */}
                <div className='d-flex justify-content-between flex-wrap'>
                    <h5>Price : {price}</h5>
                    <h5>Rating : {rating}</h5>
                    <h5>Servings : {servings}</h5>
                    <h5>Ready Time : {readyTime}</h5>
                    <h5>Prep Time : {prepTime}</h5>
                    <h5>Cook Time : {cookTime}</h5>
                </div>

                <div className="row mt-4">
                    <div className="col-md-4 mb-4">
                        <ul className="list-group list-group-flush list-group-numbered">
                            {
                                allIngredient.map(singleIngredient => <li key={Math.random()} className="list-group-item list-group-item-action list-group-item-light">{singleIngredient}</li>)
                            }
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex justify-content-center mt-3">
                            <div className="w-50 d-flex justify-content-center">
                                <figure>
                                    <img src={makingPic1} alt="" className="img-fluid" />
                                    <figcaption className="text-center">Fig.1 - {name}.</figcaption>
                                </figure>
                            </div>
                        </div>

                        <h4>Instructions</h4>
                        {
                            allFoodInstructions.slice(0, 2).map(singleDir => <li key={Math.random()}>{singleDir}</li>)
                        }

                        <div className="d-flex justify-content-center mt-4">
                            <div className="w-50 d-flex justify-content-center">
                                <figure>
                                    <img src={makingPic2} alt="" className="img-fluid" />
                                    <figcaption className="text-center">Fig.2 - {name}.</figcaption>
                                </figure>
                            </div>
                        </div>

                        {
                            allFoodInstructions.slice(2, 4).map(singleDir => <li key={Math.random()}>{singleDir}</li>)
                        }

                        <div className="d-flex justify-content-center mt-4">
                            <div className="w-50 d-flex justify-content-center">
                                <figure>
                                    <img src={makingPic3} alt="" className="img-fluid text-center" />
                                    <figcaption className="text-center">Fig.3 - {name}.</figcaption>
                                </figure>
                            </div>
                        </div>

                        {
                            allFoodInstructions.slice(4, 100).map(singleDir => <li key={Math.random()}>{singleDir}</li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuSingleHeader;