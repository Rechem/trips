import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import NavigatonItem from './NavigationItem/NavigatonItem';
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box/Box'
import { NavLink } from 'react-router-dom'
import rihla from '../../assets/images/rihla.svg'

const Toolbar = () => {

    let login = useSelector((state) => state.login)

    const theme = useTheme()

    const divStyle = {
        height: theme.spacing(6),
        backgroundColor: theme.palette.primary.light,
        boxShadow: "0 4px 4px -4px rgb(0, 0, 0, 30%)"
    }

    const navStyle = {
        margin: 'auto',
        maxWidth: '1024px',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const ulStyle = {
        height: '100%',
        listStyle: 'none',
        display: 'flex',
    }


    return (
        <div style={divStyle} >
            <nav style={navStyle}>
                <NavLink
                    to='/'>
                    <img src={rihla}
                        style={{ height: theme.spacing(4) }} />
                </NavLink>
                <div></div>
                <ul style={ulStyle}>
                    {/* <NavigatonItem link='/'>Accueil</NavigatonItem> */}
                    <NavigatonItem link='/browse'>Carte</NavigatonItem>
                    <NavigatonItem link='/comingSoon'>Circuits</NavigatonItem>
                    <NavigatonItem link='/comingSoon'>Gallerie</NavigatonItem>
                    <li style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '24px'
                    }}><strong>|</strong></li>
                    {login.loginStatus === 'disconnected' ?
                        <NavigatonItem link='/login'>Connexion</NavigatonItem>
                        : (<React.Fragment>
                            <NavigatonItem link='/comingSoon'>Mon compte</NavigatonItem>
                            <NavigatonItem link='/'>Déconnexion</NavigatonItem>
                        </React.Fragment>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Toolbar;