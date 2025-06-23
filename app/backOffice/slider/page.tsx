"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Chip,
  Fab,
} from "@mui/material";
import {
  Add,
  Edit,
  Delete,
  DragIndicator,
  Link as LinkIcon,
  Visibility,
  VisibilityOff,
  CalendarToday,
  Image as ImageIcon,
} from "@mui/icons-material";

// Mock data for slider items
const mockSliderItems = [
  {
    id: 1,
    title: "Propiedades Premium en Las Condes",
    description: "Descubre nuestras exclusivas propiedades en el sector más prestigioso de Santiago",
    image: "https://via.placeholder.com/800x400/1976d2/white?text=Las+Condes",
    link: "/userApp/properties?location=las-condes",
    linkType: "internal",
    order: 1,
    active: true,
    startDate: "2024-01-01",
    endDate: null,
    clicks: 245,
    impressions: 1890,
  },
  {
    id: 2,
    title: "¡Vende tu Propiedad con Nosotros!",
    description: "Obtén la mejor valorización y vende rápido con nuestro equipo de expertos",
    image: "https://via.placeholder.com/800x400/388e3c/white?text=Vende+Ahora",
    link: "/userApp/sell",
    linkType: "internal",
    order: 2,
    active: true,
    startDate: "2024-01-15",
    endDate: "2024-03-15",
    clicks: 189,
    impressions: 1456,
  },
  {
    id: 3,
    title: "Departamentos Modernos en Providencia",
    description: "Encuentra tu hogar ideal en Providencia con todas las comodidades",
    image: "https://via.placeholder.com/800x400/f57c00/white?text=Providencia",
    link: "/userApp/properties?type=apartment&location=providencia",
    linkType: "internal",
    order: 3,
    active: false,
    startDate: "2024-01-20",
    endDate: null,
    clicks: 67,
    impressions: 890,
  },
  {
    id: 4,
    title: "Promoción Especial Febrero",
    description: "Aprovecha nuestras ofertas especiales del mes",
    image: "https://via.placeholder.com/800x400/7b1fa2/white?text=Promoción",
    link: "https://www.example.com/promocion",
    linkType: "external",
    order: 4,
    active: true,
    startDate: "2024-02-01",
    endDate: "2024-02-29",
    clicks: 123,
    impressions: 567,
  },
];

const getLinkTypeColor = (linkType: string) => {
  return linkType === "internal" ? "primary" : "secondary";
};

