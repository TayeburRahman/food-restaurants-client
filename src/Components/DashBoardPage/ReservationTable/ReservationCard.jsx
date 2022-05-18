import React from 'react';

const ReservationCard = (props) => {
    const {phone, time, date, table, people} = props.singleData
    return (
        <tr>
            <th scope="row">{time}</th>
            <td>{date}</td>
            <td>{table}</td>
            <td>{people}</td>
            <td>{phone}</td>
        </tr>
    );
};

export default ReservationCard;