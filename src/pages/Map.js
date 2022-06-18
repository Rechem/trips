import React from 'react';
import Toolbar from '../components/Toolbar/Toolbar'
import Footer from '../components/Footer/Footer'
import SearchMap from '../components/SearchMap'
import ScrollBar from 'react-perfect-scrollbar';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Map = () => {
    const login = useSelector(state => state.login)
    let redirect = null;
    if (login.loginStatus === 'disconnected') {
        redirect = <Navigate to="/login" />
    }
    return (
        <div style={{overflow:"hidden", maxHeight:"100vh"}}>
            <ScrollBar style={{overflow:"hidden"}}>
                {redirect}
                <Toolbar />
                <SearchMap />
            </ScrollBar>
        </div>
    );
};

export default Map;