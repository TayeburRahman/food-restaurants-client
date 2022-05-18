import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faComments, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export default function App() {
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
          Name: "",
          Phone : "",
          Message : "",
        }
      });
    const onSubmit = data => {
        // console.log(data)
        fetch("https://sheltered-crag-23788.herokuapp.com/contactUsMessage", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(jsonData => {
            // console.log(jsonData)
            alert(jsonData)
            resetField("Name")
            resetField("Phone")
            resetField("Message")
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Message Us</h4>
            <p className="pb-3">Leave a message.</p>
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faUser} />
                <input className="form-control ms-2 border-0 border-bottom" type="text" placeholder="Name" {...register("Name", { required: true })} />
                {errors.Name && <span className="text-danger">* Name field is required</span>}
            </div>
            <br />

            <div className="d-flex align-items-center mt-2">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <input className="form-control ms-2 border-0 border-bottom" type="tel" placeholder="Phone Number" {...register("Phone", { required: true })} />
                {errors.Phone && <span className="text-danger">* Phone field is required</span>}
            </div>
            <br />

            <div className="d-flex align-items-center mt-2">
                <FontAwesomeIcon className="mb-3" icon={faComments} />
                <textarea className="form-control ms-2 border-0 border-bottom" type="text" placeholder="Any Message" {...register("Message", { required: true })} />
                {errors.Message && <span className="text-danger">* Message field is required</span>}
            </div>

            <br />

            <input className="form-control btn btn-warning" type="Submit" defaultValue="Sent Message"/>
        </form>
    );
}