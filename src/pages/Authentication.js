import React, { useState } from 'react';
import Toolbar from '../components/Toolbar/Toolbar'
import Footer from '../components/Footer/Footer'
import { Card, CardContent, Typography, makeStyles, useTheme, Box, TextField, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin, touristLogin } from '../store/login/reducer';
import { Navigate } from 'react-router-dom';
import image from '../assets/images/venise.jpg'

const initialValues = {
    username: "",
    password: "",
}

const Authentication = () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.login)

    const [values, setValues] = useState(initialValues)

    const onChangeHandler = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        if (values.username === 'employe' && values.password === 'rihla') {
            dispatch(adminLogin())
        } else if (values.username === 'touriste' && values.password === 'rihla') {
            dispatch(touristLogin())
        }
    }

    const theme = useTheme()

    const useStyles = makeStyles({
        root: {
            margin: "auto",
            padding: "32px",
            //   maxWidth :"432px",
            backgroundColor: `${theme.palette.primary.light}`,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        },
        background: {
            position: "relative",
            height: 600, 
            overflow:"hidden",
            "&:before": {
                height: 600, 
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom -50px right 0px',
                WebkitFilter: "blur(5px)", zIndex: -1,
                content: `""`,
                position: "absolute",
                left: 0,
                right: 0,
                transform: "scale(1.2)",
            },
            
        },
        field: {
            width: "328px",
            color: theme.palette.text.primary,
            backgroundColor: '#fff',
            //label color (i didnt even need it lol but its good to keep)
            // "& .MuiFormLabel-root" : {
            //     color: theme.palette.text.primary
            // },
        },
        button: {
            textTransform: "none",
        },
    });

    const classes = useStyles()

    let redirect = null;
    if (login.loginStatus !== 'disconnected') {
        redirect = <Navigate to="/" state={{loggedAs:login.loginStatus}}/>
    }
    return (
        <div>
            {redirect}
            <Toolbar />
            <div className={classes.background}>
                <Card className={classes.root} elevation={4}>
                    <Typography variant="h2">
                        Se connecter
                    </Typography>
                    <Box m={4} />
                    <form onSubmit={submitForm}>
                        <Typography>
                            Nom d'utilisateur
                        </Typography>
                        {/* <Box m={1}/> */}
                        <TextField placeholder="Nom d'utilisateur" variant="outlined"
                            size="small" className={classes.field}
                            name="username"
                            onChange={onChangeHandler} value={values.username}
                            InputLabelProps={{ shrink: false }}
                            InputProps={{
                                style: {
                                    fontSize: 16,
                                    fontWeight: 400,
                                }
                            }} />
                        <Box m={2} />
                        <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <Typography component="span">
                                Mot de passe
                            </Typography>
                            <Typography component="span" color="primary">
                                Mot de passe oublié ?</Typography>
                        </Box>
                        {/* <Box m={1}/> */}
                        <TextField placeholder="Mot de passe" variant="outlined"
                            size="small" className={classes.field}
                            InputLabelProps={{ shrink: false }}
                            name="password"
                            onChange={onChangeHandler} value={values.password}
                            InputProps={{
                                style: {
                                    fontSize: 16,
                                    fontWeight: 400,
                                }
                            }}
                            type="password" />
                        <Box m={4} />
                        <Button fullWidth size="medium"
                            color="primary" variant="contained"
                            disableElevation disableFocusRipple
                            className={classes.button}
                            type='submit'
                        ><Typography variant="body1">Se connecter</Typography>
                        </Button>
                        <Box m={1} />
                        <Typography component="span">
                            Vous n'avez pas de compte ? </Typography>
                        <Typography component="span" color="primary">
                            S'inscrire !</Typography>
                    </form>
                </Card>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Authentication;