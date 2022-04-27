import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({service}) => {
    const {id, name, description, img, price} = service;
    return (
        <div className='service  pb-3'>
             <img src={img}></img>
             <h1>{name}</h1>
            <h5>price: {price}</h5>
            <p> {description}</p>
           <Link to={`/booking/${id}`}> <button className='btn btn-warning'>Book {name.toLowerCase()}</button></Link>
            
        </div>
    );
};

export default Service;