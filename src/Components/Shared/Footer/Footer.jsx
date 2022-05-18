import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faHome, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css'
import headingDark from '../../../utility/heading-dark.png';
import img1 from '../../../utility/instagram-img1.jpg'
import img2 from '../../../utility/instagram-img2.jpg'
import img3 from '../../../utility/instagram-img3.jpg'
import img4 from '../../../utility/instagram-img4.jpg'
import img5 from '../../../utility/instagram-img5.jpg'
import img6 from '../../../utility/instagram-img6.jpg'

const Footer = () => {
    const { register, resetField, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
        }
    });
    const onSubmit = data => {
        console.log(data)
        fetch("https://sheltered-crag-23788.herokuapp.com/addNewsletter", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                alert(json)
                resetField("email")
            })
    }
    const date = new Date()
    return (
        <footer className={styles.footerWrapper}>
            <div className="container">
                <div className={styles.top}>
                    <p>Shot Info</p>
                    <h2>Get In Touch</h2>
                    <img src={headingDark} alt="" className="img-fluid" />
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <h3>Contact Us</h3>
                        <div className={styles.contactUsData}>
                            <p>“Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully.”</p>
                            <div className="d-flex">
                                <i className="me-2"> <FontAwesomeIcon icon={faPhoneAlt} /> </i>
                                <p>+880 172 222 5555</p>
                            </div>
                            <div className="d-flex">
                                <i className="me-2"> <FontAwesomeIcon icon={faEnvelopeOpen} /> </i>
                                <p>info@dingo.com</p>
                            </div>
                            <div className="d-flex">
                                <i className="me-2"> <FontAwesomeIcon icon={faHome} /> </i>
                                <p>Comilla City, 36/A KandirPar Road</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className={styles.colWrapper}>
                            <h3>Opening Hours</h3>
                            <div className={styles.schedulesData}>
                                <div className={styles.schedules}>
                                    <p className={styles.schedulesDay}>Monday</p>
                                    <p>09am - 10pm</p>
                                </div>
                                <div className={styles.schedules}>
                                    <p className={styles.schedulesDay}>Tuesday</p>
                                    <p>09am - 10pm</p>
                                </div>
                                <div className={styles.schedules}>
                                    <p className={styles.schedulesDay}>Wednesday</p>
                                    <p>09am - 10pm</p>
                                </div>
                                <div className={styles.schedules}>
                                    <p className={styles.schedulesDay}>Thursday</p>
                                    <p>09am - 10pm</p>
                                </div>
                                <div className={styles.schedules}>
                                    <p className={styles.schedulesDay}>Friday</p>
                                    <p>2pm - 11pm</p>
                                </div>
                                <div className={styles.schedules}>
                                    <p className={styles.schedulesDay}>Saturday</p>
                                    <p>11am - 08pm</p>
                                </div>
                                <div className={styles.schedules}>
                                    <p className={styles.schedulesDay}>Sunday</p>
                                    <p>Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className={styles.colWrapper}>
                            <h3>Instagram</h3>
                            <div className={styles.instagramPic}>
                                <div className={`row g-2 ${styles.instagramData}`}>
                                    <div className="col-lg-4 col-6">
                                        <img src={img1} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-4 col-6">
                                        <img src={img2} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-4 col-6">
                                        <img src={img3} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-4 col-6 mt-lg-2">
                                        <img src={img4} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-4 col-6 mt-lg-2">
                                        <img src={img5} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-4 col-6 mt-lg-2">
                                        <img src={img6} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <div className={styles.aboutWrapper}>
                    <div className={styles.aboutData}>
                        <h3>About Dingo</h3>
                        <p> <strong>Dingo</strong> is located on the “Roof top” level of the City Place Convention Centre adjacent to the Pan Pacific Hotel. We have a bright, contemporary space where diners are surrounded by floor to ceiling windows. Enjoy the breathtaking views of City Park, Coal Harbour Shore, the National Gate Bridge and our World Class Ski Hills. </p>
                    </div>
                </div>

                <div className={`row ${styles.allowNewsletter}`}>
                    <div className={`col-12 col-sm-6 ${styles.followData}`}>
                        <h3>Follow Along</h3>
                        <div className={styles.footerSocial}>
                            <i> <FontAwesomeIcon icon={faFacebookF} /> </i>
                            <i> <FontAwesomeIcon icon={faGoogle} /> </i>
                            <i> <FontAwesomeIcon icon={faTwitter} /> </i>
                            <i> <FontAwesomeIcon icon={faLinkedinIn} /> </i>
                            <i> <FontAwesomeIcon icon={faInstagram} /> </i>
                        </div>
                    </div>

                    <div className={`col-12 col-sm-6 ${styles.followData}`}>
                        <h3>NewsLetter</h3>
                        <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control me-2" type="email" placeholder="E-mail" {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="text-danger">*Email field is required</span>}
                            <input className="btn btn-warning" value="Submit" type="submit" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <p className="px-3">Copyright © {date.getFullYear()} Bingo Restaurant. All rights reserved by <i style={{ fontSize: 20 }}>&hearts;</i> Dingo.</p>
            </div>

        </footer>
    );
};

export default Footer;