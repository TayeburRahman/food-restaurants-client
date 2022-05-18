import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Shared/Navbar/Navbar';

const FormPaymentDetails = ({ nextStep, prevStep, values, handleChange }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { fullName, email, phone, address, city } = values
        const Data = { fullName, email, phone, address, city, ...data }
        nextStep()
        handleChange(Data)
    }

    const handleNavigate = () => {
        prevStep()
    }

    return (
        <div>
            <Navbar />
            <div style={{ marginTop: 100 }} className="container">
                <div className="d-flex justify-content-center mt-5 mb-3">
                    <h2>Form Payment Details</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input onChange={handleChange} defaultValue={values.cardName} className="form-control mb-2" type="text" placeholder="Card Name" {...register("cardName", { required: true })} />
                    {errors.cardName && <span className="text-danger mb-1">* Card Name field is required</span>}

                    <input onChange={handleChange} defaultValue={values.cardNumber} className="form-control mb-2" type="number" placeholder="Card Number"  {...register("cardNumber", { required: true })} />
                    {errors.cardNumber && <span className="text-danger mb-1">* Card Number field is required</span>}

                    <input onChange={handleChange} defaultValue={values.cvc} className="form-control mb-2" type="number" placeholder="CVC Number" {...register("cvc", { required: true })} />
                    {errors.cvc && <span className="text-danger mb-1">* CVC Number is required</span>}

                    <input onChange={handleChange} defaultValue={values.expireDate} className="form-control mb-2" placeholder="Expire Date Formate mm/dd/yyyy" {...register("expireDate", { required: true })} />
                    {errors.expireDate && <span className="text-danger mb-1">* Expire Date field is required</span>}
                    <br />

                    <div className="d-flex justify-content-between">
                        <button onClick={() => handleNavigate()} className="btn btn-success">Back</button>
                        <input className="btn btn-success" type="submit" value="Next" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default FormPaymentDetails;