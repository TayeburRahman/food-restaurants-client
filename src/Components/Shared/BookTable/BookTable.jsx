import React, {useEffect} from 'react';
import styles from './BookTable.module.css';
import headingDark from '../../../utility/heading-dark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faCar, faWallet } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";

const BookTable = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            date: "",
            time: "",
            people: "",
            phone: "",
            table: "",
        }
      });
    const onSubmit = data => {
        // console.log(data)
        fetch('https://sheltered-crag-23788.herokuapp.com/addReservation', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(jsonData => {
            // console.log(jsonData)
            alert(jsonData)
            resetField("date")
            resetField("time")
            resetField("people")
            resetField("phone")
            resetField("table")
        })
    }

    return (
        <section className={styles.BookTableWrapper}>
            <div className="container">
                <div className={styles.BookTableTexts}>
                    <p>Reservation A Table</p>
                    <h2>Book A Table Now!</h2>
                    <img src={headingDark} alt="" className="img-fluid" />
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="d-flex justify-content-center">
                                <i><FontAwesomeIcon icon={faWifi} /></i>
                                <h5 className="ms-2">Free Internet</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-center">
                                <i><FontAwesomeIcon icon={faWallet} /></i>
                                <h5 className="ms-2">Easy Payment</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-center">
                                <i><FontAwesomeIcon icon={faCar} /></i>
                                <h5 className="ms-2">Free Parking 24/7</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bookInfo}>
                    <div className={styles.formBg}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-3">
                                <div className="row">
                                    <div className={`col-md-6 mb-2 ${styles.InputGroup}`}>
                                        <label htmlFor="ReservationDate" className="ms-2 mb-1">*Reservation Date :</label>
                                        <input type='date' className="form-control" {...register("date", { required: true })}/>  
                                        {errors.date && <span className="text-danger">*This field is required</span>}
                                    </div>
                                    <div className={`col-md-6 mb-2 ${styles.InputGroup}`}>
                                        <label htmlFor="ReservationTime" className="ms-2 mb-1">*Reservation Time :</label>
                                        <select className="form-select border-0 border-bottom" aria-label="Default select example" {...register("time", { required: true })}>
                                            <option>Select Time</option>
                                            <option>9.00-10.00 AM</option>
                                            <option>10.00-11.00 AM</option>
                                            <option>2.00-3.00 PM</option>
                                            <option>3.00-4.00 PM</option>
                                            <option>4.00-5.00 PM</option>
                                            <option>5.00-6.00 PM</option>
                                            <option>6.00-7.00 PM</option>
                                            <option>7.00-8.00 PM</option>
                                            <option>8.00-9.00 PM</option>
                                            <option>9.00-10.00 PM</option>
                                            <option></option>
                                        </select>
                                        {errors.time && <span className="text-danger">*This field is required</span>}
                                        {/* <input type="time" className="form-control"  {...register("time", { required: true })} />
                                        {errors.time && <span className="text-danger">*This field is required</span>} */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`col-md-6 mb-2 col-lg-4 ${styles.InputGroup}`}>
                                        <label htmlFor="people" className="ms-2 mb-1">*People :</label>
                                        <input type="number" className="form-control" placeholder="0" {...register("people", { required: true })} />
                                        {errors.people && <span className="text-danger">*This field is required</span>}
                                    </div>
                                    <div className={`col-md-6 mb-2 col-lg-4 ${styles.InputGroup}`}>
                                        <label htmlFor="table" className="ms-2 mb-1">*Table No :</label>
                                        <select className="form-select border-0 border-bottom" aria-label="Default select example" {...register("table", { required: true })}>
                                            <option>Select Table</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                        {errors.table && <span className="text-danger">*This field is required</span>}
                                    </div>
                                    <div className={`col-md-6 mb-2 col-lg-4 mx-auto ${styles.InputGroup}`}>
                                        <label htmlFor="phone" className="ms-2 mb-1">*Phone Number :</label>
                                        <input type="tel" className="form-control" placeholder="01XXX-XXXXXX" {...register("phone", { required: true })} />
                                        {errors.phone && <span className="text-danger">*This field is required</span>}
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <input type="submit" className="btn btn-secondary mt-1" value="Make Reservation" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <h3 className="mt-5 text-center">You can also call: +880 172 222 5555 to make a reservation.</h3>
            </div>
        </section>
    );
};

export default BookTable;