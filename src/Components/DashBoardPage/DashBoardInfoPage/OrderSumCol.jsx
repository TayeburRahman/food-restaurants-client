import React from 'react';
import styles from './OrderSumCol.module.css'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import CountUp from 'react-countup';


const OrderSumCol = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className="border-0 card text-dark mt-3">
            <div className="card-body">
                <div className="">
                    <div className="">
                        <div className="">
                            <h4 className="text-center mb-3">Orders Summary</h4>
                            <select className="form-select btn btn-outline-primary" aria-label="Default select example">
                                <option defaultValue>Month</option>
                                <option value="1">Week</option>
                                <option value="2">Day</option>
                            </select>
                        </div>
                        <p className="text-muted mt-3">Dingo's Customers Orders Details</p>
                    </div>
                    <div className="card shadow mb-3">
                        <div className={`card-body ${styles.dashboardInfoCart}`}>
                            <div className="d-flex justify-content-between">
                                <div className="mt-2">
                                    <h2>
                                        <span className="badge bg-warning">
                                            <CountUp end={25} duration={5} />
                                        </span>
                                    </h2>
                                </div>
                                <div className='my-auto'>
                                    <h5 className="pt-1">Manage orders</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <ResponsiveContainer width={350} height={250}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSumCol;