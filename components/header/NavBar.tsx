import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home"; // Importa el ícono de inicio
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box sx={styles.navbar}>
      <ul style={styles.navList}>
        <li
          style={styles.navItem}
          onClick={() => router.push("/userApp")}
          title="Home"
        >
          <HomeIcon sx={{ fontSize: "1.5rem", cursor: "pointer" }} />
          {pathname === "/userApp" && (
            <div style={styles.activeIndicator}></div>
          )}
        </li>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <li
            style={styles.navItem}
            onClick={() => router.push("/userApp/aboutUs")}
          >
            NOSOTROS
            {pathname.startsWith("/userApp/aboutUs") && (
              <div style={styles.activeIndicator}></div>
            )}
          </li>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <li
            style={styles.navItem}
            onClick={() => router.push("/userApp/sell")}
          >
            VENDE CON NOSOTROS
            {pathname === "/userApp/sell" && (
              <div style={styles.activeIndicator}></div>
            )}
          </li>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <li
            style={styles.navItem}
            onClick={() => router.push("/userApp/rent")}
          >
            ARRIENDA TU PROPIEDAD
            {pathname === "/userApp/rent" && (
              <div style={styles.activeIndicator}></div>
            )}
          </li>
        </Box>

        <li
          style={styles.navItem}
          onClick={() => router.push("/userApp/properties")}
        >
          PROPIEDADES
          {pathname.startsWith("/userApp/properties") && (
            <div style={styles.activeIndicator}></div>
          )}
        </li>

        <li
          style={styles.navItem}
          onClick={() => router.push("/userApp/testimonials")}
        >
          TESTIMONIOS
          {pathname.startsWith("/userApp/testimonials") && (
            <div style={styles.activeIndicator}></div>
          )}
        </li>
        <li style={styles.navItem} onClick={() => router.push("/userApp/blog")}>
          BLOG
          {pathname.startsWith("/userApp/blog") && (
            <div style={styles.activeIndicator}></div>
          )}
        </li>
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
    top: 59,
    zIndex: 1000,
    fontSize: "0.8rem",
    boxShadow: "0px 4px 4px rgba(0,0,0,0.1)",
    paddingBottom: 2,
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
    position: "relative",
  },
  activeIndicator: {
    position: "absolute",
    bottom: -10,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    height: 5,
    //background: "linear-gradient( #F2E1A1, #DBBD75, #C9A65E)",
    background: '#01C442',
  },
};

export default Navbar;
