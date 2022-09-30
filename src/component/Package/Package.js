import React from 'react';

const Package = ({pack,addToList}) => {
    const {picture,about,name,age,time}=pack;

    return (
        <div>
             <div>
            <div className="col">
                <div className="card">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title text-primary ">{name}</h5>
                        <p className="card-text">{about}</p>
                        <h6>Age: {age}</h6>
                        <h6>Time Required: {time}</h6>
                        <button className='btn btn-primary w-100' onClick={() => addToList(time)}>Add to List</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Package;