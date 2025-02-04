"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  IconButton,
  Icon,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KingBedIcon from "@mui/icons-material/KingBed";
import GarageIcon from "@mui/icons-material/Garage";
import HomeIcon from "@mui/icons-material/Home";
import TerrainIcon from "@mui/icons-material/Terrain";
import { useRouter } from "next/navigation";

interface PropertyUserCardProps {
  type?: 0 | 1; // Property type
  featured: boolean; // Property featured
  googleMapLink?: string | null; // Link to Google Maps
  youtubeLink?: string | null; // Link to a YouTube video
  ticToLink?: string | null; // Link to a TikTok video
  image?: string; // Property image
  category?: string; // Property category (e.g., "House", "Apartment", etc.)
  builtArea?: number; // Built area in square meters
  landArea?: number; // Land area in square meters
  bathrooms?: number; // Number of bathrooms
  bedrooms?: number; // Number of bedrooms
  parkingSpaces?: number; // Number of parking spaces
  price?: number; // Property price
  uf?: number; // Property price in UF
  address?: string; // Property address
  description?: string; // Property description
}

const PropertyUserCard: React.FC<PropertyUserCardProps> = ({
  type = 0,
  featured = false,
  image = "https://hips.hearstapps.com/hmg-prod/images/230504-voluar-la-casa-que-se-bifurca-019-662229a00e335.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
  category = "House",
  builtArea = 120,
  landArea = 200,
  bathrooms = 2,
  bedrooms = 3,
  parkingSpaces = 1,
  price = 150000000,
  uf = 39027,
  address = "123 Main St, Santiago, Chile",
  googleMapLink = "https://maps.google.com",
  youtubeLink = "https://www.youtube.com",
  ticToLink = "https://www.tiktok.com",
}) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        margin: "auto",
        backgroundColor: "white",
        position: "relative", // Necesario para colocar la banda en la esquina
        mb: 2,
        "&:hover": {
          boxShadow: "0px 8px 16px rgba(0,0,0,0.5)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0, // Alinea la banda a la derecha
          width: "100%",
          height: "100%",
          cursor: "pointer",
          opacity: 0, // Inicialmente no visible
          backgroundColor: "rgba(0,0,0,0.5)", //
          transition: "opacity 0.3s ease", // Para una transición suave
          "&:hover": {
            opacity: 1, // Aparece cuando el mouse pasa por encima
          },
          zIndex: 3, // Asegura que la banda se muestre por encima de otros elementos
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              router.push(`/userApp/properties/property`)
            }
          >
            Ver Propiedad
          </Button>
        </Box>
      </Box>

      {/* Banda destacada en la esquina superior derecha */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0, // Alinea la banda a la derecha
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10, // Mueve la banda hacia la esquina superior derecha
            padding: "1px 8px",
            borderRadius: "12px", // Redondea las esquinas del badge
            backgroundColor: "#026330", // Fondo negro
            display: "flex",
            fontWeight: "bold",
            color: "white", // Texto blanco
            fontSize: "12px",
            zIndex: 2, // Asegura que el badge se muestre por encima de otros elementos
          }}
        >
          <Typography
            fontSize={12}
            sx={{
              color: "white",
              padding: 0.2,
              textAlign: "center",
            }}
          >
            {type === 0 ? "EN VENTA" : "EN ARRIENDO"}
          </Typography>
        </Box>
      </Box>

      {/* Banda destacada en la esquina superior izquierda */}
      {featured && (
        <Box
          sx={{
            position: "absolute",
            top: 90,
            left: -40,
            width: 300,
            //backgroundColor: "#DBBD75", // Fondo metálico dorado
            background: "linear-gradient( #F2E1A1, #DBBD75, #C9A65E)",
            color: "white",
            padding: "4px 10px",
            fontWeight: "bold",
            fontSize: "14px",
            transform: "rotate(-45deg)", // Rotación de la banda
            transformOrigin: "top left",
            zIndex: 1,
          }}
        >
          <Typography
            fontSize={12}
            sx={{
              marginLeft: 6,
            }}
          >
            DESTACADA
          </Typography>
        </Box>
      )}

      {/* Image Section */}
      <Box
        component="img"
        src={image}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
        }}
      />

      {/* Details Section */}
      <Box p={2}>
        <Box display="flex" justifyContent={"space-between"} color={"#9e9e9e"}>
          {/* Property Details */}
          <Box display="flex" justifyContent={"space-between"}>
            <BathtubIcon fontSize="inherit" />
            <Typography fontSize={12} sx={{ marginLeft: 1 }}>
              {bathrooms}
            </Typography>
          </Box>

          <Box display="flex" justifyContent={"space-between"}>
            <KingBedIcon fontSize="inherit" />
            <Typography fontSize={12} sx={{ marginLeft: 1 }}>
              {bedrooms}
            </Typography>
          </Box>

          <Box display="flex" justifyContent={"space-between"}>
            <HomeIcon fontSize="inherit" />
            <Typography fontSize={12} sx={{ marginLeft: 1 }}>
              {builtArea} m²
            </Typography>
          </Box>

          <Box display="flex" justifyContent={"space-between"}>
            <TerrainIcon fontSize="inherit" />
            <Typography fontSize={12} sx={{ marginLeft: 1 }}>
              {landArea} m²
            </Typography>
          </Box>

          <Box display="flex" justifyContent={"space-between"}>
            <GarageIcon fontSize="inherit" />
            <Typography fontSize={12} sx={{ marginLeft: 1 }}>
              {parkingSpaces}
            </Typography>
          </Box>
        </Box>

        {/* Price Section */}
        <Typography
          fontSize={20}
          fontWeight="bold"
          mt={1}
          textAlign="center"
          color="#212121"
        >
          {"(UF"} {uf.toLocaleString("es-CL")} {") "}
          {price.toLocaleString("es-Cl", {
            currency: "CLP",
            style: "currency",
          })}
        </Typography>

        {/* Address Section */}
        <Typography fontSize={10} color="textSecondary" textAlign="center">
          {address}
        </Typography>
      </Box>
    </Box>
  );
};

export default PropertyUserCard;
