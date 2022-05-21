import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Typography, Box, Grid } from '@material-ui/core';
import Divider from './Divider/Divider'
import vanIcon from '../assets/images/vanIcon.svg'
import suitecaseIcon from '../assets/images/suitecaseIcon.svg'
import globeIcon from '../assets/images/globeIcon.svg'

const Description = (props) => {

    const theme = useTheme()

    const style = {
        padding : '72px 0 72px 0' ,
        // maxHeight : "100vh"
    }
    return (
            <div style = {style}>
                <Typography variant="h2" color="textPrimary" align="center">Lorem ipsum dolor sit amet</Typography>
                <Box m={5}/>
                <Divider color={theme.palette.primary.main}/>
                <Box m={5}/>
                <Typography align="center" variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud </Typography>
                <Box m={12}/>
                <div style={{width:"832px", margin:"0 auto"}}>
                    <Grid container spacing={10}>
                        <Grid item xs={4}>
                            <img src={suitecaseIcon}/>
                            <Box m={4}/>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={vanIcon}/>
                            <Box m={4}/>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={globeIcon}/>
                            <Box m={4}/>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
    );
};

export default Description;