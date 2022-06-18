import React from 'react';
import Toolbar from '../components/Toolbar/Toolbar'
import Footer from '../components/Footer/Footer'
import { Card, CardContent, Typography, makeStyles, useTheme, Box, TextField, Button } from '@material-ui/core'
import construction from '../assets/images/construction.svg'

const ComingSoon = () => {

    const theme = useTheme()

    const useStyles = makeStyles({
        content: {
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -30%)"
        },
        illustration: {
            height: 200
        },
        root:{
            color: theme.palette.primary.main
        }
    });

    const classes = useStyles()

    return (
        <div>
            <div>
                <Toolbar />
            </div>
            <div style={{position:"relative", height: 464}}>
                <div className={classes.content}>
                    <img src={construction} className={classes.illustration} />
                    <Box m={4} />
                    <Typography variant="body2" align='center' className={classes.root}>
                        Page en cours de construction...
                    </Typography>
                </div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div >
    );
};

export default ComingSoon;