import React from 'react';
import Toolbar from './Toolbar/Toolbar'
import image from '../assets/images/van.jpg'
import { Typography, Button, Box, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    button: {
        textTransform: "none",
        marginTop: "8px"
    }
});

const Landing = props => {

    const style = {
        height: "100vh",
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom -50px right 0px',
    }

    const heroTextStyle = {
        position: "absolute",
        top: '40%',
    }

    const classes = useStyles();
    const [openSnackbar, setOpenSnackbar] = React.useState(props.loggedAs || false);

    return (
        <div style={style}>
            <Toolbar />
            <div style={{ maxWidth: 1024, margin: "auto" }}>
                <Snackbar
                    open={openSnackbar}
                    onClose={() => setOpenSnackbar(false)}
                    autoHideDuration={4000}
                ><Alert icon={false} color="info">
                        Connecté en tant que {props.loggedAs}
                    </Alert></Snackbar>
                <Box style={heroTextStyle}>
                    <Typography variant="h1" color="textSecondary" >
                        Redécouvrez<br />l'Algérie</Typography>
                    <NavLink to='/browse' style={{ textDecoration: "none" }}>
                        <Button className={classes.button} variant="contained" color="primary"
                            disableElevation disableFocusRipple>
                            <Typography variant='body2' align='center' >
                                Montrez-moi !
                            </Typography>
                        </Button>
                    </NavLink>
                </Box>
            </div>
        </div>
    );
};

function areEqual(prevProps, nextProps) {
    return prevProps.loggedAs === nextProps.loggedAs
}

export default React.memo(Landing, areEqual);