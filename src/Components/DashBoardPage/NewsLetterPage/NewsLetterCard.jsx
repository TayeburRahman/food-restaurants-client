import React from 'react';

const NewsLetterCard = (props) => {
    const {email} = props.singleData
    const index = props.i
    return (
        <tr>
            <th scope="row"># {index}</th>
            <td>{email}</td>
        </tr>
    );
};

export default NewsLetterCard;