'use client'
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Avatar,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KingBedIcon from "@mui/icons-material/KingBed";
import GarageIcon from "@mui/icons-material/Garage";
import HomeIcon from "@mui/icons-material/Home";
import TerrainIcon from "@mui/icons-material/Terrain";

const PropertyPage = ({
  builtArea = 120,
  landArea = 200,
  bathrooms = 2,
  bedrooms = 3,
  parkingSpaces = 1,
  category = "Casa",
  type = 0,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Imágenes por defecto
  const defaultImages = [
    "https://source.unsplash.com/600x400/?house",
    "https://source.unsplash.com/600x400/?livingroom",
    "https://source.unsplash.com/600x400/?kitchen",
  ];

  return (
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2} mt={4}>
      {/* Contenido principal */}
      <Box flex={2}>
        <Typography variant="h4" fontWeight={300} mb={2}>
          {category} en {type === 0 ? "venta" : "arriendo"}
        </Typography>

        {/* Galería de imágenes */}
        <Box height={{ xs: 300, md: 400 }} display="flex" gap={1}>
          <Box flex={2} sx={{ backgroundImage: `url(${defaultImages[0]})`, backgroundSize: "cover", borderRadius: 2 }} />
          <Box flex={1} display="flex" flexDirection="column" gap={1}>
            <Box flex={1} sx={{ backgroundImage: `url(${defaultImages[1]})`, backgroundSize: "cover", borderRadius: 2 }} />
            <Box flex={1} sx={{ backgroundImage: `url(${defaultImages[2]})`, backgroundSize: "cover", borderRadius: 2 }} />
          </Box>
        </Box>

        {/* Características */}
        <Grid container spacing={2} mt={2}>
          {[{ icon: <BathtubIcon />, label: `${bathrooms} baños` },
            { icon: <KingBedIcon />, label: `${bedrooms} dormitorios` },
            { icon: <HomeIcon />, label: `${builtArea} m² construidos` },
            { icon: <TerrainIcon />, label: `${landArea} m² terreno` },
            { icon: <GarageIcon />, label: `${parkingSpaces} estacionamientos` }].map((item, index) => (
            <Grid item key={index} xs={6} md={4} lg={2}>
              <Box display="flex" alignItems="center" gap={1}>
                {item.icon}
                <Typography fontSize={14}>{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Mapa */}
        <Box mt={4} height={400} sx={{ border: "1px solid #ccc", borderRadius: 2, overflow: "hidden" }}>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-70.6506,-33.4372,-70.6406,-33.4272&layer=mapnik"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Box>
      </Box>

      {/* Contacto (Solo en desktop) */}
      <Box display={{ xs: "none", md: "block" }} flex={1} p={2} sx={{ backgroundColor: "white", borderRadius: 3, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Avatar src="https://randomuser.me/api/portraits/men/50.jpg" sx={{ width: 64, height: 64 }} />
          <Box>
            <Typography variant="h6" fontWeight={500}>Juan Pérez</Typography>
            <Typography variant="body2">Agente Inmobiliario</Typography>
          </Box>
        </Box>
        <Typography variant="body1"><strong>WhatsApp:</strong> +56 9 1234 5678</Typography>
        <Typography variant="body1"><strong>Correo:</strong> juan.perez@email.com</Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleOpen}>
          Agendar Visita
        </Button>
      </Box>

      {/* Diálogo de contacto */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Agendar Visita</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Nombre" margin="dense" />
          <TextField fullWidth label="Correo Electrónico" margin="dense" type="email" />
          <TextField fullWidth label="Teléfono" margin="dense" type="tel" />
          <TextField fullWidth label="WhatsApp" margin="dense" type="tel" />
          <TextField
            fullWidth
            label="Mensaje"
            margin="dense"
            multiline
            rows={4}
            defaultValue="Deseo realizar una visita a la propiedad ubicada en ..."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancelar</Button>
          <Button variant="contained" color="primary">Enviar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PropertyPage;
