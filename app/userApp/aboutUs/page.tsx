import React from "react";
import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

const teamMembers = [
  {
    name: "Juan Pérez",
    img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "",
    img: "/logo-long.png",
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

const sizeMap = [6, 3, 6, 3, 3, 3]; // Define el tamaño de cada elemento

const AboutUs = () => {
  return (
    <Box sx={{ width: "100%", marginTop: 4 }}>
      {/* Sección Principal */}
      <Grid container alignItems="center" spacing={2}>
        {/* Información a la izquierda */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={600} mb={2}>
            Sobre Nosotros
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Somos un equipo apasionado dedicado a crear experiencias únicas,
            combinando creatividad y tecnología para ofrecer soluciones
            innovadoras y efectivas. Nos inspira el espíritu emprendedor y la
            resiliencia de Chile, un país donde la naturaleza desafiante y la
            historia de superación nos enseñan a reinventarnos constantemente.
            Así como el pueblo chileno ha sabido enfrentar terremotos y
            construir un futuro sólido, nosotros trabajamos con la misma
            determinación para marcar la diferencia en cada proyecto.
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
              <source src="/video.mp4" type="video/mp4" />
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

      <Grid container spacing={2} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Box
            sx={{
              width: "20vw",

              height: sizeMap[index] * 40, // Doble de altura si es grande
              backgroundImage: `url(${member.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              margin: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              p: 1,
              color: "white",
              fontWeight: "bold",
              textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
            }}
          >
            <Typography variant="body1">{member.name}</Typography>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
