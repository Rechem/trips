import React from 'react';
import Toolbar from './Toolbar/Toolbar'
import image from '../assets/images/van.jpg'
import { Typography,Button, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    button: {
      textTransform: "none",
      marginTop: "8px"
    }
  });

const Landing = () => {

    const style = {
        height:"100vh",
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition : 'bottom -50px right 0px',
      }

    const heroTextStyle = {
        position : "absolute",
        top : '40%',
    }


    const classes = useStyles();

    return (
        <div style={style}>
            <Toolbar/>
            <div style={{maxWidth: '1256px', margin: 'auto'}}>
            <Box style={heroTextStyle}>
                <Typography variant="h1" color="textSecondary" >
                Discover<br/>New Worlds</Typography>
                <Button className={classes.button} variant="contained" color="primary"
                disableElevation disableFocusRipple>
                    <Typography variant='body1' align='center' >
                        Browse upcoming trips
                    </Typography>
                </Button>
            </Box>
            </div>
        </div>
    );
};

export default Landing;