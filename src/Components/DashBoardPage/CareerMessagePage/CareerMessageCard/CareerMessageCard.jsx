import React from 'react';
import { useNavigate } from 'react-router-dom';
const CareerMessageCard = (props) => {
    const { fullName, phone, email, _id } = props.singleMessage
    const index = props.i
    // console.log(index);
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/viewCareerMessage/${id}`)
    }
    return (
        <tr>
            <th scope="row">#{index}</th>
            <td>{fullName}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
                <button onClick={() => handleNavigate(_id)}className="btn btn-sm btn-success">View Message</button>
            </td>
        </tr>
    );
};

export default CareerMessageCard;