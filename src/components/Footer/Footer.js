import React from 'react';
import { useTheme } from '@material-ui/core/styles'
import { Grid, Typography, Box, makeStyles } from '@material-ui/core';
import FooterItem from './FooterItem'

const useStyles = makeStyles({
    li: {
        textTransform: "none"
    }
});

const Footer = () => {
    const theme = useTheme()

    const style = {
        backgroundColor: "#808080",
        padding: '64px 0 64px 0',
        color: theme.palette.primary.light
    }

    const classes = useStyles();

    return (
        <div style={style}>
            <div style={{ width: 1024, margin: "auto" }}>
                <ul style={{ display: "inline-block", marginRight: theme.spacing(10), listStyleType: "none" }}>
                    <FooterItem>
                        A propos
                    </FooterItem>
                    <FooterItem>Contact</FooterItem>
                    <FooterItem>Termes et condition</FooterItem>
                </ul>
                <ul style={{ display: "inline-block", listStyleType: "none" }}>
                    <FooterItem>
                        Facebook
                    </FooterItem>
                    <FooterItem>Twitter</FooterItem>
                    <li><Typography >Instagram</Typography></li>
                </ul>
                <div style={{ display: "inline-block", float:"right"}}>
                    <Typography >Ecole nationale Superieur d'informatique<br />
                        +213 000 00 00 00<br />
                        example@exmaple.example
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Footer;