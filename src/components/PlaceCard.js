import React from 'react';
import { Typography, Box, Paper, CardContent, IconButton } from "@material-ui/core";
import closeIcon from '../assets/icons/cross.svg'
import ScrollBar from 'react-perfect-scrollbar';

const cardStyle = { height: "100%", width: 400, position: "absolute", zIndex: 10, overflow: 'hidden' }

const PlaceCard = props => {
    return (
        <Paper style={cardStyle} variant="outlined">
            <ScrollBar>
            <IconButton
                style={{ position: 'absolute', right: "8px" }}
                onClick={props.onClose}>
                <img src={closeIcon} height={16} style={{ margin: 8 }} />
            </IconButton>
                    <img src={props.image} style={{height:"250px",width:"100%", objectFit :"cover"}}/>
                <div style={{ padding: 16 }}>
                    <Typography variant="h2" >{props.nom}</Typography>
                    <Box m={4} />
                    <Typography variant="subtitle2" color="primary">Theme</Typography>
                    <Typography >{props.theme}</Typography>
                    <Box m={1} />
                    <Typography variant="subtitle2" color="primary">Categorie</Typography>
                    <Typography >{props.category}</Typography>
                    <Box m={2} />
                    <Typography variant="subtitle2" color="primary">Description</Typography>
                    <Typography align="justify">{props.description}</Typography>
                    <Box m={2} />
                    <Typography variant="subtitle2" color="primary">Horraires d'ouverture</Typography>
                    <Typography >{props.time}</Typography>
                    <Box m={1} />
                    <Box m={1} />
                    <Typography variant="subtitle2" color="primary">Moyens de transport</Typography>
                    <Typography >{props.means}</Typography>
                    <Box m={1} />
                    <Typography variant="subtitle2" color="primary">Avis des utilisateurs</Typography>
                    <Typography>{props.rating >= 0 ? "⭐".repeat(props.rating) : <em>Pas d'avis...</em>}</Typography>
                </div>
            </ScrollBar>
        </Paper>
    );
};

export default PlaceCard;