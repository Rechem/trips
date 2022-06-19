import React from 'react';
import Landing from '../components/Landing'
import Description from '../components/Description';
import FeaturedLocations from '../components/FeaturedLocations';
import Footer from '../components/Footer/Footer'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useLocation } from 'react-router-dom';

const Home = props => {
    const { state } = useLocation()
    let loggedAs = state && state.loggedAs ? state.loggedAs : null
    return (
        <React.Fragment >
            <Landing loggedAs={loggedAs}/>
            <Description />
            <Footer />
        </React.Fragment>
    );
};

export default Home;