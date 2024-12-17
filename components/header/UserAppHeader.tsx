import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

export default function UserAppHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo como fondo */}
        <Box
          sx={{
            backgroundImage: 'url(/logo-long.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: 100, // Ancho del logo
            height: 40, // Altura del logo
            marginRight: 2, // Espacio entre el logo y el título
          }}
        />

        {/* Título o nombre de la app */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            UserApp
          </Typography>

          {/* Icono de menú alineado a la derecha */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>



      </Toolbar>
    </AppBar>
  );
}
