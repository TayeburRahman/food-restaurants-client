import React from 'react';
import message from '../../../utility/reshot-icon-envelope.svg';
import phone from '../../../utility/reshot-icon-phone.svg';
import clock from '../../../utility/reshot-icon-alarm-clock.svg';
import CareerInfoCard from './CareerInfoCard';

const CareerInfo = () => {
    const data = [
        {
            img : message,
            title : "dingo@gmail.com",
            des : "Response time of 48h. Our support office is available monday to friday."
        },
        {
            img : phone,
            title : "(+880) 172 222 5555",
            des : "Instant response time from monday to friday from 10 am to 10 pm."
        },
        {
            img : clock,
            title : "Schedule",
            des : "To Reservation or want to know any update query at 10 am to 4 pm."
        },
    ]
    return (
        <div className="container py-5">
            <div className="row">
                {data.map(ele => <CareerInfoCard data={ele} key={Math.random()}/>)}
            </div>
        </div>
    );
};
export default CareerInfo;