import React from "react";
import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";

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
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        margin: "auto",
        backgroundColor: "white",
        mb: 2,
      }}
    >
      {/* Avatar */}

      <Box
        p={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: 80,
            height: 80,
            margin: "0 auto 16px",
          }}
        />
        {/* Message */}
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography 
           sx={{
            fontSize: 16,
            fontStyle: 'italic',
            fontWeight: '300', // Para hacer la letra delgada
          }}
          >{message}</Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 1 }}>
            {name}
          </Typography>
          {/* Date */}
          <Typography variant="body2" color="textSecondary">
            {date}
          </Typography>
        </Box>
      </Box>
      {/* Client Name */}
    </Box>
  );
};

export default TestimonialCard;
