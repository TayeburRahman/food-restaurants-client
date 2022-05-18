import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div className="container mt-5">
            <div className="border shadow-lg p-5 rounded">
            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <h2 className="text-success">Your Order Successfully Done.</h2>
                    <p>We'll notify you as soon as possible</p>
                    <p>For Query Call : 880 1732 121 121</p>
                    <button onClick={()=> handleNavigate()}className="btn btn-warning">GO TO HOME</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Success;