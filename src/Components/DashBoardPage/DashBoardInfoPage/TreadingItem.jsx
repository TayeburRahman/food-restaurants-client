import React, { useState, useEffect } from 'react';
import TrendingCard from './TrendingCard';

const TreadingItem = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://sheltered-crag-23788.herokuapp.com/HomeMenu")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
            })
    }, [])
    return (
        <div className="border-0 card text-dark mt-3">
            <div className="card-body">
                <div className="">
                    <div className="">
                        <div className="">
                            <h4 className="text-center mb-3">Trending Items</h4>
                            <p className="text-muted mt-3">Dingo's Recently Trending Items.</p>
                        </div>

                        {
                            data.map(singleData => <TrendingCard singleData={singleData} key={Math.random()} />)
                        }

                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">

            </div>
        </div>
    );
};

export default TreadingItem;