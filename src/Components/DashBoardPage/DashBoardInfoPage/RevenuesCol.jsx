import React from 'react';
import CountUp from 'react-countup';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import styles from './Revenues.module.css'
import RevenuesData from './RevenuesData.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
const RevenuesCol = () => {
    return (
        <div className="border-0 card text-dark mt-3">
            <div className="card-body">
                <div className="">
                    <div className="">
                        <div className="">
                            <h4 className="text-center mb-3">Revenue</h4>
                            <select className="form-select btn btn-outline-primary" aria-label="Default select example">
                                <option defaultValue>Month</option>
                                <option value="1">Week</option>
                                <option value="2">Day</option>
                            </select>
                        </div>
                        <p className="text-muted mt-3">Dingo's Revenue</p>
                    </div>
                    <div className="card shadow mb-3">
                        <div className={`card-body ${styles.dashboardInfoCart}`}>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <div className='d-flex align-items-center'>
                                        <FontAwesomeIcon className={`me-2 ${styles.income}`} icon={faChartBar} />
                                        <h5 className='m-0'>
                                            <CountUp end={31} duration={5} />K
                                        </h5>
                                    </div>
                                    <p className="card-text mt-2">Income</p>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center'>
                                        <FontAwesomeIcon className={`me-2 ${styles.expense}`} icon={faChartBar} />
                                        <h5 className='m-0'>
                                            <CountUp end={25} duration={5} />K
                                        </h5>
                                    </div>
                                    <p className="card-text mt-2">Expense</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <ResponsiveContainer width={300} height={250}>
                    <AreaChart data={RevenuesData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        {/* <Tooltip /> */}
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenuesCol;