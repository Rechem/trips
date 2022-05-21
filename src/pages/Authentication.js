import React from 'react';
import Toolbar from '../components/Toolbar/Toolbar'
import {Card, CardContent, Typography, makeStyles, useTheme, Box, TextField, Button} from '@material-ui/core'


const Authentication = () => {

    const theme = useTheme()
    
    const useStyles = makeStyles({
        root: {
          margin:"auto",
          padding: "32px",
        //   maxWidth :"432px",
          backgroundColor : `${theme.palette.primary.light}`,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        },
        field : {
            width : "328px",
            color : theme.palette.text.primary,
            backgroundColor: '#fff',
            //label color (i didnt even need it lol but its good to keep)
            // "& .MuiFormLabel-root" : {
            //     color: theme.palette.text.primary
            // },
        },
        button: {
            textTransform: "none",
          }
      });

    const classes = useStyles()

    return (
        <div>
            <Toolbar/>
            <Card className={classes.root} elevation={4}>
                {/* <CardContent> */}
                    <Typography variant="h2">
                        Login
                    </Typography>
                    <Box m={4}/>
                    <form>
                        <Typography variant="body1">
                            Email
                        </Typography>
                        {/* <Box m={1}/> */}
                        <TextField placeholder="Email" variant="outlined"
                        size="small" className={classes.field}
                        InputLabelProps={{shrink: false}}
                        InputProps={{ style: {
                            fontSize : 16,
                            fontWeight: 400, } }}
                            type="email"/>
                        <Box m={2}/>
                        <Box style={{display:"flex", justifyContent: "space-between", alignItems : "baseline"}}>
                            <Typography variant="body1" component="span">
                                Password
                            </Typography>
                            <Typography variant="body2" component="span" color="primary">
                                Forgot password ?</Typography>
                        </Box>
                        {/* <Box m={1}/> */}
                        <TextField placeholder="Password" variant="outlined"
                        size="small" className={classes.field}
                        InputLabelProps={{shrink: false}}
                        InputProps={{ style: {
                            fontSize : 16,
                            fontWeight: 400, } }}
                            type="password"/>
                        <Box m={6}/>
                        <Button fullWidth size="medium"
                        color="primary" variant="contained"
                        disableElevation disableFocusRipple
                        className={classes.button}
                        ><Typography variant="body1">Log in</Typography></Button>
                        <Box m={1}/>
                        <Typography variant="body2" component="span">
                        Don't have an account ? </Typography>
                        <Typography variant="body2" component="span" color="primary">
                        Signup !</Typography>
                    </form>
                {/* </CardContent> */}
            </Card>
        </div>
    );
};

export default Authentication;