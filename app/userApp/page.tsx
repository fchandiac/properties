import PropertyUserCard from "@/components/property/PropertyUserCard";
import SliderImages from "@/components/slider/SliderImages";
import TestimonialCard from "@/components/TestimonialCard";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

export default function UserPage() {
  return (
    <div>
      <Container>
        <Grid direction={"row"} container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} md={4}>
            <PropertyUserCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PropertyUserCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PropertyUserCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PropertyUserCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PropertyUserCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PropertyUserCard />
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={2} mt={2} direction={"column"}>
          <Grid item>
            <TestimonialCard
              image="https://via.placeholder.com/150" // Reemplaza con la URL de la imagen
              message="The service provided by Álvaro Bravo has been exceptional. From the initial consultation to the final purchase, every step was seamless and professional. His expertise in the real estate market, attention to detail, and commitment to finding the perfect property made the entire experience stress-free and enjoyable. Highly recommended for anyone looking to buy or sell their property with confidence."
              name="John Doe"
              date="January 7, 2025"
            />
          </Grid>
          <Grid item>
            <TestimonialCard
              image="https://via.placeholder.com/150" // Reemplaza con la URL de la imagen
              message="I've never seen anything like it. It's incredible!"
              name="Jane Doe"
              date="February 14, 2025"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

// Estilos en línea
import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  navbar: {
    backgroundColor: "white",
    padding: "10px 20px",
    position: "sticky",
    top: 34,
    zIndex: 1000,
    boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    justifyContent: "center",
  },
  navItem: {
    margin: "0 15px",
    color: "#212121",
  },
};


