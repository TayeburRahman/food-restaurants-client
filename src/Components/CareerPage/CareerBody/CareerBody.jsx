import React from 'react';

const CareerBody = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p>Feel free to contact us for any problem.</p>
                    <h4>DO YOU HAVE QUESTIONS?</h4>
                    <p>Hi there welcome to our restaurant. We are pleased to inform you that our restaurant is one of the finest restaurant in this city.Our inner beautiful environment sure you love it. Otherwise you have any query please let us to know and drop a message about that.Make sure we'll notify you as soon as possible.</p>
                </div>

                <div className="col-md-6 my-auto">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Do You Have Any Certification Course?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Applicant if you have any professional degree or any institute certification it is easy for you to be a career part of restaurant employee.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    If You A Chef?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">A chef is always the master key of any restaurant. If you a chef must be known some foreign cooking style menus.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    How many years of experience are required?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">A hand on experience is most valuable. If you have experience welcome to our cooking team as need as vacancy.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerBody;