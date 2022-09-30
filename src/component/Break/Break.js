import React from 'react';

const Break = ({ time, breakTime, setBreakTime }) => {
    const setToLS = b => {
        localStorage.setItem('breakTime', b);
    }
    return (
        <button className={time === breakTime ? 'rounded-pill bg-danger text-white p-2 mx-1' : 'rounded-pill bg-white p-2 mx-1'} onClick={() => { setBreakTime(time); setToLS(time) }}>{time}s</button>
    );
};

export default Break;