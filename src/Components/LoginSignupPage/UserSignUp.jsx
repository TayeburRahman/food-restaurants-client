import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import SignUp from './SignUpPage/SignUp';
import SignUpImg from '../../utility/signupImg.jpg'


const UserSignUp = () => {
    return (
        <div style={{ height: "100vh" }}>
            <div className="container">
                <Navbar />
            </div>
            <div style={{ position: "relative", top: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="row">
                                <div className="col-md-8 my-auto">
                                    <SignUp />
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex justify-content-center mt-5">
                                        <img src={SignUpImg} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSignUp;