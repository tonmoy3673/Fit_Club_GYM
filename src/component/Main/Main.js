import React from 'react';
import Questions from '../Answer/Answer';
import logo from '../image/logo.jpg'
import Packages from '../Packages/Packages';
import './Main.css'

const Main = ({addToList}) => {
    return (
        <div className='col-lg-9 col-sm-12 col-md-6 py-4 bg-white'>
                <nav className='d-flex align-items-center container'>
                    <img src={logo} alt='' className='logo'></img>
                    <h3 className='ms-4 fw-bolder text-primary brand'>Fitness Club <span>GYM</span></h3>
                    
                </nav>
                <h2 className='h4 my-4'>Select Today's Exercise</h2>
                
                <Packages addToList={addToList}></Packages>
                <h1 className='h4 my-5'>Questions and Answers</h1>
                <Questions></Questions>
            </div>
    );
};

export default Main;