import React, { useState } from 'react';
import { useEffect } from 'react';
import ReservationCard from './ReservationCard';

const ReservationTable = () => {
    const [reservationData, setReservationData] = useState([])
    useEffect(()=> {
        fetch('https://sheltered-crag-23788.herokuapp.com/allReservation')
        .then(res => res.json())
        .then(jsonData => {
            // console.log(jsonData);
            setReservationData(jsonData)
        })
    },[])
    return (
        <div>
            <div className="text-center">
                <h2>Reservation</h2>
                <p>All Customers Booking Tables</p>
            </div>

            <div className='mx-2'>
            <table className="table table-responsive bg-white table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Date</th>
                        <th scope="col">Table No</th>
                        <th scope="col">People</th>
                        <th scope="col">Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reservationData.map(singleData => <ReservationCard singleData={singleData} key={Math.random()} />)
                    }
                </tbody>
            </table>
            </div>
        </div>


    );
};

export default ReservationTable;