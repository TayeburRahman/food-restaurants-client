import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './SignUp.module.css'
import { useNavigate } from 'react-router-dom';
import useAuth from '../useAuthHook';




const SignUp = () => {
    //* function from useCustomAuthFunction
    const {createNewUserWithEmailAndPassword, sentErrorMessage} = useAuth()
    const [errorMessage, setErrorMessage] = useState("")
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            password: "",
            RetypePassword: ""
        }
    });

    //* Go Sign In Page 
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/login')
    }

    //* Sign Up Submit Form
    const onSubmit = data => {
        // console.log(data)
        //* Password validation (Basic)
        if (data.password.length && data.RetypePassword.length < 6) {
            clearInputField()
            setErrorMessage("Password must be at least 6 characters.")
            return
        }
        if (data.password !== data.RetypePassword) {
            clearInputField()
            setErrorMessage("Password not match");
            return
        }
        //* SignUp authentication By (Email/Password)
        createNewUserWithEmailAndPassword(data.email, data.password, data.RetypePassword)
        clearInputField()
        setErrorMessage("")
    }

    //* Input Field Clear
    const clearInputField = () => {
        resetField("name")
        resetField("email")
        resetField("password")
        resetField("RetypePassword")
    }

    return (
        <div className="container">
            <h2 className="my-3 ms-1 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faUserAlt} />
                    <input type="text" className={`form-control ms-2 ${styles.customInput}`} {...register("name", { required: true })} placeholder="Your Name" />
                    {errors.name && <span className="text-danger">* Name field is required</span>}
                </div>
                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faEnvelope} />
                    <input type="email" className={`form-control ms-2 ${styles.customInput}`} {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder="Email" />
                    {errors.email && <span className="text-danger">* Email field is required</span>}
                </div>
                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faLock} />
                    <input type="password" className={`form-control ms-2 mb-4 ${styles.customInput}`} {...register("password", { required: true })} placeholder="Password" />
                    {errors.password && <span className="text-danger">* Password field is required</span>}
                </div>
                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faLock} />
                    <input type="password" className={`form-control ms-2 mb-4 ${styles.customInput}`} {...register("RetypePassword", { required: true })} placeholder="Retype Password" />
                    {errors.RetypePassword && <span className="text-danger">* Retype-Password field is required</span>}
                </div>
                <input className={styles.signUpBtn} type="submit" value="Sign Up" />

                <div className="mt-2 text-danger">{errorMessage}</div>
                <div className="mt-2 text-danger">{sentErrorMessage()}</div>
            </form>

            <button onClick={() => handleNavigate()} style={{ paddingLeft: 0 }} className="btn">Already registered! <u>Sign In</u> </button>

        </div>
    );
};

export default SignUp;