import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedHeader from './components/AnimatedHeader';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Events from './pages/Events';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff9800',
    },
    background: {
      default: 'transparent',
    },
  },
  typography: {
    fontFamily: "'Quicksand', Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, rgba(255,183,77,0.25) 0%, rgba(33,203,243,0.18) 50%, rgba(25,118,210,0.18) 100%)',
            backgroundAttachment: 'fixed',
          },
        }}
      />
      <Router>
        <Navbar />
        <AnimatedHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscreve-te" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;