import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Shared/Navbar/Navbar';

const FormUserDetails = ({ nextStep, values, handleChange }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        nextStep()
        handleChange(data)
    }

    return (
        <div>
            <Navbar />
            <div style={{ marginTop: 100 }} className="container">
                <div className="d-flex justify-content-center mt-5 mb-3">
                    <h2>Form User Details</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input onChange={handleChange} defaultValue={values.fullName} className="form-control mb-2" type="text" placeholder="Full Name" {...register("fullName", { required: true })} />
                    {errors.fullName && <span className="text-danger mb-1">* Full Name field is required</span>}

                    <input onChange={handleChange} defaultValue={values.email} className="form-control mb-2" type="email" placeholder="E-Mail Address"  {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger mb-1">* E-Mail field is required</span>}

                    <input onChange={handleChange} defaultValue={values.phone} className="form-control mb-2" type="tel" placeholder="Phone Number" {...register("phone", { required: true })} />
                    {errors.phone && <span className="text-danger mb-1">* Phone field is required</span>}

                    <input onChange={handleChange} defaultValue={values.address} className="form-control mb-2" type="text" placeholder="Address" {...register("address", { required: true })} />
                    {errors.address && <span className="text-danger mb-1">* Address field is required</span>}

                    <input onChange={handleChange} defaultValue={values.city} className="form-control mb-2" type="text" placeholder="City" {...register("city", { required: true })} />
                    {errors.city && <span className="text-danger mb-1">* City field is required</span>}

                    <br />
                    <div className="d-flex justify-content-end">
                        <input className="btn btn-success" type="submit" value="Next" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default FormUserDetails;