import SellRentPropertyForm from "@/components/property/SellRentPropertyForm";
import { Box, Container } from "@mui/material";
import React from "react";

export default function SellPage() {
  return (
    <>
      <Box
      sx={{
        marginTop: 4,
      }}
      >
        <SellRentPropertyForm />
      </Box>
    </>
  );
}
