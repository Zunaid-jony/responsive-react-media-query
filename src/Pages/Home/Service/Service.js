import React from 'react';
import './Service.css'


const Service = ({service}) => {
    const {name, description, img, price} = service;
    return (
        <div className='service '>
             <img src={img}></img>
             <h1>{name}</h1>
            <h5>price: {price}</h5>
            <p> {description}</p>
            
        </div>
    );
};

export default Service;