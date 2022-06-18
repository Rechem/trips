import {
    Grid, TextField, Typography, Box, Select,
    MenuItem, FormControl, makeStyles, Button,
} from '@material-ui/core';
import React, { useState, useRef } from 'react';
import addPicture from '../assets/images/addpicture.svg'

const initialValues = {
    nom: "",
    description: "",
    category: "",
    theme: "",
    means: "",
    time: "",
    zone: "",
}

const Form = (props) => {
    const inputFile = useRef(null)

    const useStyles = makeStyles(theme => ({
        root: {
            '& .MuiFormControl-root': {
                width: '100%',
                marginBottom: theme.spacing(1),
            },
            width: 560,
            margin: 'auto'
        },
    }));

    const classes = useStyles()

    const [values, setValues] = useState(initialValues)

    const onChangeHandler = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const [selectedFile, setSelectedFile] = useState(null);

    const fileUploadHandler = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]))
    }

    const onClickUpload = () => {
        inputFile.current.click();
    };

    const submitForm = () => {
        props.onAdd({
            ...values,
            rating: -1,
            image: selectedFile,
            coordinates: {
                lat: props.coordinates.lat,
                lng: props.coordinates.lng,
            },
            zone: props.coordinates.zone
        })
    }

    return (
        <React.Fragment>
            <form className={classes.root} onSubmit={submitForm}>
                {/* <ScrollBar> */}
                <Box m={4} />
                <Typography variant='h1'>Ajouter un lieu</Typography>
                <Box m={8} />
                <Typography display='inline'>Nom</Typography>
                <Box m={1} />
                <TextField variant='outlined' placeholder='Nom' size='medium'
                    name='nom' value={values.nom} onChange={onChangeHandler} />
                <Box m={1} />
                <Typography display='inline'>Description</Typography>
                <Box m={1} />
                <TextField variant='outlined' size='medium' name='description'
                    multiline rows={3} placeholder='Description'
                    value={values.description} onChange={onChangeHandler} />
                <Box m={1} />
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Box>
                            <FormControl variant="outlined" fullWidth>
                                <Typography display='block'>Catégorie</Typography>
                                <Box m={0.5} />
                                <Select placeholder="Choisir categorie"
                                    name="category" value={values.category} onChange={onChangeHandler}>
                                    <MenuItem value='Monument'>Monument</MenuItem>
                                    <MenuItem value='Eglise'>Eglise</MenuItem>
                                    <MenuItem value='Jardin'>Jardin</MenuItem>
                                    <MenuItem value='Musée'>Musée</MenuItem>
                                    <MenuItem value='Cinéma'>Cinéma</MenuItem>
                                    <MenuItem value='Mosqué'>Mosqué</MenuItem>
                                    <MenuItem value='Plage'>Plage</MenuItem>
                                    <MenuItem value='Parc'>Parc</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <FormControl variant="outlined" fullWidth>
                                <Typography display='block'>Thème</Typography>
                                <Box m={0.5} />
                                <Select size='small'
                                    name="theme" value={values.theme} onChange={onChangeHandler}>
                                    <MenuItem value='Historique'>Historique</MenuItem>
                                    <MenuItem value='Spirituel'>Spirituel</MenuItem>
                                    <MenuItem value='Culturel'>Culturel</MenuItem>
                                    <MenuItem value='Divertissement'>Divertissement</MenuItem>
                                    <MenuItem value='Nature'>Nature</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
                <Box m={1} />
                <Typography display='inline'>Moyens de transport</Typography>
                <Box m={1} />
                <TextField variant='outlined' placeholder='Moyens de transport' size='medium'
                    multiline rows={2} name='means'
                    value={values.means} onChange={onChangeHandler} />
                <Box m={1} />
                <Typography display='inline'>Horraires d'ouverture</Typography>
                <Box m={1} />
                <TextField variant='outlined' placeholder="Horraires d'ouverture" size='medium'
                    multiline rows={3} name='time'
                    value={values.time} onChange={onChangeHandler} />
                <Box m={2} />
                <Typography display='inline'>Photo</Typography>
                <Box m={1} />
                {selectedFile ? <img src={selectedFile} style={{ objectFit: "cover", width: "100%" }} /> : null}
                {selectedFile ? <Button onClick={() => { onClickUpload() }}
                    style={{ textTransform: "none" }}>
                    <Typography component="span" color="primary">
                        Remplacer l'image</Typography>
                    <input type="file" onChange={fileUploadHandler}
                        style={{ display: 'none' }}
                        id='file' ref={inputFile} />
                </Button> : <div
                    style={{
                        borderStyle: "dashed", height: 200,
                        borderColor: "#aaa", display: "flex", cursor: "pointer"
                    }}
                    onClick={onClickUpload}
                >
                    <input type="file" onChange={fileUploadHandler}
                        style={{ display: 'none' }}
                        id='file' ref={inputFile} />
                    <img src={addPicture} style={{
                        height: 60,
                        margin: "auto"
                    }} />
                </div>}
                <Box m={2} />
                <Button variant="contained" color="primary"
                    disableElevation disableFocusRipple fullWidth size='large'
                    style={{ height: 56 }}
                    onClick={submitForm}>Ajouter</Button>
                <Box m={8} />
                {/* </ScrollBar> */}
            </form>
        </React.Fragment>
    );
};

export default Form;