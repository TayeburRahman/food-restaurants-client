import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const TrendingCard = (props) => {
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/menuSingle/${_id}`)
    }
    const {makingPic1, title, price, _id} = props.singleData
    return (
        <div onClick={() => handleNavigate(_id)} className="card border-bottom border-0 mb-3" style={{cursor : "pointer"}}>
            <div className="row g-0">
                <div className="col-md-3">
                    <div className="d-flex align-items-center d-none d-md-block">
                        <span className="text-muted fw-bold">#</span>
                        <img style={{ width: 88, height: 88, borderRadius: 15, }} src={makingPic1} className=" p-2 img-fluid rounded-start" alt="..." />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-text">{price} Taka</h6>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center justify-content-evenly">
                        <FontAwesomeIcon style={{ fontSize: 28, color: "green" }} icon={faChartLine} />
                        <div className="mb-2">
                            <h3 className="m-0">365</h3>
                            <p className="text-muted m-0">Sales</p>
                            <p className="text-muted m-0">22%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;