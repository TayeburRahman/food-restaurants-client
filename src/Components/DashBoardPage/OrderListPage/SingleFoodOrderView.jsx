import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../../Shared/Navbar/Navbar'

const SingleFoodOrderView = () => {
    const [order, setOrder] = useState([])
    const [cartItems, setCartItems] = useState([])
    let { ID } = useParams();

    useEffect(() => {
        fetch(`https://sheltered-crag-23788.herokuapp.com/singleFoodOrderView/${ID}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data[0])
                setCartItems(data[0].cartItems);
            })
    }, [ID])
    console.log(order);
    console.log(cartItems);
    const backOrderNavigate = useNavigate()
    const handleBackNavigate = () => {
        backOrderNavigate('/dashboard/orderList')
    }
    const handleChangeStatus = () => {
        
    }

    return (
        <>
            <Navbar />
            <div className="container" style={{ marginTop: 120 }}>
                <div className="row">
                    <div className="col-md-8 offset-md-2 shadow">
                        <div className="card border-0 mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button onClick={() => handleBackNavigate()} className="btn btn-sm btn-success mb-3">Back</button>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <button onClick={() => handleChangeStatus()} className="btn btn-sm btn-success mb-3">Change Status</button>
                                    </div>
                                </div>
                                <h5 className="card-title">Login Information</h5>
                                <p className="card-text m-0">Email : {order.logInEmail}</p>
                                <p className="card-text">Name : {order.isLoggedInEmailName}</p>

                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Customer Info</h5>
                                        <p className="card-text m-0">Email : {order.email}</p>
                                        <p className="card-text m-0">Name : {order.fullName}</p>
                                        <p className="card-text m-0">Address : {order.address}, {order.city}</p>
                                        <p className="card-text m-0">Phone : {order.phone}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Payment Info</h5>
                                        <p className="card-text m-0">Card Name : {order.cardName}</p>
                                        <p className="card-text m-0">Card Number : {order.cardNumber}</p>
                                        <p className="card-text m-0">CVC : {order.cvc}</p>
                                        <p className="card-text m-0 mb-2">Card Expire Date : {order.expireDate}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex">
                                        <h5 className="me-1">Total Amount :</h5>
                                        <p style={{ marginTop: 2 }}>{order.Bill} Tk <strong>Paid</strong></p>
                                    </div>
                                </div>

                                {
                                    cartItems.map(singleCart => <div key={Math.random()}>
                                        <div className="card my-3">
                                            <div className="row g-0">
                                                <div className="col-md-4 my-auto">
                                                    <img src={singleCart.makingPic1} className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{singleCart.title}</h5>
                                                        <p className="card-text mb-0">Quantity : {singleCart.quantity}</p>
                                                        <p className="card-text mb-0">Price : {singleCart.price}</p>
                                                        <p className="card-text mb-0">Food Type : {singleCart.type}</p>
                                                        <p className="card-text mb-0">Description : {singleCart.shortDescription}</p>
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
            </div>
        </>
    );
};

export default SingleFoodOrderView;