import React from 'react';
import { useForm } from "react-hook-form";
const AddAdmin = () => {
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            pass: "",
            birth: "",
        }
    });
    const onSubmit = data => {
        const addAdmin = data
        fetch('https://sheltered-crag-23788.herokuapp.com/admin', {
            method: 'POST',
            body: JSON.stringify(addAdmin),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data)
                resetField("name");
                resetField("email");
                resetField("pass");
                resetField("birth");
            })
    }


    return (
        <>
            <div className="text-center">
                <h3>New Admin</h3>
                <p>Make a New Admin</p>
            </div>
            <div className="row">
                <div className="offset-md-3 col-md-6 mt-3 px-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="d-flex justify-content-start mt-3">*Admin Name :</label>
                        <input className="form-control mb-2 border-0 border-bottom" type="text" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">*Name field is required</span>}

                        <label className="d-flex justify-content-start mt-3">*E-Mail :</label>
                        <input className="form-control mb-2 border-0 border-bottom" type="email" placeholder="E-Mail" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">*Email field is required</span>}

                        <label className="d-flex justify-content-start mt-3">*Password :</label>
                        <input className="form-control mb-2 border-0 border-bottom" type="password" {...register("pass", { required: true })} />
                        {errors.pass && <span className="text-danger">*Password field is required</span>}

                        <label className="d-flex justify-content-start mt-3">*Birth Day :</label>
                        <input className="form-control border-0 border-bottom" type="date" {...register("birth", { required: true })} />
                        {errors.birth && <span className="text-danger">*Birth Day field is required</span>}
                        <br />
                        <input type="submit" className="btn btn-sm btn-success me-2" value="Add Admin" />
                        <input type="reset" className="btn btn-sm btn-success" value="Reset"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddAdmin;