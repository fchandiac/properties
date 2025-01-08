import React from "react";
import { Box, Grid, Typography } from "@mui/material";

interface PropertyPageProps {
  images: string[]; // Array de imágenes
}

const PropertyPage: React.FC<PropertyPageProps> = ({ images }) => {
  return (
    <Box
      sx={{
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
