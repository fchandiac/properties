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
            borderStyle: "solid",
            borderWidth: 10,
            //borderColor: "#DBBD75",
            borderColor: "#01C442",
          }}
        />
        {/* Message */}
        <Box sx={{ flexGrow: 1, textAlign: 'justify', padding: 2, marginLeft: 2 }}>
          <Typography 
           sx={{
            fontSize: 14,
            fontStyle: 'italic',
            fontWeight: '300', // Para hacer la letra delgada
            marginBottom: 4,
          }}
          >{message}</Typography>
          <Typography  fontWeight={600} lineHeight={.7} textAlign={'right'}>
            {name}
          </Typography>
          {/* Date */}
          <Typography variant="body2" color="textSecondary" textAlign={'right'}>
            {date}
          </Typography>
        </Box>
      </Box>
      {/* Client Name */}
    </Box>
  );
};

export default TestimonialCard;
