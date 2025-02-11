import React from "react";
import { Box, Typography, Stack, Link, IconButton, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212121",
        color: "#fff",
        paddingX: { xs: 2, sm: 4, md: 6, lg: 8 },
        paddingTop: 4,
        paddingBottom: 4,
        marginTop: 15,
      }}
    >
      <Grid container spacing={4}>
        {/* Información de Contacto */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight={300} mb={2}>
            Contacto
          </Typography>
          <Stack spacing={2}>
            {/* Teléfono */}
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon />
              <Typography fontSize={12}>+56 9 1234 5678</Typography>
            </Stack>
            {/* Dirección */}
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon />
              <Typography fontSize={12}>
                Av. Ejemplo 123, Santiago, Chile
              </Typography>
            </Stack>
            {/* Email */}
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon />
              <Link
                fontSize={12}
                href="mailto:info@bravo.cl"
                color="inherit"
                underline="hover"
              >
                info@bravo.cl
              </Link>
            </Stack>
          </Stack>
        </Grid>

        {/* Pertenecemos */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight={300} mb={2}>
            Pertenecemos a:
          </Typography>
          <Stack spacing={2}>
            {/* ACP */}
            <Stack direction="row" spacing={1} alignItems="center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsy_ZH1MC1d_xjvnuPzsPem6KwBfKF5Uf3Q&s"
                alt="Logo ACP"
                style={{ width: 50, height: 50 }}
              />
              <Typography fontSize={12}>
                ACP (Asociación de Corredores de Propiedades Región del Bío Bío)
              </Typography>
            </Stack>
            {/* ACOP */}
            <Stack direction="row" spacing={1} alignItems="center">
              <img
                src="/ruta/al/logo-acop.png"
                alt="Logo ACOP"
                style={{ width: 50, height: 50 }}
              />
              <Typography fontSize={12}>
                ACOP (Cámara Nacional de Servicios Inmobiliarios A.G.)
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* Oficinas */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight={300} mb={2}>
            Oficinas
          </Typography>
          <Stack spacing={2}>
            {/* Concepción */}
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon />
              <Typography fontSize={12}>Cochrane 284, Concepción</Typography>
            </Stack>
            {/* Santiago */}
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon />
              <Typography fontSize={12}>
                Las Verbenas 9190, Las Condes, Santiago
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      {/* Derechos Reservados */}
      <Typography fontSize={12} mt={4} textAlign="center">
        © 2025 Álvaro Bravo. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
