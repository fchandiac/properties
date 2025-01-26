import SellRentPropertyForm from "@/components/property/SellRentPropertyForm";
import { Box, Container } from "@mui/material";
import React from "react";

export default function RentPage() {
  return (
    <>
      <Box
        sx={{
          marginTop: 4,
        }}
      >
        <SellRentPropertyForm type={1} />
      </Box>
    </>
  );
}
