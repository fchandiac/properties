"use client";
import React, { useState, useEffect } from "react";
import { Box, IconButton, MobileStepper } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

interface ImageItem {
  imageUrl: string;
  linkUrl: string;
}

interface SliderImagesProps {
  images: ImageItem[];
}

const SliderImages: React.FC<SliderImagesProps> = ({ images }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep === 0 ? images.length - 1 : prevStep - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 280, sm: 400, md: 500 },
        backgroundImage: `url(${images[activeStep].imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
      }}
    >
      <a
        href={images[activeStep].linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", height: "100%", width: "100%" }}
      >
        <Box sx={{ height: "100%", width: "100%" }} />
      </a>

      {/* Botones de navegación grandes */}
      <IconButton
        onClick={handleBack}
        sx={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          '&:hover': { backgroundColor: "rgba(0,0,0,0.8)" },
        }}
      >
        <KeyboardArrowLeft fontSize="large" />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          '&:hover': { backgroundColor: "rgba(0,0,0,0.8)" },
        }}
      >
        <KeyboardArrowRight fontSize="large" />
      </IconButton>

      {/* Dots de navegación */}
      <MobileStepper
        steps={images.length}
        position="static"
        activeStep={activeStep}
        variant="dots"
        backButton={<div />}
        nextButton={<div />}
        sx={{
          position: "absolute",
          bottom: 30,
          right: 30,
          background: "transparent",
          ".MuiMobileStepper-dots": {
            display: "flex",
            justifyContent: "flex-end",
            gap: "4px",
          },
          ".MuiMobileStepper-dot": {
            width: "12px",
            height: "12px",
            backgroundColor: "#01C442",
            borderRadius: "50%",
            opacity: 0.6,
            border: "2px solid rgba(255, 255, 255, 0.6)",
            "&.MuiMobileStepper-dotActive": {
              //backgroundColor: "#E0C896",
              backgroundColor: "#01C442",
              opacity: 1,
              border: "2px solid #fff",
              transform: "scale(1.5)",
            },
          },
        }}
      />
    </Box>
  );
};

export default SliderImages;
