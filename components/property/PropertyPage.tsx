import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KingBedIcon from "@mui/icons-material/KingBed";
import GarageIcon from "@mui/icons-material/Garage";
import HomeIcon from "@mui/icons-material/Home";
import TerrainIcon from "@mui/icons-material/Terrain";
import PlaceIcon from "@mui/icons-material/Place";

interface PropertyPageProps {
  type?: 0 | 1; // Property type
  category?: string; // Property category (e.g., "House", "Apartment", etc.)
  images: string[]; // Array de imágenes
  builtArea?: number; // Built area in square meters
  landArea?: number; // Land area in square meters
  bathrooms?: number; // Number of bathrooms
  bedrooms?: number; // Number of bedrooms
  parkingSpaces?: number; // Number of parking spaces
  price?: number; // Property price
  uf?: number; // Property price in UF
  address?: string; // Property address
}

const PropertyPage: React.FC<PropertyPageProps> = ({
  images,
  builtArea = 120,
  landArea = 200,
  bathrooms = 2,
  bedrooms = 3,
  parkingSpaces = 1,
  category = "Casa",
  type = 0,
}) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={4}
      >
        <Typography variant="h4" fontWeight={300} mb={2}>
          {category} en {type === 0 ? "venta" : "arriendo"}
        </Typography>
        <Button variant="contained" color="primary">
          Agendar visita
        </Button>
      </Box>

      <Box></Box>

      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",

          height: { xs: 200, sm: 300, md: 400 },
          padding: 2,
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            height: "100%",
            border: "1px solid #ccc",
            backgroundImage: `url(${images[0]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderBottomLeftRadius: "30px",
            borderTopLeftRadius: "30px",
            marginRight: 2,
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              border: "1px solid #ccc",
              borderTopRightRadius: "30px",
              marginBottom: 1,
              backgroundImage: `url(${images[1]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Box
            sx={{
              width: "100%",
              height: "100%",
              border: "1px solid #ccc",
              borderBottomRightRadius: "30px",
              marginTop: 1,
              backgroundImage: `url(${images[2]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Box>

      <Grid container spacing={1} mt={2} mb={2} alignItems={'center'} justifyContent={'center'}>
        {/* Property Details */}
        <Grid item>
          <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Centra los elementos horizontalmente
              gap: "2px", // Espacio reducido entre los elementos
            }}>
            <BathtubIcon fontSize="inherit" />
            <Typography fontSize={14} sx={{ marginLeft: 1 }}>
              {bathrooms} baños
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Centra los elementos horizontalmente
              gap: "2px", // Espacio reducido entre los elementos
            }}>
            <KingBedIcon fontSize="inherit" />
            <Typography fontSize={14} sx={{ marginLeft: 1 }}>
              {bedrooms} dormitorios
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Centra los elementos horizontalmente
              gap: "2px", // Espacio reducido entre los elementos
            }}>
            <HomeIcon fontSize="inherit" />
            <Typography fontSize={14} sx={{ marginLeft: 1 }}>
              {builtArea} m² construidos
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Centra los elementos horizontalmente
              gap: "2px", // Espacio reducido entre los elementos
            }}
          >
            <TerrainIcon fontSize="inherit" />
            <Typography fontSize={14}>{landArea} m² terreno</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Centra los elementos horizontalmente
              gap: "2px", // Espacio reducido entre los elementos
            }}>
            <GarageIcon fontSize="inherit" />
            <Typography fontSize={14} sx={{ marginLeft: 1 }}>
              {parkingSpaces} estacionamientos
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h5" fontWeight={300} mb={2}>
        Descripción
      </Typography>
      <Typography variant="body1" textAlign={"justify"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, nisl et scelerisque fermentum, nunc arcu ultricies libero,
        nec ultricies ligula metus nec sapien. Nullam eget eros elementum,
        faucibus augue sit amet, ultricies nunc. Nullam auctor interdum orci,
        nec tempus odio. Nullam ac ipsum nec elit ultrices aliquet. Nulla
        facilisi. Nullam nec arcu
      </Typography>
    </>
  );
};

// Componente de prueba con valores por defecto
const PropertyPageTest = () => {
  const images = [
    "https://hips.hearstapps.com/hmg-prod/images/230504-voluar-la-casa-que-se-bifurca-019-662229a00e335.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
    "https://www.vinasconstructora.com/wp-content/uploads/2024/06/casa-modernas-minimalistas.jpg",
    "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg",
    "https://www.airbnb.com/images/landing/hero_5.jpg",
    "https://www.airbnb.com/images/landing/hero_2.jpg",
  ];

  return <PropertyPage images={images} />;
};

export default PropertyPageTest;
