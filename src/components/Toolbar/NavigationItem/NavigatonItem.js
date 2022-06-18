import { Typography, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useTheme } from '@material-ui/core/styles'
import { logout } from '../../../store/login/reducer'

const useStyles = makeStyles({
    button: {
        textTransform: "none"
    }
});

const NavigatonItem = (props) => {
    const dispatch = useDispatch()

    const theme = useTheme()

    const classes = useStyles();
    let activeStyle = {
        color: theme.palette.text.primary,
        textDecoration: "none"
    };

    return (
        <li
            style={{
                height: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: '80px',
                marginLeft: '24px',
                textDecoration: "none"
            }}>
            <NavLink
                onClick={props.children == 'Déconnexion' ? ()=>dispatch(logout()): null}
                to={props.link}
                style={activeStyle}
            >
                {props.children == 'Connexion' ?
                    <Button className={classes.button} variant="contained" color="primary"
                        disableElevation disableFocusRipple>
                        <Typography align='center'>
                            {props.children}
                        </Typography>
                    </Button> :
                    <Typography align='center'>
                        {props.children}
                    </Typography>}
            </NavLink>
        </li>
    );
};

export default NavigatonItem;