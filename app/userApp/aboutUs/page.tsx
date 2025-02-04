import React from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

const teamMembers = [
  {
    name: "Juan Pérez",
    img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "María González",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMhvCmuhXzaHHS9vP_zmtn3muM5N1j34OhTCvtEMvUQrUqcaiQSWUpL9DQQRWxJ088kc&usqp=CAU",
  },
  {
    name: "Carlos López",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzg9A5gpzykDBpzJ_gdLTD2TTyWKAnNQsqG9hKKvy_aLospIEuOrUaInujdERXvTG9Wg&usqp=CAU",
  },
  {
    name: "Ana Martínez",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMhvCmuhXzaHHS9vP_zmtn3muM5N1j34OhTCvtEMvUQrUqcaiQSWUpL9DQQRWxJ088kc&usqp=CAU",
  },
  {
    name: "José Ramírez",
    img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Sofía Herrera",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMhvCmuhXzaHHS9vP_zmtn3muM5N1j34OhTCvtEMvUQrUqcaiQSWUpL9DQQRWxJ088kc&usqp=CAU",
  },
];

const AboutUs = () => {
  return (
    <Box sx={{ width: "100%", padding: 4 }}>
      {/* Sección Principal */}
      <Grid container spacing={4} alignItems="center">
        {/* Información a la izquierda */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={600} mb={2}>
            Sobre Nosotros
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Somos un equipo apasionado dedicado a crear experiencias únicas.
            Nuestra misión es brindar soluciones innovadoras y efectivas que
            marquen la diferencia.
          </Typography>
        </Grid>

        {/* Video a la derecha */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <video width="100%" autoPlay loop muted playsInline controls>
              <source
                src="/video.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta videos.
            </video>
          </Box>
        </Grid>
      </Grid>

      {/* Sección: Nuestro Equipo */}
      <Typography
        variant="h5"
        fontWeight={600}
        mt={6}
        mb={3}
        textAlign="center"
      >
        Nuestro Equipo
      </Typography>

      {/* Galería de imágenes con efecto hover */}
      <Grid container spacing={2} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
                "&:hover img": { filter: "none" }, // Quita el B&W en hover
              }}
            >
              <CardMedia
                component="img"
                image={member.img}
                alt={member.name}
                sx={{
                  filter: "grayscale(100%)", // Blanco y negro por defecto
                  transition: "0.3s ease-in-out",
                  width: "100%",
                  height: 120,
                }}
              />
            </Card>

            <Typography fontSize={18} fontWeight={"bold"}>
              Nombre integrante
            </Typography>
            <Typography fontSize={14} fontWeight={300}>
              Cargo
            </Typography>
            <Typography fontSize={14} fontWeight={300}>
              correo@mail.com
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
