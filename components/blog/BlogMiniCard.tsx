import React from "react";
import { Box, Typography } from "@mui/material";

interface BlogMiniCardProps {
  title?: string;
  image?: string;
}

export default function BlogMiniCard({
  title = "Título por defecto",
  image = "https://via.placeholder.com/150",
}: BlogMiniCardProps) {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        height: 200,
        width: "100%",
        maxWidth: 300, // Ajusta el ancho máximo de la card
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        margin: "auto",
        backgroundColor: "white",
        position: "relative",
        mb: 2,
        "&:hover": {
          boxShadow: "0px 8px 16px rgba(0,0,0,0.5)",
        },
      }}
    >
      {/* Contenedor de la imagen */}
      <Box
        sx={{
          height: "70%",
          width: "100%",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Contenedor del título */}
      <Box
        sx={{
          height: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: 1,
        }}
      >
        <Typography
          fontSize={16}
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
