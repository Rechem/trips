import './App.css';
import {React} from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home'
import Authentication from './pages/Authentication'

const theme = createTheme({

  palette: {
    primary : {main:"#ff4d33", light: "#eee"},
    text:{
      primary: "#1a0805",
      secondary : "#eee"
    }
  },
  typography:{
    fontFamily: 'Sora',
    h1:{
      fontSize : 66,
      fontWeight: 700,
    },
    h2:{
      fontSize : 38,
      fontWeight: 400,
    },
    body1:{
      fontSize : 21,
      fontWeight: 400,
    },
    body2:{
      fontSize : 16,
      fontWeight: 400,
    },
    subtitle1:{
      fontSize : 16,
      fontWeight: 300,
    },
    subtitle2:{
      fontSize : 12,
      fontWeight: 300,
    }
  }
});

const style = {
  width : "1366px",
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Box style={style}> */}
        <Home></Home>
      {/* </Box> */}
      {/* <Authentication/> */}
    </ThemeProvider>
  );
};

export default App;