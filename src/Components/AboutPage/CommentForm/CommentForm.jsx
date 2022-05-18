import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPlusSquare, faComment, faCalendar } from '@fortawesome/free-solid-svg-icons'

const CommentForm = () => {

    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            profession: "",
            message: "",
        }
    });
    const onSubmit = data => {
        // console.log(data)
        fetch("https://sheltered-crag-23788.herokuapp.com/addRestaurantReview", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                alert(data)
                resetField("name");
                resetField("email");
                resetField("profession");
                resetField("message");
            })
    }

    return (
        <div style={{ marginTop: 50 }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h4 className="mb-3 text-center">Leave a comment about restaurant</h4>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon className="mb-2" icon={faUser} />
                                    <input className="form-control ms-2 mb-2 border-0 border-bottom" type="name" {...register("name", { required: true })} placeholder="Name" />
                                    {errors.name && <span className="text-danger">* Name field is required</span>}
                                </div>

                                <div className="d-flex align-items-center mt-2">
                                    <FontAwesomeIcon className="mb-2" icon={faEnvelope} />
                                    <input className="form-control ms-2 mb-2 border-0 border-bottom" type="email" {...register("email", { required: true })} placeholder="E-Mail" />
                                    {errors.email && <span span className="text-danger">* email field is required</span>}
                                </div>

                                <div className="d-flex align-items-center mt-2">
                                <FontAwesomeIcon className="mb-2" icon={faPlusSquare} />
                                <input className="form-control ms-2 mb-2 border-0 border-bottom" type="text" {...register("profession", { required: true })} placeholder="Profession" />
                                {errors.profession && <span span className="text-danger">* profession field is required</span>}
                                </div>

                                <div className="d-flex align-items-center mt-2">
                                <FontAwesomeIcon className="mb-4" icon={faComment} />
                                <textarea className="form-control mb-2 border-0 border-bottom" type="text" {...register("message", { required: true })} placeholder="Message" />
                                {errors.message && <span className="text-danger">* Message field is required</span>}
                                </div>

                                <div className="d-flex align-items-center mt-2">
                                <FontAwesomeIcon className="mb-3" icon={faCalendar} />
                                <input value={new Date().toDateString()} className="form-control mb-2 border-0 border-bottom" {...register("date", { required: true })} />
                                {errors.date && <span className="text-danger">* Date field is required</span>}
                                </div>

                                <input className="mt-3 mb-5 btn-warning form-control" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CommentForm;