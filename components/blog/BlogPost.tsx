"use client";
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

interface BlogPostProps {
  title: string;
  summary: string;
  image: string;
  content: string[];
}

export default function BlogPost({
  title,
  summary,
  image,
  content,
}: BlogPostProps) {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        {/* Primera fila: Título y Resumen */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{summary}</Typography>
        </Grid>

        {/* Segunda columna: Imagen */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              borderRadius: "15px", // Bordes redondeados
              overflow: "hidden", // Evita bordes cuadrados visibles
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // Sombra elegante
              backgroundImage: `url(${image})`, // Imagen de fondo
              backgroundSize: "cover", // Ajusta la imagen sin distorsionarla
              backgroundPosition: "center", // Centra la imagen
              backgroundRepeat: "no-repeat", // Evita que la imagen se repita
              minHeight: "250px", // Altura mínima para que la imagen sea visible
            }}
          />
        </Grid>
      </Grid>

      {/* Segunda fila: Contenido del artículo */}
      <Grid container spacing={4} marginTop={4}>
        <Grid item xs={12}>
          {content.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body2"
              textAlign="justify"
              marginBottom={2}
            >
              {paragraph}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
