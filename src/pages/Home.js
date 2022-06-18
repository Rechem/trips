import React from 'react';
import Landing from '../components/Landing'
import Description from '../components/Description';
import FeaturedLocations from '../components/FeaturedLocations';
import Footer from '../components/Footer/Footer'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Home = () => {
    return (
        <React.Fragment >
                <Landing />
                <Description />
                {/* <FeaturedLocations/> */}
                <Footer />
        </React.Fragment>
    );
};

export default Home;