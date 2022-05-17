import React,{useState, useEffect} from 'react';
import './ManagesServices.css'

const ManagesServices = () => {
    const [services, setServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(response => response.json())
        .then(data => setServices(data))
    },[])
    // DELETE OPTIONS
    const hendleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('deleted')
                const remaining = services.filter( service =>service._id !== id);
                setServices(remaining);
            }
        })

    }
    return (
        <div>
            <h1>ManagesServices pages</h1>
            {
                services.map( service => <div> key= {service._id}
                
                <h2> {service.Name}</h2>
                <button onClick={() => hendleDelete(service._id)}> DELETE</button>
                </div>)
        
            }
        </div>
    );
};

export default ManagesServices;