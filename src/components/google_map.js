import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import React, { useMemo } from "react"
import mapStyles from "../assets/map_style"
import PlaceCard from "./PlaceCard";
import { Button, Typography, Box, Dialog, IconButton, Snackbar, Grow } from "@material-ui/core";
import closeIcon from '../assets/icons/cross.svg'
import Form from "./Form";
import Alert from '@material-ui/lab/Alert';
import Popup from "./Popup";

const mapContainerStyle = {
    height: "100%",
    width: "100vw",
    zIndex: 1,
};

const styles = { width: '100%', height: "calc(100vh - 48px)", }

const GMap = (props) => {

    const options = useMemo(() => ({
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        restriction: props.zone.restrictions,
        zoom: props.zone.zoom,
        minZoom: props.zone.minZoom
    }), [props.zone.restrictions, props.zone.zoom, props.zone.minZoom]);
    const center = useMemo(() => ({
        lat: props.zone.center.lat,
        lng: props.zone.center.lng,
    }), [props.zone.center.lat, props.zone.center.lng])

    const [dialogIsOpen, setDialog] = React.useState(false);

    const handleClickDialogOpen = (_) => {
        setDialog(true)
    };

    const handleClickDialogClose = (_) => {
        setDialog(false)
    };

    const onMapClick = React.useCallback((e) => {
        if (props.isAdmin) {
            setAdding(
                {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                },
            )
        }
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    const [adding, setAdding] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [hoverMenu, setHoverMenu] = React.useState(null);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let selected = props.selected || { nom: "null" }
    selected = React.useMemo(() => {
        return { ...selected }
    }, [selected.nom])
    
    if (loadError) return (<div style={{ margin: 'auto' }}>"Error"</div>);
    if (!isLoaded) return (<div style={{ margin: 'auto' }}>"Loading..."</div>);

    return (
        <div style={styles}>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Lieu ajouté avec succes
                </Alert>
            </Snackbar>
            {selected.nom !== "null" ?
                <div style={{ zindex: 20 }}>
                    <PlaceCard onClose={() => props.onSelect(null)}
                        nom={selected.nom} description={selected.description}
                        time={selected.time} theme={selected.theme}
                        category={selected.category} means={selected.means}
                        rating={selected.rating} image={selected.image} />
                </div>
                : null}
            <Dialog fullScreen open={dialogIsOpen} onClose={handleClickDialogClose}>
                <IconButton
                    style={{ position: 'absolute', right: "8px" }}
                    onClick={handleClickDialogClose}>
                    <img src={closeIcon} height={24} />

                </IconButton>
                <Form
                    onAdd={(place) => {
                        props.onAdd(place);
                        setAdding(null);
                        handleClickDialogClose();
                        handleClick();
                    }}
                    coordinates={
                        dialogIsOpen && adding ?
                            {
                                zone: props.zone.name,
                                lat: adding.lat,
                                lng: adding.lng,
                            }
                            : null} />
            </Dialog>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={2}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}>

                {props.places.map((place) =>
                (<Marker
                    key={`${place.coordinates.lat}-${place.coordinates.lng}`}
                    onMouseOver={() => setHoverMenu(place)}
                    onMouseOut={() => setHoverMenu(null)}
                    position={{ lat: place.coordinates.lat, lng: place.coordinates.lng }}
                    onClick={() => {
                        props.onSelect(place);
                        mapRef.current.panTo(place.coordinates)
                    }}
                    icon={{
                        url: '/assets/icons/location.svg',
                        scaledSize: selected && selected.nom === place.nom ?
                            new window.google.maps.Size(70, 70) : null
                    }} >
                </Marker>)
                )}
                {
                    hoverMenu ?
                        <Popup
                            anchorPosition={{
                                lat: hoverMenu.coordinates.lat,
                                lng: hoverMenu.coordinates.lng
                            }}
                            markerPixelOffset={{ x: 0, y: -32 }}>
                            <div>
                                <img src={hoverMenu.image} style={{
                                    width: "100%", display: "block",
                                    margin: "auto", height: 100, objectFit: "cover", borderRadius: 8
                                }} />
                                <Box m={1} />
                                <Typography variant="subtitle2">
                                    {hoverMenu.nom}
                                </Typography>
                            </div>
                        </Popup>

                        : null
                }
                {adding ?
                    <React.Fragment>
                        <InfoWindow
                            options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
                            position={{ lat: adding.lat, lng: adding.lng }}
                            onCloseClick={() => setAdding(null)}
                        >
                            <div style={{ marginLeft: 6 }}>
                                <Box m={1} />
                                <Typography variant="subtitle1">
                                    Ajouter un lieu ?
                                </Typography>
                                <Box m={1} />
                                <Button
                                    fullWidth size="small"
                                    variant="contained" color="primary"
                                    disableElevation disableFocusRipple
                                    onClick={handleClickDialogOpen}>Ajouter</Button>
                            </div>
                        </InfoWindow>

                        <Marker
                            position={{ lat: adding.lat, lng: adding.lng }}
                            icon={{
                                url: '/assets/icons/add_location.svg',
                            }}
                        />
                    </React.Fragment> : null}
            </GoogleMap>
        </div >
    );
}

export default GMap;  