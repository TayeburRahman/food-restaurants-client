import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../../Shared/Navbar/Navbar';
const ViewContactMessage = () => {
    const [data, setData] = useState([])
    let id = useParams();
    const ID = id.ID
    // console.log(ID)
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/dashboard/contactMessage')
    }
    useEffect(() => {
        fetch(`https://sheltered-crag-23788.herokuapp.com/singleContactUsMessage/${ID}`)
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                setData(json)
            })
    }, [ID])

    // console.log(data);
    const { Name, Message } = data
    return (
        <div className="container">
            <Navbar />
            <div style={{ marginTop: 120 }}>
                <div className="row">
                    <div className="card col-md-8 offset-md-2 shadow">
                        <span>
                            <button onClick={() => handleNavigate()} className="btn btn-sm btn-success my-4">Back</button>
                        </span>
                        <div>
                            <h4>View Contact Us Message</h4>
                            <p><span className="fw-bold">From</span> : {Name}</p>
                            <p className="pb-3"><span className="fw-bold">Message</span> : {Message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewContactMessage;