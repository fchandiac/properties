import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home"; // Importa el ícono de inicio

const Navbar = () => {
  const router = useRouter();

  return (
    <Box sx={styles.navbar}>
      <ul style={styles.navList}>
        <li
          style={styles.navItem}
          onClick={() => router.push("/userApp")}
          title="Home"
        >
          <HomeIcon sx={{ fontSize: "1.5rem", cursor: "pointer" }} />
        </li>
        <li style={styles.navItem} onClick={() => router.push("/userApp/blog")}>
          BLOG
        </li>
        <li style={styles.navItem}>VENDER</li>
        <li style={styles.navItem}>ARRENDAR</li>
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
    fontSize: "0.8rem",
    boxShadow: "0px 4px 4px rgba(0,0,0,0.1)",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  navItem: {
    margin: "0 10px",
    color: "#212121",
    cursor: "pointer",
  },
};

export default Navbar;
