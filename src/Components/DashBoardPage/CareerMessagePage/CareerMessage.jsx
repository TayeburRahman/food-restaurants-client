import React, { useState, useEffect } from 'react'
import CareerMessageCard from './CareerMessageCard/CareerMessageCard';

const CareerMessage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://sheltered-crag-23788.herokuapp.com/allCareerMessage`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2>Career Message</h2>
                <p>All customers messages</p>
            </div>
            <div className="mx-2">
                <table className="table table-responsive table-hover bg-white text-center">
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">E-Mail</th>
                            <th scope="col">Resume Link & Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((singleMessage, index) => <CareerMessageCard singleMessage={singleMessage} i={index + 1} key={Math.random()} />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CareerMessage;