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
  Avatar,
  Stack,
  Chip,
  LinearProgress,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Add,
  Search,
  Star,
  TrendingUp,
  Phone,
  Email,
  WhatsApp,
} from "@mui/icons-material";

// Mock data for agents
const mockAgents = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@inmobiliaria.com",
    phone: "+56 9 1234 5678",
    avatar: "JP",
    status: "Activo",
    propertiesManaged: 23,
    salesThisMonth: 5,
    rating: 4.8,
    experience: "3 años",
    specialties: ["Casas", "Departamentos"],
    performance: 92,
  },
  {
    id: 2,
    name: "María González",
    email: "maria.gonzalez@inmobiliaria.com",
    phone: "+56 9 8765 4321",
    avatar: "MG",
    status: "Activo",
    propertiesManaged: 31,
    salesThisMonth: 8,
    rating: 4.9,
    experience: "5 años",
    specialties: ["Oficinas", "Comercial"],
    performance: 96,
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    email: "carlos.rodriguez@inmobiliaria.com",
    phone: "+56 9 5555 0000",
    avatar: "CR",
    status: "Vacaciones",
    propertiesManaged: 18,
    salesThisMonth: 2,
    rating: 4.6,
    experience: "2 años",
    specialties: ["Terrenos", "Inversión"],
    performance: 78,
  },
  {
    id: 4,
    name: "Ana López",
    email: "ana.lopez@inmobiliaria.com",
    phone: "+56 9 7777 8888",
    avatar: "AL",
    status: "Activo",
    propertiesManaged: 45,
    salesThisMonth: 12,
    rating: 5.0,
    experience: "7 años",
    specialties: ["Lujo", "Premium"],
    performance: 98,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Activo":
      return "success";
    case "Vacaciones":
      return "warning";
    case "Inactivo":
      return "error";
    default:
      return "default";
  }
};

const getPerformanceColor = (performance: number) => {
  if (performance >= 90) return "success";
  if (performance >= 70) return "info";
  if (performance >= 50) return "warning";
  return "error";
};

export default function AgentsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [agents] = useState(mockAgents);

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4" component="h1">
          Gestión de Agentes
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
        >
          Nuevo Agente
        </Button>
      </Stack>

      {/* Search */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          placeholder="Buscar agentes por nombre o especialidad..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Paper>

      {/* Agents Grid */}
      <Grid container spacing={3}>
        {filteredAgents.map((agent) => (
          <Grid item xs={12} sm={6} md={4} key={agent.id}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Stack spacing={2}>
                  {/* Header with Avatar and Status */}
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          bgcolor: "#1976d2",
                          width: 56,
                          height: 56,
                          fontSize: "1.5rem",
                        }}
                      >
                        {agent.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          {agent.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {agent.experience} de experiencia
                        </Typography>
                      </Box>
                    </Stack>
                    <Chip
                      label={agent.status}
                      color={getStatusColor(agent.status) as any}
                      size="small"
                    />
                  </Stack>

                  {/* Contact Info */}
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Email fontSize="small" color="action" />
                      <Typography variant="body2">{agent.email}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Phone fontSize="small" color="action" />
                      <Typography variant="body2">{agent.phone}</Typography>
                    </Stack>
                  </Stack>

                  {/* Rating */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Star sx={{ color: "#ffa726" }} />
                    <Typography variant="body2">
                      {agent.rating} ({agent.propertiesManaged} propiedades)
                    </Typography>
                  </Stack>

                  {/* Performance */}
                  <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                      <Typography variant="body2">Rendimiento</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {agent.performance}%
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={agent.performance}
                      color={getPerformanceColor(agent.performance) as any}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>

                  {/* Stats */}
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#e3f2fd" }}>
                        <Typography variant="h6" color="primary">
                          {agent.salesThisMonth}
                        </Typography>
                        <Typography variant="caption">
                          Ventas este mes
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper sx={{ p: 1, textAlign: "center", bgcolor: "#e8f5e8" }}>
                        <Typography variant="h6" color="success.main">
                          {agent.propertiesManaged}
                        </Typography>
                        <Typography variant="caption">
                          Propiedades
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>

                  {/* Specialties */}
                  <Box>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      Especialidades:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {agent.specialties.map((specialty, index) => (
                        <Chip key={index} label={specialty} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </Box>

                  {/* Actions */}
                  <Stack direction="row" spacing={1} justifyContent="space-between">
                    <Button size="small" variant="outlined" fullWidth>
                      Ver Perfil
                    </Button>
                    <Button size="small" variant="contained" fullWidth>
                      Contactar
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
