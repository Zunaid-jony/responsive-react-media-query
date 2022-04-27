import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    // App js thake use perams ana hoise ** serviceId
    const {serviceId}= useParams();
    return (
        <div>
            <h1>thais is booking {serviceId}</h1>
        </div>
    );
};

export default Booking;