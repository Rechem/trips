import React from 'react';
import Landing from '../components/Landing'
import Description from '../components/Description';
import FeaturedLocations from '../components/FeaturedLocations';

const Home = () => {
    return (
        <React.Fragment>
            <Landing/>
            <Description/>
            <FeaturedLocations/>
        </React.Fragment>
    );
};

export default Home;