export default function SliderManagement() {
  const [sliderItems, setSliderItems] = useState(mockSliderItems);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [actionType, setActionType] = useState<"add" | "edit" | "view">("add");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    linkType: "internal",
    active: true,
    startDate: "",
    endDate: "",
  });

  const handleAddItem = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      link: "",
      linkType: "internal",
      active: true,
      startDate: "",
      endDate: "",
    });
    setActionType("add");
    setOpenDialog(true);
  };

  const handleEditItem = (item: any) => {
    setSelectedItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      image: item.image,
      link: item.link,
      linkType: item.linkType,
      active: item.active,
      startDate: item.startDate,
      endDate: item.endDate || "",
    });
    setActionType("edit");
    setOpenDialog(true);
  };

  const handleViewItem = (item: any) => {
    setSelectedItem(item);
    setActionType("view");
    setOpenDialog(true);
  };

  const handleToggleActive = (id: number) => {
    setSliderItems(prev => prev.map(item => 
      item.id === id ? { ...item, active: !item.active } : item
    ));
  };

  const handleDeleteItem = (id: number) => {
    setSliderItems(prev => prev.filter(item => item.id !== id));
  };

  const handleMoveUp = (id: number) => {
    setSliderItems(prev => {
      const items = [...prev];
      const index = items.findIndex(item => item.id === id);
      if (index > 0) {
        [items[index], items[index - 1]] = [items[index - 1], items[index]];
        // Update order values
        items.forEach((item, idx) => {
          item.order = idx + 1;
        });
      }
      return items;
    });
  };

  const handleMoveDown = (id: number) => {
    setSliderItems(prev => {
      const items = [...prev];
      const index = items.findIndex(item => item.id === id);
      if (index < items.length - 1) {
        [items[index], items[index + 1]] = [items[index + 1], items[index]];
        // Update order values
        items.forEach((item, idx) => {
          item.order = idx + 1;
        });
      }
      return items;
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const handleSave = () => {
    if (actionType === "add") {
      const newItem = {
        ...formData,
        id: Math.max(...sliderItems.map(item => item.id)) + 1,
        order: sliderItems.length + 1,
        clicks: 0,
        impressions: 0,
      };
      setSliderItems(prev => [...prev, newItem]);
    } else if (actionType === "edit" && selectedItem) {
      setSliderItems(prev => prev.map(item => 
        item.id === selectedItem.id ? { ...item, ...formData } : item
      ));
    }
    handleCloseDialog();
  };

  const activeItems = sliderItems.filter(item => item.active).length;
  const totalClicks = sliderItems.reduce((acc, item) => acc + item.clicks, 0);
  const totalImpressions = sliderItems.reduce((acc, item) => acc + item.impressions, 0);
  const ctr = totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(2) : "0";

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4" component="h1">
          Gestión del Slider Principal
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={handleAddItem}
        >
          Nuevo Slide
        </Button>
      </Stack>

      {/* Statistics */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" color="primary.main">
              {sliderItems.length}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Total de Slides
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" color="success.main">
              {activeItems}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Slides Activos
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" color="info.main">
              {totalClicks.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Clicks Totales
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" color="warning.main">
              {ctr}%
            </Typography>
            <Typography variant="body2" color="textSecondary">
              CTR Promedio
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Slider Items Grid */}
      <Grid container spacing={3}>
        {sliderItems
          .sort((a, b) => a.order - b.order)
          .map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                opacity: item.active ? 1 : 0.6,
                border: item.active ? "2px solid #4caf50" : "1px solid #e0e0e0",
              }}
            >
              {/* Order and Status Indicators */}
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  zIndex: 1,
                }}
              >
                <Chip
                  label={`#${item.order}`}
                  color="primary"
                  size="small"
                  sx={{ fontWeight: "bold" }}
                />
              </Box>
              
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 1,
                }}
              >
                <Stack spacing={1}>
                  <Chip
                    label={item.active ? "Activo" : "Inactivo"}
                    color={item.active ? "success" : "error"}
                    size="small"
                  />
                  <Chip
                    label={item.linkType === "internal" ? "Interno" : "Externo"}
                    color={getLinkTypeColor(item.linkType) as any}
                    size="small"
                  />
                </Stack>
              </Box>

              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.title}
                </Typography>
                
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {item.description}
                </Typography>

                {/* Link Preview */}
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                  <LinkIcon fontSize="small" color="action" />
                  <Typography variant="caption" color="textSecondary">
                    {item.link.length > 40 ? `${item.link.substring(0, 40)}...` : item.link}
                  </Typography>
                </Stack>

                {/* Date Range */}
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CalendarToday fontSize="small" color="action" />
                    <Typography variant="caption">
                      Desde: {item.startDate}
                    </Typography>
                  </Stack>
                  {item.endDate && (
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CalendarToday fontSize="small" color="action" />
                      <Typography variant="caption">
                        Hasta: {item.endDate}
                      </Typography>
                    </Stack>
                  )}
                </Stack>

                {/* Statistics */}
                <Paper sx={{ p: 1, mt: 2, bgcolor: "#f8f9fa" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="caption" color="textSecondary">
                        Clicks
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {item.clicks}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="caption" color="textSecondary">
                        Impresiones
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {item.impressions}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                {/* Order Controls */}
                <Stack direction="row" spacing={1}>
                  <IconButton
                    size="small"
                    onClick={() => handleMoveUp(item.id)}
                    disabled={index === 0}
                  >
                    <DragIndicator fontSize="small" />
                  </IconButton>
                </Stack>

                {/* Action Controls */}
                <Stack direction="row" spacing={1}>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleViewItem(item)}
                  >
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="info"
                    onClick={() => handleEditItem(item)}
                  >
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color={item.active ? "warning" : "success"}
                    onClick={() => handleToggleActive(item.id)}
                  >
                    {item.active ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit/View Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {actionType === "add" && "Nuevo Slide"}
          {actionType === "edit" && "Editar Slide"}
          {actionType === "view" && "Ver Slide"}
        </DialogTitle>
        <DialogContent>
          {actionType === "view" && selectedItem ? (
            <Box sx={{ mt: 1 }}>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "8px" }}
              />
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                {selectedItem.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedItem.description}
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="body2" color="textSecondary">
                    Enlace
                  </Typography>
                  <Typography variant="body1">{selectedItem.link}</Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Tipo de Enlace
                    </Typography>
                    <Chip
                      label={selectedItem.linkType === "internal" ? "Interno" : "Externo"}
                      color={getLinkTypeColor(selectedItem.linkType) as any}
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Estado
                    </Typography>
                    <Chip
                      label={selectedItem.active ? "Activo" : "Inactivo"}
                      color={selectedItem.active ? "success" : "error"}
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Stack>
            </Box>
          ) : (
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  label="Título del Slide"
                  fullWidth
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Descripción"
                  fullWidth
                  multiline
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="URL de la Imagen"
                  fullWidth
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Enlace de Destino"
                  fullWidth
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="/userApp/properties o https://ejemplo.com"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Tipo de Enlace</InputLabel>
                  <Select
                    value={formData.linkType}
                    label="Tipo de Enlace"
                    onChange={(e) => setFormData({ ...formData, linkType: e.target.value })}
                  >
                    <MenuItem value="internal">Interno</MenuItem>
                    <MenuItem value="external">Externo</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Fecha de Inicio"
                  type="date"
                  fullWidth
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Fecha de Fin (opcional)"
                  type="date"
                  fullWidth
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText="Dejar vacío para sin fecha límite"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.active}
                      onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                    />
                  }
                  label="Activar slide inmediatamente"
                />
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>
            {actionType === "view" ? "Cerrar" : "Cancelar"}
          </Button>
          {actionType !== "view" && (
            <Button onClick={handleSave} variant="contained">
              {actionType === "add" ? "Crear Slide" : "Actualizar"}
            </Button>
          )}
        </DialogActions>
      </Dialog>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add slide"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
        onClick={handleAddItem}
      >
        <Add />
      </Fab>
    </Box>
  );
}
