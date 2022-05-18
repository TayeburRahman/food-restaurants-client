import React, {useEffect, useState} from 'react';
import NewsLetterCard from './NewsLetterCard';

const NewsLetter = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://sheltered-crag-23788.herokuapp.com/allNewsLetter")
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            setData(json)
        })
    },[])
    return (
        <div>
            <div className="text-center">
                <h2>NewsLetter</h2>
                <p>All Customer NewsLetter E-Mails</p>
            </div>
            <div className='mx-2'>
            <table className="table table-responsive table-hover bg-white">
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">E-Mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((singleData, index) => <NewsLetterCard singleData={singleData} i={index + 1} key={Math.random()}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewsLetter;