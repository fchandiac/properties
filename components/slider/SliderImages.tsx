"use client";
import React, { useState, useEffect } from "react";
import { Box, IconButton, MobileStepper } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

interface ImageItem {
  imageUrl: string; // URL de la imagen
  linkUrl: string;  // URL de destino al hacer clic en la imagen
}

interface SliderImagesProps {
  images: ImageItem[]; // Lista de objetos con imageUrl y linkUrl
}

const SliderImages: React.FC<SliderImagesProps> = ({ images }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevStep) =>
      prevStep === 0 ? images.length - 1 : prevStep - 1
    );
  };

  // Animación automática cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 segundos

    return () => clearInterval(interval); // Limpieza para evitar fugas de memoria
  }, [activeStep]); // Se ejecuta cuando activeStep cambia

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 280, sm: 400, md: 500 }, // Altura variable según el tamaño de la pantalla
        backgroundImage: `url(${images[activeStep].imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
      }}
    >
      {/* Enlace de la imagen */}
      <a
        href={images[activeStep].linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", height: "100%", width: "100%" }}
      >
        <Box sx={{ height: "100%", width: "100%" }} />
      </a>

      {/* Dots de navegación */}
      <MobileStepper
        steps={images.length}
        position="static"
        activeStep={activeStep}
        variant="dots"
        sx={{
          position: "absolute",
          bottom: 30,
          right: 30,
          background: "transparent",

          // Personalización de los dots
          ".MuiMobileStepper-dots": {
            display: "flex",
            justifyContent: "flex-end",
            gap: "4px",
          },
          ".MuiMobileStepper-dot": {
            width: "12px", // Tamaño de los dots
            height: "12px",
            backgroundColor: "#E0C896", // Fondo de los dots
            borderRadius: "50%", // Asegura que los dots sean circulares
            border: "2px solid rgba(255, 255, 255, 0.6)", // Borde blanco con transparencia
            "&.MuiMobileStepper-dotActive": {
              backgroundColor: "#E0C896", // Fondo del dot activo
              border: "2px solid #fff", // Borde blanco para el dot activo
              transform: "scale(1.5)", // Escalado para resaltar el dot activo
            },
          },
        }}
        backButton={
          <IconButton
            size="medium"
            onClick={handleBack}
            disabled={images.length <= 1}
            sx={{
              width: 30,
              height: 30,
            }}
          >
            <KeyboardArrowLeft fontSize="large" />
          </IconButton>
        }
        nextButton={
          <IconButton
            size="medium"
            onClick={handleNext}
            disabled={images.length <= 1}
            sx={{
              width: 30,
              height: 30,
            }}
          >
            <KeyboardArrowRight fontSize="large" />
          </IconButton>
        }
      />
    </Box>
  );
};

export default SliderImages;
