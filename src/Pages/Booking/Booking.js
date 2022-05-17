import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    // App js thake use perams ana hoise ** serviceId
    const {serviceId}= useParams();
    const [service, setService] = useState({})

    useEffect(()=>{
        fetch( `http://localhost:5000/services/${serviceId}`)
        .then(response => response.json())
        .then(data => setService(data));
    },[])
    return (
        <div>
            <h2>Details of: {service.Name}</h2>
            <h1>thais is booking {serviceId}</h1>
            <img src={service.img} ></img>
        </div>
    );
};

export default Booking;