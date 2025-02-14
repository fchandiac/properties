"use client";
import React, { useState } from "react";
import { Box, Container, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import BlogMiniCard from "@/components/blog/BlogMiniCard";

const blogMiniCards = [
  { title: "Cómo Evaluar un Barrio Antes de Comprar", image: "https://i0.wp.com/www.householdpm.com.au/wp-content/uploads/2019/08/hppost-how-to-switch-to-household-propertiest-01.jpg?fit=1920%2C1080&ssl=1" },
  { title: "Consejos para Invertir en Bienes Raíces", image: "https://s7d9.scene7.com/is/image/ledcor/Belmont%20Reunion%2003?qlt=85&wid=480&ts=1691085180535&dpr=on,2.625" },
  { title: "Errores Comunes al Comprar una Casa", image: "https://i0.wp.com/www.householdpm.com.au/wp-content/uploads/2019/08/hppost-how-to-switch-to-household-propertiest-01.jpg?fit=1920%2C1080&ssl=1" },
  { title: "Cómo Aumentar el Valor de tu Propiedad", image: "https://s7d9.scene7.com/is/image/ledcor/Belmont%20Reunion%2003?qlt=85&wid=480&ts=1691085180535&dpr=on,2.625" },
  { title: "Documentos Necesarios para Comprar una Vivienda", image: "https://s7d9.scene7.com/is/image/ledcor/Belmont%20Reunion%2003?qlt=85&wid=480&ts=1691085180535&dpr=on,2.625" },
];

export default function BlogCarousel() {
  const [index, setIndex] = useState(2); // La imagen central

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % blogMiniCards.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + blogMiniCards.length) % blogMiniCards.length);
  };

  return (
    <Container maxWidth="md" sx={{ position: "relative", display: "flex", alignItems: "center" }}>
      {/* Botón Izquierdo */}
      <IconButton onClick={handlePrev} sx={{ position: "absolute", left: 0, zIndex: 10 }}>
        <ChevronLeft fontSize="large" />
      </IconButton>

      {/* Carrusel */}
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          gap: 2,
          padding: 2,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {blogMiniCards.map((card, i) => {
          const distance = Math.abs(index - i);
          let scale = 1 - distance * 0.2;
          scale = scale < 0.6 ? 0.6 : scale;
          return (
            <motion.div
              key={i}
              style={{ minWidth: 250, transformOrigin: "center", scale }}
              animate={{ scale }}
            >
              <BlogMiniCard title={card.title} image={card.image} />
            </motion.div>
          );
        })}
      </Box>

      {/* Botón Derecho */}
      <IconButton onClick={handleNext} sx={{ position: "absolute", right: 0, zIndex: 10 }}>
        <ChevronRight fontSize="large" />
      </IconButton>
    </Container>
  );
}
