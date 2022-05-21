import React from 'react';
import {useTheme} from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core';
import lasVegas from '../assets/images/lasVegas.jpg';
import desert from '../assets/images/desert.jpg';
import venise from '../assets/images/venise.jpg';
import timeSquare from '../assets/images/timeSquare.jpg'

const FeaturedLocations = (props) => {

    const theme = useTheme()

    const style = {
        backgroundColor : theme.palette.primary.light,
        padding : '72px 0 72px 0',
    }

    return (
        <section>
            <div style={style}>
                <Typography variant="h2" color="textPrimary" align="center">Featured Locations</Typography>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <frame>
                                <img/>
                            </frame>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    );
};

export default FeaturedLocations;