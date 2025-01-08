import PropertyUserCard from "@/components/property/PropertyUserCard";
import SliderImages from "@/components/slider/SliderImages";
import TestimonialCard from "@/components/TestimonialCard";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

export default function UserPage() {
  return (
    <div>
      {/* Slider */}
      <SliderImages images={imagesList} />
      {/* Navbar */}
      <Box sx={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>HOME</li>
          <li style={styles.navItem}>BLOG</li>
          <li style={styles.navItem}>VENDER</li>
          <li style={styles.navItem}>COMPRAR</li>
          <li style={styles.navItem}>PROPIEDADES</li>
        </ul>
      </Box>

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

const imagesList = [
  {
    imageUrl:
      "https://www.vinasconstructora.com/wp-content/uploads/2024/06/casa-modernas-minimalistas.jpg",
    linkUrl: "https://example.com/mountain",
  },
  {
    imageUrl:
      "https://panelyacanalados.com/wp-content/uploads/2021/10/casa-de-arquitectura-moderna.jpg",
    linkUrl: "https://example.com/flower-field",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mu_Qr9zzVQd3_G61rJmYfUFUDNWbGmWbUA&s",
    linkUrl: "https://example.com/beach",
  },
  {
    imageUrl:
      "https://quees.mobi/wp-content/uploads/2021/06/arquitectura-moderna.jpg",
    linkUrl: "https://example.com/forest",
  },
  {
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9q4VfaMlU525iSyBZmEyFx9pAubnuoetxGQhvDcUKf6jv3m5LIUOFF6wGeyPrSUldoA4cMW99NzZ1iTb23aNK-fvjhGZA8LO8PhzsFgeEhBmK55eEQQfoccFmE5x87uF4oR6Q8WeC8EI/s1600/1297697521-davemendelsohn.jpg",
    linkUrl: "https://example.com/lavender",
  },
];
