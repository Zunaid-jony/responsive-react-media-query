import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'

const Experts = () => {
    const [expert ,setExpert] = useState([])
    useEffect(()=>{
        fetch('experts.json')
        .then(response => response.json())
        .then(data => setExpert(data))
    },[])
    return (
        <div className='container '>
            <h2 className='text-primary mt-5 '>Our Experts</h2>
            <div className='row our-experts'>
            {expert.map(expert =><Expert
            key={expert.id}
            expert={expert}
            ></Expert>)}

            </div>
           
        </div>
    );
};

export default Experts;