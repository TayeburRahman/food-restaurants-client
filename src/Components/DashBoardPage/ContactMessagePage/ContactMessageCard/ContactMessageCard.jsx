import React from 'react';
import { useNavigate } from 'react-router-dom';


const ContactMessageCard = (props) => {
    const { Name, Phone, _id } = props.singleMessage
    const index = props.i
    // console.log(index);
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/viewContactMessage/${id}`)
    }
    return (
        <tr>
            <th scope="row">#{index}</th>
            <td>{Name}</td>
            <td>{Phone}</td>
            <td>
                <button onClick={() => handleNavigate(_id)}className="btn btn-sm btn-success">View Message</button>
            </td>
        </tr>
    );
};

export default ContactMessageCard;