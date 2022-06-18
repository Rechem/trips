import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography, Button, FormControl, Box, TextField, Collapse } from '@material-ui/core';
import Autocomplete from "@material-ui/lab/Autocomplete";
import FilterMenu from './FilterMenu';
import filterIcon from '../assets/icons/setting.svg'
import { useSelector, useDispatch } from 'react-redux'
import { addPlace } from '../store/places/reducer';
import GMap from './google_map'
import produce from 'immer';
import maps from '../assets/maps'

const SearchMap = () => {
    let places = useSelector((state) => state.places)
    let login = useSelector((state) => state.login)
    const dispatch = useDispatch()

    const [filterIsOpen, togglefilter] = React.useState(false);
    const [selected, setSelected] = React.useState(null);
    const [checkBoxState, setCheckBoxState] = React.useState({
        category: {
            cat1: false,
            cat2: false,
            cat3: false,
            cat4: false,
            cat5: false,
            cat6: false,
            cat7: false,
            cat8: false,
        }, theme: {
            theme1: false,
            theme2: false,
            theme3: false,
            theme4: false,
            theme5: false,
        }
    });

    const handleCheckBoxChange = React.useCallback((event) => {
        setCheckBoxState(
            produce(draft => { draft[event.target.name][event.target.value] = event.target.checked })
        );
    }, []);

    const handleClickFilter = (_) => {
        togglefilter(!filterIsOpen)
    };

    const [zone, setZone] = React.useState('algiers');

    const handleChange = (event) => {
        setSelected(null)
        setZone(event.target.value);
    };

    places = places.filter(place => {
        if (zone !== 'all' && zone === place.zone) {
            return Object.keys(checkBoxState).every(key => {
                if (Object.values(checkBoxState[key]).some(value => value)) {
                    return checkBoxState[key][place[key]]
                }
                else {
                    return true
                }
            })
        } else
            return true

    })
    return (
        <div style={{ position: "relative" }} >
            <div
                style={{
                    width: 800,
                    transform: 'translate(-50%, 0)',
                    padding: 8,
                    borderRadius: 8,
                    position: "absolute",
                    zIndex: 10,
                    top: '24px',
                    left: "50%",
                    backgroundColor: "white"
                }}>
                <div style={{display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',}}>
                    <div style={{ display: "flex", alignItems: 'flex-end', marginRight: 8 }}>
                        {/* <Typography style={{ marginRight: 16, display: 'inline-block', marginBottom: 8 }}>Zone</Typography> */}
                        <FormControl style={{ width: 136 }}>
                            <Select
                                margin='dense'
                                variant="outlined"
                                value={zone}
                                onChange={handleChange}>
                                {/* prbly gon need to map these  */}
                                <MenuItem value='all'>Tout</MenuItem>
                                <MenuItem value='algiers'>Alger</MenuItem>
                                <MenuItem value='annaba'>Annaba</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Autocomplete
                        style={{ display: 'inline-block', }}
                        fullWidth
                        onChange={(_, value) => {
                            if (value)
                                setSelected(value)
                        }}
                        options={places.filter(place => place.zone === zone)}
                        getOptionLabel={(place) => place.nom ? place.nom : ""}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder='Rechercher un lieu...'
                                margin="none"
                                size='small'
                                variant="outlined" />
                        )} />
                    <div style={{ marginLeft: 8 }}>
                        <Button variant='outlined' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickFilter}
                            style={{ height: 40, textTransform: "none", width: 136 }}>
                            <img src={filterIcon} />
                            <Box mr={2} />
                            <Typography>Filtrer</Typography>
                        </Button>
                    </div>
                </div>
                <Collapse in={filterIsOpen} display="block">
                    <FilterMenu handleChange={handleCheckBoxChange} state={checkBoxState} />
                </Collapse>
            </div>
            <GMap places={places} zone={maps[zone]}
                onAdd={(place) => dispatch(addPlace(place))}
                isAdmin={login.loginStatus === 'admin'}
                selected={selected} onSelect={setSelected} />
        </div>
    );
};

export default SearchMap;