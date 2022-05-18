import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import useAuth from '../useAuthHook';



const Login = () => {
    //* function from useCustomAuthFunction
    const {signInEmailAndPassword, signInWithGoogle, sentErrorMessage, setErrorMessage} = useAuth()
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: ""
        }
    });

    //* Go Sign Up Page 
    const signUpNavigate = useNavigate()
    const handleNavigate = () => {
        signUpNavigate('/signUp')
        setErrorMessage("")
    }

    //* Sign In Submit Form
    const onSubmit = data => {
        console.log(data)
        //* SignIn authentication By (Email/Password)
        signInEmailAndPassword(data.email, data.password)
        clearInputField()
    }

    const clearInputField = () => {
        resetField("email")
        resetField("password")
    }

    return (
        <div className="container">
            <h2 className="my-3 ms-1 text-center">Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faEnvelope} />
                    <input type="text" className={`form-control ms-2 ${styles.customInput}`} {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder="Email" />
                    {errors.email && <span className="text-danger">* Email field is required</span>}
                </div>
                <div className="form-group d-flex">
                    <FontAwesomeIcon className="ms-1 mt-2" icon={faLock} />
                    <input type="password" className={`form-control ms-2 mb-4 ${styles.customInput}`} {...register("password", { required: true })} placeholder="Password" />
                    {errors.password && <span className="text-danger">* Password field is required</span>}
                </div>

                <input className={styles.signInBtn} type="submit" value="Sign In" />

                <div className="mt-2 text-danger">{sentErrorMessage()}</div>
            </form>

            <div>
                <div className="d-flex mt-5">
                    <p className="mt-1">Or use one of these options</p>
                    <div className="ms-2">
                        <button onClick={signInWithGoogle} style={{ fontSize: 14, color: "white", background: "#db3236", }} className="btn btn-sm me-2">
                            <FontAwesomeIcon icon={faGoogle} />
                        </button>

                        <button style={{ fontSize: 14, color: "white", background: "#3b5998", }} className="btn btn-sm me-2">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>

                        <button style={{ fontSize: 14, color: "white", background: "#1DA1F2", }} className="btn btn-sm me-1">
                            <FontAwesomeIcon icon={faTwitter} />
                        </button>
                    </div>
                </div>
                <button onClick={() => handleNavigate()} style={{ paddingLeft: 0 }} className="btn mt-3">Not yet register? <u>Sign Up</u> </button>
            </div>
        </div>
    );
};

export default Login;