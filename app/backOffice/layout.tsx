"use client";
import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Divider,
} from "@mui/material";
import {
  Dashboard,
  Home,
  People,
  Settings,
  Analytics,
  ExitToApp,
  Person,
  Category,
  Assessment,
  Description,
  AccountBox,
  Star,
  Article,
  ViewCarousel,
} from "@mui/icons-material";
import { useRouter, usePathname } from "next/navigation";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/backOffice" },
  { text: "Propiedades", icon: <Home />, path: "/backOffice/properties" },
  { text: "Solicitudes", icon: <Assessment />, path: "/backOffice/publication-requests" },
  { text: "Contratos", icon: <Description />, path: "/backOffice/contracts" },
  { text: "Personas", icon: <AccountBox />, path: "/backOffice/people" },
  { text: "Usuarios", icon: <People />, path: "/backOffice/users" },
  { text: "Agentes", icon: <Person />, path: "/backOffice/agents" },
  { text: "Testimonios", icon: <Star />, path: "/backOffice/testimonials" },
  { text: "Blog", icon: <Article />, path: "/backOffice/blog" },
  { text: "Slider", icon: <ViewCarousel />, path: "/backOffice/slider" },
  { text: "Tipos Propiedad", icon: <Category />, path: "/backOffice/categories" },
  { text: "Reportes", icon: <Analytics />, path: "/backOffice/reports" },
  { text: "Configuración", icon: <Settings />, path: "/backOffice/settings" },
];

export default function BackOfficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    // Implement logout logic here
    router.push("/userApp");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#1976d2",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Panel de Administración - Propiedades
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#f5f5f5",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
            Back Office
          </Typography>
        </Toolbar>
        <Divider />
        
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => handleNavigation(item.path)}
              sx={{
                cursor: "pointer",
                backgroundColor: pathname === item.path ? "#e3f2fd" : "transparent",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                },
                borderRight: pathname === item.path ? "3px solid #1976d2" : "none",
              }}
            >
              <ListItemIcon sx={{ color: pathname === item.path ? "#1976d2" : "#666" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  color: pathname === item.path ? "#1976d2" : "#333",
                  fontWeight: pathname === item.path ? "bold" : "normal",
                }}
              />
            </ListItem>
          ))}
        </List>
        
        <Divider />
        
        <List>
          <ListItem
            onClick={handleLogout}
            sx={{
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#ffebee",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#d32f2f" }}>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" sx={{ color: "#d32f2f" }} />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f8f9fa",
          p: 3,
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
