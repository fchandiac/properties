import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function BottomBar() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'white',
        position: 'fixed', // Hace que el footer sea flotante
        bottom: 0, // Se coloca siempre en la parte inferior
        left: 0,
        width: '100%', // Ocupa todo el ancho de la pantalla
        zIndex: 1000, // Se asegura de estar por encima de otros elementos
        textAlign: 'center',
      }}
    >

      {/* Íconos de redes sociales */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: '5px', marginBottom: '5px' }}>
        <IconButton
          aria-label="Facebook"
          href="https://www.facebook.com"
          target="_blank"
          sx={{ color: '#212121', '&:hover': { color: '#4267B2' } }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          href="https://www.instagram.com"
          target="_blank"
          sx={{ color: '#212121', '&:hover': { color: '#E1306C' } }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          aria-label="WhatsApp"
          href="https://wa.me/123456789"
          target="_blank"
          sx={{ color: '#212121', '&:hover': { color: '#25D366' } }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
