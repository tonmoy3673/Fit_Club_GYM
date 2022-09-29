
import React from 'react';

const About = () => {
    return (
        <>
            <div className="my-4" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-2">
                        {/* <img src={me} className="img-fluid rounded" style={{ maxHeight: '50px' }} alt="..." /> */}
                    </div>
                    <div className="col-md-10">
                        <div className="card-body p-0">
                            <h5 className="card-title m-0 text-primary fx-bolder">Mehedi Hasan Tonmoy</h5>
                            <p className="card-text"><small className="text-muted">Nikunja-2,Khilkhet,Dhaka</small></p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-light p-3 rounded d-flex justify-content-around align-items-center">
                <div>
                    <h4 className='d-inline'>67 <sub>kg</sub></h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4 className='d-inline'>5' 6"</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4 className='d-inline'>26 <sub>yrs</sub></h4>
                    <p>Age</p>
                </div>
            </div>

            
        </>
    );
};

export default About;