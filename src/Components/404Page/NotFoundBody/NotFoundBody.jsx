import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundBody.module.css'
const NotFoundBody = () => {
    const navigate = useNavigate()
    return (
        <div className="d-flex justify-content-center">
            <div className={styles.foundBodyTexts}>
                <h2>Opps!</h2>
                <h5>Page cannot be found! We can’t seem to find the page you’re looking for make sure that you have typed the correct URL</h5>
                <div className="text-center">
                    <button style={{fontWeight : 600}} onClick={()=>navigate('/')} className="btn btn-warning">GO TO HOME</button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundBody;