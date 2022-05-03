import React from 'react';
import useAuth from './../../../hooks/useAuth';
import {  Navigate} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivetRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation='border' variant='danger'></Spinner>
    }
     return user.email ? children: <Navigate to='/login'></Navigate>
     //(
        
    //     <Route
    //     {...rest}
    //     render = {({location}) => user.email ?  children : <Navigate
    //   to={{
    //       pathname: '/login',
    //       state:{ from: location}
    //   }}
    //     ></Navigate>
    //     }
        
    //     >
            
    //     </Route>
    // );
};

export default PrivetRoute;