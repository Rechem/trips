import { Typography,Box, Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios'

const useStyles = makeStyles({
    button: {
      textTransform: "none"
    }
  });

const NavigatonItem = (props) => {

      const classes = useStyles();

    //   const getTrips = ()=>{
    //     axios.get('localhost:6942',{"username" : "zebi", "passwo" : 's'})
    //     .then((data)=>{
    //         setTrips(data.body)
    //     }).catch(()=>{
            
    //     })
    //   }

    return (
        <li
        style={{
            height: "100%",
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width : '80px',
            marginLeft : '16px'}}>
                {props.children == 'Signup' ? 
                <Button className={classes.button} variant="contained" color="primary"
                disableElevation disableFocusRipple>
                    <Typography variant='body2' align='center'>
                        {props.children}
                    </Typography>
                </Button> : 
            <Typography variant='body2' align='center'>
                {props.children}
            </Typography>}
        </li>
    );
};

export default NavigatonItem;