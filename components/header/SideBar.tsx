import React from "react";
import { Drawer, Box, Typography, MenuItem, List } from "@mui/material";
import { useRouter } from "next/navigation";

interface SideBarProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

export default function SideBar({ open, toggleDrawer }: SideBarProps) {
  const router = useRouter();
  return (
    <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
      <Box sx={{ width: 250, padding: 2 }}>
        <Box
          sx={{
            backgroundImage: "url(/logo-long.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: 70,
            width: 200,
            objectFit: "contain", // Ajusta el tamaño sin distorsionar la imagen
            marginRight: "16px", // Espacio entre el logo y el título
          }}
        />

      

        {/* Menu Items */}
        <List>
          <MenuItem
            onClick={() => {
              router.push("/userApp");
              toggleDrawer(false);
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push("/userApp/blog");
              toggleDrawer(false);
            }}
          >
            Blog
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push("/userApp/sell");
              toggleDrawer(false);
            }}
          >
            Vender
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push("/userApp/rent");
              toggleDrawer(false);
            }}
          >
            Arrendar
          </MenuItem>
          <MenuItem onClick={() => {
              router.push("/userApp/properties");
              toggleDrawer(false);
          }}>
            Propiedades
          </MenuItem>
          <MenuItem onClick={() => {
              router.push("/userApp/aboutUs");
              toggleDrawer(false);
          
          }}>
            Sobre Nosotros
          </MenuItem>
          <MenuItem onClick={() => {
              router.push("/userApp/contact");
              toggleDrawer(false);
          }}>
            Contacto
          </MenuItem>
        </List>
      </Box>
    </Drawer>
  );
}
