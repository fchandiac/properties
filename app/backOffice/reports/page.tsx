"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  Divider,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  Assessment,
  PictureAsPdf,
  GetApp,
  DateRange,
} from "@mui/icons-material";

const ReportCard = ({ title, value, subtitle, trend, color }: any) => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          {trend > 0 ? (
            <TrendingUp sx={{ color: "success.main" }} />
          ) : (
            <TrendingDown sx={{ color: "error.main" }} />
          )}
        </Stack>
        <Typography variant="h4" component="div" sx={{ color: color }}>
          {value}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {subtitle}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: trend > 0 ? "success.main" : "error.main",
            fontWeight: "bold",
          }}
        >
          {trend > 0 ? "+" : ""}{trend}% vs mes anterior
        </Typography>
      </Stack>
    </CardContent>
  </Card>
);

export default function Reports() {
  const [period, setPeriod] = useState("thisMonth");

  const reportData = [
    {
      title: "Ventas Totales",
      value: "$2.5M",
      subtitle: "156 propiedades vendidas",
      trend: 12.5,
      color: "#1976d2",
    },
    {
      title: "Nuevos Clientes",
      value: "89",
      subtitle: "Registros este mes",
      trend: 8.3,
      color: "#388e3c",
    },
    {
      title: "Propiedades Activas",
      value: "234",
      subtitle: "En el mercado",
      trend: -2.1,
      color: "#f57c00",
    },
    {
      title: "Tiempo Promedio de Venta",
      value: "45 días",
      subtitle: "Desde publicación",
      trend: -15.2,
      color: "#7b1fa2",
    },
  ];

  const topAgents = [
    { name: "María González", sales: 12, revenue: "$850K" },
    { name: "Juan Pérez", sales: 8, revenue: "$520K" },
    { name: "Ana López", sales: 6, revenue: "$420K" },
    { name: "Carlos Rodríguez", sales: 4, revenue: "$280K" },
  ];

  const topProperties = [
    { type: "Departamento", count: 45, percentage: 38 },
    { type: "Casa", count: 32, percentage: 27 },
    { type: "Oficina", count: 28, percentage: 23 },
    { type: "Terreno", count: 14, percentage: 12 },
  ];

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4" component="h1">
          Reportes y Análisis
        </Typography>
        <Stack direction="row" spacing={2}>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Período</InputLabel>
            <Select
              value={period}
              label="Período"
              onChange={(e) => setPeriod(e.target.value)}
            >
              <MenuItem value="thisWeek">Esta Semana</MenuItem>
              <MenuItem value="thisMonth">Este Mes</MenuItem>
              <MenuItem value="lastMonth">Mes Anterior</MenuItem>
              <MenuItem value="thisQuarter">Este Trimestre</MenuItem>
              <MenuItem value="thisYear">Este Año</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            startIcon={<PictureAsPdf />}
          >
            Exportar PDF
          </Button>
          <Button
            variant="contained"
            startIcon={<GetApp />}
          >
            Descargar Excel
          </Button>
        </Stack>
      </Stack>

      {/* Key Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {reportData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ReportCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Sales Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: "400px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6">
                Tendencia de Ventas
              </Typography>
              <Button size="small" startIcon={<Assessment />}>
                Ver Detalle
              </Button>
            </Stack>
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              height: "300px",
              color: "#666",
              border: "2px dashed #ddd",
              borderRadius: 2,
            }}>
              <Typography>
                Gráfico de tendencias de ventas
                <br />
                (Integrar con Chart.js, Recharts o similar)
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Top Agents */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: "400px" }}>
            <Typography variant="h6" gutterBottom>
              Top Agentes del Mes
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              {topAgents.map((agent, index) => (
                <Box key={index}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="body2" fontWeight="medium">
                        {index + 1}. {agent.name}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {agent.sales} ventas
                      </Typography>
                    </Box>
                    <Typography variant="body2" fontWeight="bold" color="primary">
                      {agent.revenue}
                    </Typography>
                  </Stack>
                  {index < topAgents.length - 1 && <Divider sx={{ mt: 1 }} />}
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* Property Types Distribution */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Distribución por Tipo de Propiedad
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              {topProperties.map((property, index) => (
                <Box key={index}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2">
                      {property.type}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {property.count} ({property.percentage}%)
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      width: "100%",
                      height: 8,
                      backgroundColor: "#e0e0e0",
                      borderRadius: 4,
                    }}
                  >
                    <Box
                      sx={{
                        width: `${property.percentage}%`,
                        height: "100%",
                        backgroundColor: ["#1976d2", "#388e3c", "#f57c00", "#7b1fa2"][index],
                        borderRadius: 4,
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* Monthly Revenue */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Ingresos por Mes
            </Typography>
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              height: "200px",
              color: "#666",
              border: "2px dashed #ddd",
              borderRadius: 2,
            }}>
              <Typography textAlign="center">
                Gráfico de ingresos mensuales
                <br />
                (Integrar con librería de gráficos)
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
