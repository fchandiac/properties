"use client";
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import {
  TrendingUp,
  Home,
  People,
  AttachMoney,
  Visibility,
} from "@mui/icons-material";

const DashboardCard = ({ title, value, icon, color }: any) => (
  <Card
    sx={{
      height: "100%",
      background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
      border: `1px solid ${color}`,
    }}
  >
    <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography color="textSecondary" gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="h4" component="div" sx={{ color: color }}>
            {value}
          </Typography>
        </Box>
        <Box sx={{ color: color, fontSize: "3rem" }}>
          {icon}
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

export default function BackOfficeDashboard() {
  const dashboardData = [
    {
      title: "Propiedades Totales",
      value: "1,234",
      icon: <Home fontSize="inherit" />,
      color: "#1976d2",
    },
    {
      title: "Usuarios Registrados",
      value: "567",
      icon: <People fontSize="inherit" />,
      color: "#388e3c",
    },
    {
      title: "Ventas del Mes",
      value: "$2.5M",
      icon: <AttachMoney fontSize="inherit" />,
      color: "#f57c00",
    },
    {
      title: "Visitas Totales",
      value: "12,890",
      icon: <Visibility fontSize="inherit" />,
      color: "#7b1fa2",
    },
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Dashboard
      </Typography>
      
      {/* Dashboard Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {dashboardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <DashboardCard {...item} />
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: "400px" }}>
            <Typography variant="h6" gutterBottom>
              Actividad Reciente
            </Typography>
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              height: "300px",
              color: "#666"
            }}>
              <Typography>
                Gráfico de actividad reciente (integrar con Chart.js o similar)
              </Typography>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: "400px" }}>
            <Typography variant="h6" gutterBottom>
              Resumen Rápido
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Propiedades Pendientes
                </Typography>
                <Typography variant="h6">23</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Consultas Nuevas
                </Typography>
                <Typography variant="h6">15</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Agentes Activos
                </Typography>
                <Typography variant="h6">8</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Rendimiento del Mes
                </Typography>
                <Typography variant="h6" sx={{ color: "#388e3c" }}>
                  +12%
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
