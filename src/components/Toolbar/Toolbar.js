import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import NavigatonItem from './NavigationItem/NavigatonItem';
import Box from '@material-ui/core/Box/Box'

const Toolbar = () => {
    
    const theme = useTheme()

    const divStyle={
        height : theme.spacing(8),
        backgroundColor : theme.palette.primary.light,
        boxShadow: "0 4px 4px -4px rgb(0, 0, 0, 30%)"
    }
    
    const navStyle = {
        margin: 'auto',
        maxWidth: '1256px',
        height: '100%',
        display :'flex',
        justifyContent :'space-between',
        alignItems: 'center'
    }

    const ulStyle={
        height: '100%',
        listStyle : 'none',
        display: 'flex',
        // flexFlow: 'row nowrap',
        // justifyContent: 'flex-end'
    }

    

    return (
        <div style={divStyle} >
            <nav style={navStyle}>
                    <div></div>
                    <ul style={ulStyle}>
                        <NavigatonItem>Trips</NavigatonItem>
                        <NavigatonItem>Gallery</NavigatonItem>
                        <NavigatonItem>About</NavigatonItem>
                        <NavigatonItem>Contact</NavigatonItem>
                        <NavigatonItem>Login</NavigatonItem>
                        <NavigatonItem>Signup</NavigatonItem>
                    </ul>
            </nav>
        </div>
    );
};

export default Toolbar;