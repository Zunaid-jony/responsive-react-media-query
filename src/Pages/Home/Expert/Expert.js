import React from 'react';
import './Expert.css'

const Expert = ({expert}) => {
    const {img,name,expertize} = expert;
    return (
        <div className='col-lg-4 col-md-6 col-sm-6 col-12 box-imgs' >
            <img src={img}></img>
            <h3>{name}</h3>
            <h5 className='text-danger'>{expertize}</h5>
        </div>
    );
};

export default Expert;