import React, { useEffect, useState } from 'react';
import About from '../About/About';

import AddBreak from '../AddBreak/AddBreak';
import PackageDetails from '../PackageDetails/PackageDetails';

const Aside = ({list}) => {

    const [breakTime, setBreakTime] = useState(0);
    const [showToast, setShowToast] = useState(false);

    if (showToast) {
        setTimeout(() => {
            setShowToast(false);
        }, 2000)
    }

    useEffect(() => {
        const storedData = localStorage.getItem('breakTime');
        if (storedData) {
            setBreakTime(parseInt(storedData));
        }
    }, [])

    return (
        
        <div className='col-lg-3 col-md-6 col-sm-12 bg-light side'>
            <About></About>
            <AddBreak breakTime={breakTime} setBreakTime={setBreakTime}></AddBreak>
           <PackageDetails list={list} breakTime={breakTime}></PackageDetails>
           <h3 className={showToast ? 'bg-primary p-3' : 'd-none'} style={{ zIndex: '90', position: 'fixed', top: '60% ', right: '40px', }}>Congratulations, You have done the workout!</h3>

<button className="btn btn-primary w-100 py-2 mx-1 my-5" id="liveToastBtn" onClick={() => setShowToast(true)}>Activity Completed</button>

 </div> 
    
    );
};

export default Aside;