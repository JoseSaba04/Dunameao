import React, { useRef, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Atividades', path: '/activities' },
  { label: 'Eventos', path: '/events' },
  { label: 'Contato', path: '/contact' },
];

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Estado para mostrar/ocultar la navbar
  const [show, setShow] = useState(true);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 10) {
        setShow(true);
      } else if (currentScroll > lastScroll.current) {
        setShow(false); // Bajando, ocultar
      } else {
        setShow(true); // Subiendo, mostrar
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        component={RouterLink}
        to="/"
        sx={{
          display: 'inline-block',
          mb: 2,
        }}
      >
        <Box
          component="img"
          src="/logo_dunameao.png"
          alt="Logo Dunameão"
          sx={{
            height: 48,
            width: 'auto',
            mx: 'auto',
            display: 'block',
          }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/inscreve-te"
            sx={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 700,
              bgcolor: 'secondary.main',
              borderRadius: 2,
              mt: 1,
              mx: 2,
              '&:hover': {
                bgcolor: 'secondary.dark',
              },
            }}
          >
            <ListItemText primary="Inscreve-te" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/entrar"
            sx={{
              textAlign: 'center',
              color: 'secondary.main',
              fontWeight: 700,
              borderRadius: 2,
              mt: 1,
              mx: 2,
              '&:hover': {
                bgcolor: 'rgba(33,203,243,0.08)',
              },
            }}
          >
            <ListItemText primary="Entrar" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: show ? 0 : '-80px',
        transition: 'top 0.4s cubic-bezier(.4,0,.2,1)',
        background: 'rgba(255, 255, 255, 0.18)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderBottom: '1px solid rgba(255,255,255,0.25)',
        boxShadow: '0 2px 16px 0 rgba(25,118,210,0.08)',
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 2,
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src="/logo_dunameao.png"
              alt="Logo Dunameão"
              sx={{
                height: 48,
                width: 'auto',
                display: 'block',
              }}
            />
          </Box>
          {!isMobile && navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              sx={{
                color: '#1976d2',
                fontWeight: 700,
                mx: 0.5,
                borderRadius: 2,
                transition: 'background 0.2s',
                '&:hover': {
                  background: 'rgba(25,118,210,0.08)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              component={RouterLink}
              to="/inscreve-te"
              variant="contained"
              color="secondary"
              sx={{
                fontWeight: 700,
                borderRadius: 2,
                boxShadow: '0 2px 8px 0 rgba(255,152,0,0.10)',
                ml: 2,
              }}
            >
              Inscreve-te
            </Button>
            <Button
              component={RouterLink}
              to="/entrar"
              variant="outlined"
              color="secondary"
              sx={{
                fontWeight: 700,
                borderRadius: 2,
                ml: 1,
                borderWidth: 2,
                '&:hover': {
                  background: 'rgba(33,203,243,0.08)',
                  borderWidth: 2,
                },
              }}
            >
              Entrar
            </Button>
          </Box>
        )}
        {isMobile && (
          <>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: {
                  width: 240,
                  background: 'rgba(255,255,255,0.85)',
                  color: '#1976d2',
                  backdropFilter: 'blur(16px) saturate(180%)',
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;