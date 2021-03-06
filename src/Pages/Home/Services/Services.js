import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setServices(data)
        
        })
    },[])
    return (
        <div id='services'>
            <h2 className='text-primary mt-5'> Our Services </h2>
            <div className='service-container container'>
            
            {
                services.map( service => <Service
                    key={services.id}
                    service ={service}
                    ></Service>)
            }
            
        </div>
        </div>
    );
};

export default Services;