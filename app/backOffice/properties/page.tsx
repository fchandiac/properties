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
  Schedule,
} from "@mui/icons-material";

// Mock data for properties
const mockProperties = [
  {
    id: 1,
    title: "Casa en Las Condes",
    type: "Casa",
    operation: "Venta", // Nuevo campo
    status: "Activa",
    price: 150000000,
    uf: 3902,
    address: "Las Condes, Santiago",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    agent: "Juan Pérez",
    created: "2024-01-15",
    photos: [
      "/public/prop.png",
      "/public/prop.png"
    ],
    history: [
      { date: "2024-01-10", field: "precio", oldValue: 160000000, newValue: 150000000 },
      { date: "2024-01-12", field: "estado", oldValue: "Pendiente", newValue: "Activa" },
    ],
  },
  {
    id: 2,
    title: "Departamento en Providencia",
    type: "Departamento",
    operation: "Arriendo", // Nuevo campo
    status: "Vendida",
    price: 95000000,
    uf: 2470,
    address: "Providencia, Santiago",
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    agent: "María González",
    created: "2024-01-10",
    photos: [
      "/public/prop.png"
    ],
    history: [
      { date: "2024-01-05", field: "estado", oldValue: "Pendiente", newValue: "Vendida" },
    ],
  },
  {
    id: 3,
    title: "Casa en Ñuñoa",
    type: "Casa",
    operation: "Venta", // Nuevo campo
    status: "Pendiente",
    price: 120000000,
    uf: 3121,
    address: "Ñuñoa, Santiago",
    bedrooms: 4,
    bathrooms: 3,
    area: 150,
    agent: "Carlos Rodríguez",
    created: "2024-01-08",
    photos: [],
    history: [],
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
    operation: "Venta", // Nuevo campo
    status: "Activa",
    price: "",
    uf: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    agent: "",
    photos: [] as (string | File)[], // Nuevo campo
  });
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    operation: '',
    address: '',
    startDate: '',
    endDate: '',
  });
  const [properties] = useState(mockProperties);
  const [historyDialogOpen, setHistoryDialogOpen] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState<any[]>([]);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [viewingProperty, setViewingProperty] = useState<any>(null);

  const handleOpenDialog = (property?: any) => {
    if (property) {
      setEditingProperty(property);
      setFormData({
        title: property.title,
        type: property.type,
        operation: property.operation, // Nuevo campo
        status: property.status,
        price: property.price.toString(),
        uf: property.uf.toString(),
        address: property.address,
        bedrooms: property.bedrooms.toString(),
        bathrooms: property.bathrooms.toString(),
        area: property.area.toString(),
        agent: property.agent,
        photos: property.photos || [],
      });
      setPhotoPreviews(property.photos || []);
    } else {
      setEditingProperty(null);
      setFormData({
        title: "",
        type: "",
        operation: "Venta", // Nuevo campo
        status: "Activa",
        price: "",
        uf: "",
        address: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        agent: "",
        photos: [],
      });
      setPhotoPreviews([]);
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

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleAddPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const newPreviews: string[] = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files],
    }));
  };

  const handleRemovePhoto = (idx: number) => {
    setPhotoPreviews((prev) => prev.filter((_, i) => i !== idx));
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== idx),
    }));
  };

  const handleOpenHistory = (property: any) => {
    setSelectedHistory(property.history || []);
    setHistoryDialogOpen(true);
  };
  const handleCloseHistory = () => {
    setHistoryDialogOpen(false);
    setSelectedHistory([]);
  };

  const handleViewProperty = (property: any) => {
    setViewingProperty(property);
    setViewDialogOpen(true);
  };
  const handleCloseView = () => {
    setViewDialogOpen(false);
    setViewingProperty(null);
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.agent.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesOperation = filters.operation ? property.operation === filters.operation : true;
    const matchesAddress = filters.address ? property.address.toLowerCase().includes(filters.address.toLowerCase()) : true;
    const matchesMinPrice = filters.minPrice ? property.price >= parseInt(filters.minPrice) : true;
    const matchesMaxPrice = filters.maxPrice ? property.price <= parseInt(filters.maxPrice) : true;
    const matchesStartDate = filters.startDate ? property.created >= filters.startDate : true;
    const matchesEndDate = filters.endDate ? property.created <= filters.endDate : true;
    return (
      matchesSearch &&
      matchesOperation &&
      matchesAddress &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesStartDate &&
      matchesEndDate
    );
  });

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
        <Stack direction="column" spacing={2}>
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
            sx={{ minWidth: 200 }}
          />
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Operación</InputLabel>
              <Select
                value={filters.operation}
                label="Operación"
                onChange={(e) => handleFilterChange('operation', e.target.value)}
              >
                <MenuItem value="">Todas</MenuItem>
                <MenuItem value="Venta">Venta</MenuItem>
                <MenuItem value="Arriendo">Arriendo</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Ubicación"
              size="small"
              value={filters.address}
              onChange={(e) => handleFilterChange('address', e.target.value)}
              sx={{ minWidth: 140 }}
            />
            <TextField
              label="Precio mín."
              size="small"
              type="number"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              sx={{ minWidth: 110 }}
            />
            <TextField
              label="Precio máx."
              size="small"
              type="number"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              sx={{ minWidth: 110 }}
            />
            <TextField
              label="Fecha desde"
              size="small"
              type="date"
              value={filters.startDate}
              onChange={(e) => handleFilterChange('startDate', e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ minWidth: 140 }}
            />
            <TextField
              label="Fecha hasta"
              size="small"
              type="date"
              value={filters.endDate}
              onChange={(e) => handleFilterChange('endDate', e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ minWidth: 140 }}
            />
          </Stack>
        </Stack>
      </Paper>

      {/* Properties Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell><strong>Título</strong></TableCell>
              <TableCell><strong>Tipo</strong></TableCell>
              <TableCell><strong>Operación</strong></TableCell>
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
                <TableCell>{property.operation}</TableCell>
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
                    <IconButton size="small" color="primary" onClick={() => handleViewProperty(property)}>
                      <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="info" onClick={() => handleOpenDialog(property)}>
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <Delete fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="secondary" onClick={() => handleOpenHistory(property)}>
                      <Schedule fontSize="small" />
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
                <InputLabel>Operación</InputLabel>
                <Select
                  value={formData.operation}
                  onChange={(e) => handleFormChange("operation", e.target.value)}
                  label="Operación"
                >
                  <MenuItem value="Venta">Venta</MenuItem>
                  <MenuItem value="Arriendo">Arriendo</MenuItem>
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
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Fotos de la propiedad
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
                {photoPreviews.length === 0 && (
                  <Typography variant="caption" color="textSecondary">
                    No hay fotos cargadas.
                  </Typography>
                )}
                {photoPreviews.map((src, idx) => (
                  <Box key={idx} sx={{ position: 'relative', display: 'inline-block' }}>
                    <img
                      src={src}
                      alt={`Foto ${idx + 1}`}
                      style={{ width: 100, height: 70, objectFit: 'cover', borderRadius: 4, border: '1px solid #ccc' }}
                    />
                    <IconButton
                      size="small"
                      color="error"
                      sx={{ position: 'absolute', top: 0, right: 0 }}
                      onClick={() => handleRemovePhoto(idx)}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Stack>
              <Button variant="outlined" component="label">
                Agregar fotos
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  onChange={handleAddPhotos}
                />
              </Button>
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

      {/* Historial de cambios Dialog */}
      <Dialog open={historyDialogOpen} onClose={handleCloseHistory} maxWidth="sm" fullWidth>
        <DialogTitle>Historial de Cambios</DialogTitle>
        <DialogContent>
          {selectedHistory.length === 0 ? (
            <Typography variant="body2" color="textSecondary">No hay historial para esta propiedad.</Typography>
          ) : (
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Fecha</strong></TableCell>
                  <TableCell><strong>Campo</strong></TableCell>
                  <TableCell><strong>Valor Anterior</strong></TableCell>
                  <TableCell><strong>Valor Nuevo</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedHistory.map((h, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{h.date}</TableCell>
                    <TableCell>{h.field}</TableCell>
                    <TableCell>{h.oldValue}</TableCell>
                    <TableCell>{h.newValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseHistory}>Cerrar</Button>
        </DialogActions>
      </Dialog>

      {/* Visualización de Propiedad Dialog */}
      <Dialog open={viewDialogOpen} onClose={handleCloseView} maxWidth="md" fullWidth>
        <DialogTitle>Detalle de la Propiedad</DialogTitle>
        <DialogContent>
          {viewingProperty && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>{viewingProperty.title}</Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                {(viewingProperty.photos && viewingProperty.photos.length > 0) ? (
                  viewingProperty.photos.map((src: string, idx: number) => (
                    <Box key={idx} sx={{ position: 'relative', display: 'inline-block' }}>
                      <img
                        src={src}
                        alt={`Foto ${idx + 1}`}
                        style={{ width: 120, height: 90, objectFit: 'cover', borderRadius: 4, border: '1px solid #ccc' }}
                      />
                    </Box>
                  ))
                ) : (
                  <Typography variant="caption" color="textSecondary">
                    No hay fotos para esta propiedad.
                  </Typography>
                )}
              </Stack>
              <Typography variant="body2"><strong>Tipo:</strong> {viewingProperty.type}</Typography>
              <Typography variant="body2"><strong>Operación:</strong> {viewingProperty.operation}</Typography>
              <Typography variant="body2"><strong>Estado:</strong> {viewingProperty.status}</Typography>
              <Typography variant="body2"><strong>Precio:</strong> ${viewingProperty.price}</Typography>
              <Typography variant="body2"><strong>UF:</strong> {viewingProperty.uf}</Typography>
              <Typography variant="body2"><strong>Dirección:</strong> {viewingProperty.address}</Typography>
              <Typography variant="body2"><strong>Dormitorios:</strong> {viewingProperty.bedrooms}</Typography>
              <Typography variant="body2"><strong>Baños:</strong> {viewingProperty.bathrooms}</Typography>
              <Typography variant="body2"><strong>Área:</strong> {viewingProperty.area} m²</Typography>
              <Typography variant="body2"><strong>Agente:</strong> {viewingProperty.agent}</Typography>
              <Typography variant="body2"><strong>Fecha:</strong> {viewingProperty.created}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseView}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
