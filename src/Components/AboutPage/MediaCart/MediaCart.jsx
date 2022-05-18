import React from 'react';
import singleBlogChef from '../../../utility/blogSingleChefs.webp';


const MediaCart = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 my-auto">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={singleBlogChef} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-danger">Jasmine Sikdar</h5>
                                    <p className="card-text">Eat whatever you want, and if someone tries to lecture you about your weight, eat them too!</p>
                                    <p className="card-text"><small className="text-muted">Manager</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-center mb-3">

                    <iframe width="300" height="185" src="https://www.youtube.com/embed/kRCH8kD1GD0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaCart;