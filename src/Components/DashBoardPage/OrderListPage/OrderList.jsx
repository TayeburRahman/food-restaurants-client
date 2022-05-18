import React, { useState, useEffect } from 'react';
import OrderListCard from './OrderListCard';


const OrderList = () => {
    const [foodOrders, setFoodOrders] = useState([])

    useEffect(() => {
        fetch('https://sheltered-crag-23788.herokuapp.com/allFoodOrders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setFoodOrders(data)
            })
    }, [])
    
    return (
        <div>
            <div className="text-center">
                <h3>Order Lists</h3>
                <p>Customer All Orders list data.</p>
            </div>
            <div className="table-responsive">
                <table className="table table-hover bg-white text-center">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            {/* <th scope="col">Img</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {
                            foodOrders.map((data, index) => <OrderListCard item={data} key={Math.random()} i={index}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;