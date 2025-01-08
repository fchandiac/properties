import React from "react";
import { Box, Typography, Stack, Link, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212121",
        color: "#fff",
        paddingX: { xs: 2, sm: 4, md: 6, lg: 8 },
        paddingTop: 4,
        paddingBottom: 20,
        marginTop: 15,
      }}
    >
      {/* Contact Section */}
      <Typography variant="h6" fontWeight={300} mb={2}>
        Contacto
      </Typography>
      <Stack
        spacing={2}
        direction="column"
        alignItems="right"
 
      >
        {/* Phone */}
        <Stack direction="row" spacing={1} alignItems="center">
          <PhoneIcon />
          <Typography fontSize={12}>+56 9 1234 5678</Typography>
        </Stack>

        {/* Address */}
        <Stack direction="row" spacing={1} alignItems="center">
          <LocationOnIcon />
          <Typography fontSize={12}>Av. Ejemplo 123, Santiago, Chile</Typography>
        </Stack>
       

        {/* Email */}
        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon />
          <Link fontSize={12} href="mailto:info@karmica.cl" color="inherit" underline="hover">
            info@bravo.cl
          </Link>
        </Stack>
      </Stack>

      {/* Footer Bottom */}
      <Typography fontSize={12}  mt={4}>
        © 2025 Álvaro Bravo. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}
