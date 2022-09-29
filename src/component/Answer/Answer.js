import React from 'react';

const Questions = () => {
    return (
        <div className='container fluid'>
            <div>
            <h5 className='text-primary'> <strong>Question-1:</strong> How does react works ?</h5>
            <p><strong>Answer:</strong> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h5 className='text-primary'><strong>Question-2:</strong>Difference Between Props and State</h5>
                <p><strong>Answer :</strong>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
            <h5 className='text-primary'> <strong>Question-3:</strong> what are the use cases of useEffect except loading data from api ?</h5>
            <p><strong>

            </strong>
                1. Add an event listener for a button.<br/>
                2. Data fetching from API when component mounts.<br/>
                3. Perform an action when state or props change.<br/>
                4. Clean up event listeners when the component unmounts.
            </p>
            </div>
        </div>
)};

export default Questions;