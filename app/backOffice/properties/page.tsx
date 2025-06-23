"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Stack,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Edit,
  Delete,
  Visibility,
  Search,
  Add,
  FilterList,
} from "@mui/icons-material";

// Mock data for properties
const mockProperties = [
  {
    id: 1,
    title: "Casa en Las Condes",
    type: "Casa",
    status: "Activa",
    price: 150000000,
    uf: 3902,
    address: "Las Condes, Santiago",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    agent: "Juan Pérez",
    created: "2024-01-15",
  },
  {
    id: 2,
    title: "Departamento en Providencia",
    type: "Departamento",
    status: "Vendida",
    price: 95000000,
    uf: 2470,
    address: "Providencia, Santiago",
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    agent: "María González",
    created: "2024-01-10",
  },
  {
    id: 3,
    title: "Casa en Ñuñoa",
    type: "Casa",
    status: "Pendiente",
    price: 120000000,
    uf: 3121,
    address: "Ñuñoa, Santiago",
    bedrooms: 4,
    bathrooms: 3,
    area: 150,
    agent: "Carlos Rodríguez",
    created: "2024-01-08",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Activa":
      return "success";
    case "Vendida":
      return "primary";
    case "Pendiente":
      return "warning";
    case "Inactiva":
      return "error";
    default:
      return "default";
  }
};

export default function PropertiesManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProperty, setEditingProperty] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    status: "Activa",
    price: "",
    uf: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    agent: "",
  });
  const [properties] = useState(mockProperties);

  const handleOpenDialog = (property?: any) => {
    if (property) {
      setEditingProperty(property);
      setFormData({
        title: property.title,
        type: property.type,
        status: property.status,
        price: property.price.toString(),
        uf: property.uf.toString(),
        address: property.address,
        bedrooms: property.bedrooms.toString(),
        bathrooms: property.bathrooms.toString(),
        area: property.area.toString(),
        agent: property.agent,
      });
    } else {
      setEditingProperty(null);
      setFormData({
        title: "",
        type: "",
        status: "Activa",
        price: "",
        uf: "",
        address: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        agent: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingProperty(null);
  };

  const handleSaveProperty = () => {
    // Here you would typically make an API call
    console.log("Saving property:", formData);
    handleCloseDialog();
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.agent.toLowerCase().includes(searchTerm.toLowerCase())
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
          Gestión de Propiedades
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={() => handleOpenDialog()}
        >
          Nueva Propiedad
        </Button>
      </Stack>

      {/* Search and Filters */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            placeholder="Buscar propiedades..."
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
            sx={{ flexGrow: 1 }}
          />
          <Button
            variant="outlined"
            startIcon={<FilterList />}
          >
            Filtros
          </Button>
        </Stack>
      </Paper>

      {/* Properties Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell><strong>Título</strong></TableCell>
              <TableCell><strong>Tipo</strong></TableCell>
              <TableCell><strong>Estado</strong></TableCell>
              <TableCell><strong>Precio</strong></TableCell>
              <TableCell><strong>Ubicación</strong></TableCell>
              <TableCell><strong>Detalles</strong></TableCell>
              <TableCell><strong>Agente</strong></TableCell>
              <TableCell><strong>Fecha</strong></TableCell>
              <TableCell align="center"><strong>Acciones</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProperties.map((property) => (
              <TableRow key={property.id} hover>
                <TableCell>
                  <Typography variant="body2" fontWeight="medium">
                    {property.title}
                  </Typography>
                </TableCell>
                <TableCell>{property.type}</TableCell>
                <TableCell>
                  <Chip
                    label={property.status}
                    color={getStatusColor(property.status) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    UF {property.uf.toLocaleString()}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    ${property.price.toLocaleString()}
                  </Typography>
                </TableCell>
                <TableCell>{property.address}</TableCell>
                <TableCell>
                  <Typography variant="caption">
                    {property.bedrooms}D / {property.bathrooms}B / {property.area}m²
                  </Typography>
                </TableCell>
                <TableCell>{property.agent}</TableCell>
                <TableCell>{property.created}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1}>
                    <IconButton size="small" color="primary">
                      <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="info" onClick={() => handleOpenDialog(property)}>
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <Delete fontSize="small" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
        onClick={() => handleOpenDialog()}
      >
        <Add />
      </Fab>

      {/* Property Form Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {editingProperty ? "Editar Propiedad" : "Nueva Propiedad"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Título"
                variant="outlined"
                fullWidth
                value={formData.title}
                onChange={(e) => handleFormChange("title", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Tipo</InputLabel>
                <Select
                  value={formData.type}
                  onChange={(e) => handleFormChange("type", e.target.value)}
                  label="Tipo"
                >
                  <MenuItem value="Casa">Casa</MenuItem>
                  <MenuItem value="Departamento">Departamento</MenuItem>
                  <MenuItem value="Oficina">Oficina</MenuItem>
                  <MenuItem value="Local Comercial">Local Comercial</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select
                  value={formData.status}
                  onChange={(e) => handleFormChange("status", e.target.value)}
                  label="Estado"
                >
                  <MenuItem value="Activa">Activa</MenuItem>
                  <MenuItem value="Vendida">Vendida</MenuItem>
                  <MenuItem value="Pendiente">Pendiente</MenuItem>
                  <MenuItem value="Inactiva">Inactiva</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Precio"
                variant="outlined"
                fullWidth
                value={formData.price}
                onChange={(e) => handleFormChange("price", e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="UF"
                variant="outlined"
                fullWidth
                value={formData.uf}
                onChange={(e) => handleFormChange("uf", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Dirección"
                variant="outlined"
                fullWidth
                value={formData.address}
                onChange={(e) => handleFormChange("address", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Dormitorios"
                variant="outlined"
                fullWidth
                value={formData.bedrooms}
                onChange={(e) => handleFormChange("bedrooms", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Baños"
                variant="outlined"
                fullWidth
                value={formData.bathrooms}
                onChange={(e) => handleFormChange("bathrooms", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Área (m²)"
                variant="outlined"
                fullWidth
                value={formData.area}
                onChange={(e) => handleFormChange("area", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Agente"
                variant="outlined"
                fullWidth
                value={formData.agent}
                onChange={(e) => handleFormChange("agent", e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSaveProperty} color="primary">
            {editingProperty ? "Guardar Cambios" : "Crear Propiedad"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
