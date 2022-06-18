import React from 'react'
import { Typography, makeStyles, useTheme, FormGroup, FormControlLabel, Box, Checkbox, Menu } from '@material-ui/core';

const FilterMenu = (props) => {

    const styles = {
        // display: 'block',
        // borderRadius: '10px',
        margin: '8px 0',
        padding: '16px',
        // border: 'solid 1px rgba(0, 0, 0, 0.23)'
    }

    const state = props.state

    return (
        <div style={styles}>
            <Typography variant='subtitle1'>
                Catégorie
            </Typography>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.cat1Checked}
                            onChange={props.handleChange}
                            value="Monument"
                            name="category"
                            color="primary"
                        />
                    }
                    label="Monument"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.cat2Checked}
                            onChange={props.handleChange}
                            value="Eglise"
                            name="category"
                            color="primary"
                        />
                    }
                    label="Eglise"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.cat3Checked}
                            onChange={props.handleChange}
                            value="Jardin"
                            name="category"
                            color="primary"
                        />
                    }
                    label="Jardin"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.cat4Checked}
                            onChange={props.handleChange}
                            value="Musée"
                            name="category"
                            color="primary"
                        />
                    }
                    label="Musée"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.cat4Checked}
                            onChange={props.handleChange}
                            value="Cinéma"
                            name="category"
                            color="primary"
                        />
                    }
                    label="Cinéma"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.cat4Checked}
                            onChange={props.handleChange}
                            value="Mosqué"
                            name="category"
                            color="primary"
                        />
                    }
                    label="Mosqué"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.cat4Checked}
                            onChange={props.handleChange}
                            value="Plage"
                            name="category"
                            color="primary"
                        />
                    }
                    label="Plage"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.cat4Checked}
                            onChange={props.handleChange}
                            value="Parc"
                            name="category"
                            color="primary"
                        />
                    }
                    label="Parc"
                />
            </FormGroup>
            <Box m={1}>
            </Box>
            <Typography variant='subtitle1'>
                Thème
            </Typography>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                        checked={state.theme1Checked}
                            onChange={props.handleChange}
                            value="Historique"
                            name="theme"
                            color="primary"
                        />
                    }
                    label="Historique"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.theme2Checked}
                            onChange={props.handleChange}
                            value="Spirituel"
                            name="theme"
                            color="primary"
                        />
                    }
                    label="Spirituel"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.theme3Checked}
                            onChange={props.handleChange}
                            value="Culturel"
                            name="theme"
                            color="primary"
                        />
                    }
                    label="Culturel"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.theme4Checked}
                            onChange={props.handleChange}
                            value="Divertissement"
                            name="theme"
                            color="primary"
                        />
                    }
                    label="Divertissement"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.theme5Checked}
                            onChange={props.handleChange}
                            value="Nature"
                            name="theme"
                            color="primary"
                        />
                    }
                    label="Nature"
                />
            </FormGroup>
        </div>
    );
};

export default FilterMenu;