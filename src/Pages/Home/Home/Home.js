import React from 'react';
import NotFound from '../../NotFound/NotFound';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <NotFound></NotFound>
        </div>
    );
};

export default Home;