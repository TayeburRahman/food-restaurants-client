import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar'


const CustomerOrderView = () => {
    const [cartItems, setCartItems] = useState([])
    const { ID } = useParams()
    // console.log(ID)
    useEffect(() => {
        fetch(`https://sheltered-crag-23788.herokuapp.com/singleFoodOrderView/${ID}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data[0])
                // console.log(data[0].cartItems)
                setCartItems(data[0].cartItems)
            })
    }, [ID])
    const backToMyOrderNavigate = useNavigate()
    const backToMyOrderPage = () => {
        backToMyOrderNavigate('/dashboard/customerOrder')
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div style={{ marginTop: 120 }} className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="card shadow">
                            <div className="mt-2 ms-2">
                                <button onClick={()=>backToMyOrderPage()} className="btn btn-sm btn-success">Back</button>
                            </div>
                            {
                                cartItems.map((item, index) => <div key={Math.random()}>
                                    <div className="card border-0 m-2">
                                        <div className="row g-0">
                                            <div className="col-md-4 my-auto">
                                                <img src={item.makingPic1} className="img-fluid rounded-start p-2" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text mb-0">Rating : {item.rating}</p>
                                                    <p className="card-text mb-0">Quantity : {item.quantity}</p>
                                                    <p className="card-text">Short designation : {item.shortDescription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerOrderView;