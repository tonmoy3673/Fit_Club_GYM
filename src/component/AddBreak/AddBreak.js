import React from 'react';
import Break from '../Break/Break';

const AddBreak = ({ breakTime, setBreakTime }) => {
    const times = [10, 20, 30, 40, 50];
    return (
        <div>
            <h3 className='h4 my-4 text-primary text-center'>Add a Break</h3>
            <div className="bg-light p-3 rounded d-flex justify-content-around align-items-center my-3">
                <div>
                    {
                        times.map((time, index) => <Break time={time} key={index} breakTime={breakTime} setBreakTime={setBreakTime}></Break>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AddBreak;