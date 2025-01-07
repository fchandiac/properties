import PropertyUserCard from "@/components/property/PropertyUserCard";
import SliderImages from "@/components/slider/SliderImages";
import { Box, Grid } from "@mui/material";
import React from "react";

export default function UserPage() {
  return (
    <div>
      {/* Slider */}
      <SliderImages images={imagesList} />
      {/* Navbar */}
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="#home" style={styles.navLink}>
              Blog
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#about" style={styles.navLink}>
              Vender
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#services" style={styles.navLink}>
              Arrendar
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#contact" style={styles.navLink}>
              Propiedades
            </a>
          </li>
        </ul>
      </nav>
    
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
    top: 0,
    zIndex: 1000,
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
  },
  navLink: {
    color: "#1D1D1D",
    textDecoration: "none",
    fontSize: "15px",
    transition: "color 0.3s",
  },
  navLinkHover: {
    color: "#00BFFF",
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
