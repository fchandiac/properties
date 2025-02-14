'use client'
import React, { useState } from "react";
import { Box, Typography, Avatar, Dialog } from "@mui/material";

interface TestimonialCardProps {
  image: string; // Imagen del cliente
  message: string; // Mensaje del testimonio
  name: string; // Nombre del cliente
  date: string; // Fecha del testimonio
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  message,
  name,
  date,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          margin: "auto",
          backgroundColor: "white",
          mb: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {/* Avatar y Mensaje */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Avatar
            src={image}
            alt={name}
            sx={{
              width: 80,
              height: 80,
              borderStyle: "solid",
              borderWidth: 4,
              borderColor: "#016330",
              marginRight: 2,
            }}
          />
          <Box sx={{ textAlign: "justify" }}>
            <Typography
              sx={{
                fontSize: 14,
                fontStyle: "italic",
                fontWeight: "300",
                marginBottom: 2,
              }}
            >
              {message}
            </Typography>
            <Typography fontWeight={600} lineHeight={1} textAlign={"right"}>
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" textAlign={"right"}>
              {date}
            </Typography>
          </Box>
        </Box>

        {/* Imagen a la derecha */}
        <Box
          component="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26upSBVXNCxinVpG5ZYmJ9ADmxB39pxl21g&s"
          alt="testimonial-image"
          sx={{
            width: 250,
            maxWidth: 250,
            borderRadius: "10px",
            objectFit: "cover",
            marginLeft: 2,
          }}
        />
      </Box>

      {/* Dialog con la imagen en tamaño completo */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <Box
          component="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26upSBVXNCxinVpG5ZYmJ9ADmxB39pxl21g&s"
          alt="testimonial-full"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Dialog>
    </>
  );
};

export default TestimonialCard;
