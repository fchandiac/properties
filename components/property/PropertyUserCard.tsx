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

interface PropertyUserCardProps {
  type?: 0 | 1; // Property type
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
  uf?: number; // Property price in
  address?: string; // Property address
  description?: string; // Property description
}

const PropertyUserCard: React.FC<PropertyUserCardProps> = ({
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
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        maxWidth: 400,
        margin: "auto",
        backgroundColor: "white",
        mb: 2,
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={image}
        alt={category}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
        }}
      />

      {/* Details Section */}
      <Box p={2}>
        <Box display="flex" justifyContent={"space-between"}>
          {/* Property Details */}

          <Box display="flex" justifyContent={"space-between"}>
            <BathtubIcon />

            <Typography
              fontSize={12}
              sx={{
                marginLeft: 1,
              }}
            >
              {bathrooms}
            </Typography>
          </Box>

          <Box display="flex" justifyContent={"space-between"}>
            <KingBedIcon />

            <Typography
              fontSize={12}
              sx={{
                marginLeft: 1,
              }}
            >
              {bedrooms}
            </Typography>
          </Box>

          <Typography
            fontSize={12}
            sx={{
              marginLeft: 1,
            }}
          >
            {builtArea} m²
          </Typography>

          <Typography
            fontSize={12}
            sx={{
              marginLeft: 1,
            }}
          >
            {landArea} m²
          </Typography>

          <Box display="flex" justifyContent={"space-between"}>
            <GarageIcon />

            <Typography
              fontSize={12}
              sx={{
                marginLeft: 1,
              }}
            >
              {parkingSpaces}
            </Typography>
          </Box>
          {/* 
          <Typography fontSize={12}>
            {category}
          </Typography> */}
        </Box>

        {/* Price Section */}
        <Typography variant="h6" fontWeight="bold" mt={1} textAlign="center">
          {"(UF"} {uf} {")"}
          {price.toLocaleString("es-Cl", {
            currency: "CLP",
            style: "currency",
          })}
        </Typography>

        {/* Address Section */}
        <Typography fontSize={10} color="textSecondary" textAlign="center">
          {address}
        </Typography>

        {/* Buttons Section */}
        <Stack direction="row" spacing={2} justifyContent="center">
          {googleMapLink && (
            <IconButton>
              <a href={googleMapLink} target="_blank">
                <LocationOnIcon />
              </a>
            </IconButton>
          )}

          {youtubeLink && (
            <IconButton>
              <a href={youtubeLink} target="_blank">
                <YouTubeIcon />
              </a>
            </IconButton>
          )}
          {ticToLink && (
            <IconButton>
              <a href={ticToLink} target="_blank">
                <InstagramIcon />
              </a>
            </IconButton>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default PropertyUserCard;
