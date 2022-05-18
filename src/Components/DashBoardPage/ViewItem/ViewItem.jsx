import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../../Shared/Navbar/Navbar';

const ViewItem = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/dashboard/allFoods")
    }
    const [data, setData] = useState([])
    let ID = useParams();
    let id = ID.ID
    // console.log(id)
    useEffect(() => {
        fetch(`https://sheltered-crag-23788.herokuapp.com/singleMenu/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
            })
    }, [id])
    const { _id, title, shortDescription, makingPic1, name, price } = data
    return (
        <div>
            <Navbar />

            <div style={{ marginTop: 120 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 shadow">
                            <button onClick={() => handleNavigate()} className="btn btn-success mt-4">Back</button>
                            <div className="p-5">
                                <div className="text-center">
                                <h6>Code : #{_id}</h6>
                                <h3>View Item : {title}</h3>
                                <p>{shortDescription}</p>
                                <h4>Price : {price}</h4>
                                </div>
                                <div>
                                    <figure className="text-center">
                                        <img src={makingPic1} alt="Item" className="img-fluid w-50" />
                                        <figcaption className="mt-1">Fig.1 - {name}.</figcaption>
                                    </figure>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ViewItem;