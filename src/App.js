import './App.css';
import { React } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector }from 'react-redux'
import Home from './pages/Home'
import Authentication from './pages/Authentication'
import ComingSoon from './pages/ComingSoon'
import Map from './pages/Map'

const theme = createTheme({

  palette: {
    primary: { main: "#ff4d33", light: "#eee" },
    text: {
      primary: "#1a0805",
      secondary: "#eee"
    }
  },
  typography: {
    fontFamily: 'Sora',
    h1: {
      fontSize: 56,
      fontWeight: 700,
    },
    h2: {
      fontSize: 38,
      fontWeight: 400,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 21,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 400,
    }
  }
});

const style = {
  width: "1366px",
}

const App = () => {
const login = useSelector((state) => state.login)
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/comingSoon" element={<ComingSoon />} />
      <Route path="/browse" element={<Map />} />
      <Route render={() => <h1>Not found</h1>} />
    </Routes>)

  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* <Box style={style}> */}
        {/* <Map/> */}
        {routes}
        {/* </Box> */}
        {/* <Authentication/> */}
      </ThemeProvider >
    </Router>
  );
};

export default App;