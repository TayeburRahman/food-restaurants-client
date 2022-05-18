import React, { useState, useEffect } from 'react';
import ContactMessageCard from './ContactMessageCard/ContactMessageCard';

const ContactMessage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://sheltered-crag-23788.herokuapp.com/allContactUsMessage")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
            })
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2>Contact Message</h2>
                <p>All customers messages</p>
            </div>
            <div className="mx-2">
                <table className="table table-responsive table-hover bg-white text-center">
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // eslint-disable-next-line array-callback-return
                            // eslint-disable-next-line no-sequences
                            data.map((singleMessage, index) => <ContactMessageCard singleMessage={singleMessage} i={index + 1} key={Math.random()} />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactMessage;