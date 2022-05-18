import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderListCard = (props) => {
    const {_id, Bill, fullName, phone, status} = props.item
    const index = props.i
    const foodOrderViewNavigate = useNavigate()
    const handleNavigate = () => {
        foodOrderViewNavigate(`/foodOrderView/${_id}`)
    }
    return (
        <tr>
            <td>{index + 1}</td>
            {/* <td>
                <img style={{ minWidth: 75, height: 75, borderRadius: 15, }} src={props.item.cartItems.makingPic1} className=" p-2 img-fluid rounded-start" alt="makingPic1" />
            </td> */}
            <td>{fullName}</td>
            <td>{phone}</td>
            <td>{Bill}</td>
            <td>{status}</td>
            <td>
                <button onClick={() => handleNavigate(_id)}className="btn btn-sm btn-dark">View</button>
            </td>
        </tr>
    );
};

export default OrderListCard;