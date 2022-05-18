import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import data from './CusMapData.js';
import customerMap1 from '../../../utility/customerMap1.jpg'
const CustomerMap = () => {
    return (
        <div className="border-0 card text-dark mt-3">
            <div className="card-body">
                <div className="">
                    <div className="">
                        <div className="">
                            <h4 className="text-center mb-3">Customer Map</h4>
                            <select className="form-select btn btn-outline-primary" aria-label="Default select example">
                                <option defaultValue>Month</option>
                                <option value="1">Week</option>
                                <option value="2">Day</option>
                            </select>
                        </div>
                        <p className="text-muted mt-3">Dingo's Customers Daily Ratio.</p>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <ComposedChart width={350} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
            </div>

            <div className="card border-0 bg-dark mt-4">
                <img src={customerMap1} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title">Fresh Morning Tea</h5>
                    <p className="card-text">Wake up to bed is good for health and body. To fit good work out at least one hour. After work out you need a fresh drink as like a tea. This tea is best after work out.</p>
                    <p className="card-text">Last updated 3 months ago</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerMap;