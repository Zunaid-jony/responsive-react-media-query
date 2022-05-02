import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { Route, Navigate} from 'react-router-dom';


const PrivetRoute = ({children, ...rest}) => {
    const {user} = useAuth();
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