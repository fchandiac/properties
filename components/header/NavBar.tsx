import React from "react";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>BLOG</li>
        <li style={styles.navItem}>VENDER</li>
        <li style={styles.navItem}>COMPRAR</li>
        <li style={styles.navItem}>PROPIEDADES</li>
      </ul>
    </Box>
  );
};

// Estilos en línea
import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  navbar: {
    backgroundColor: "white",
    padding: "10px 20px",
    position: "sticky",
    top: 34,
    zIndex: 1000,
    boxShadow: "0px 4px 4px rgba(0,0,0,0.1)",
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

export default Navbar;
