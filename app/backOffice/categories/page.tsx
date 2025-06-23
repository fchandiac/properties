"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
} from "@mui/material";
import {
  Edit,
  Delete,
  Add,
  Home,
  Apartment,
  Business,
  Terrain,
} from "@mui/icons-material";

// Mock data for categories
const mockCategories = [
  {
    id: 1,
    name: "Casa",
    description: "Propiedades tipo casa unifamiliar",
    icon: <Home />,
    propertiesCount: 156,
    color: "#1976d2",
    active: true,
  },
  {
    id: 2,
    name: "Departamento",
    description: "Apartamentos y departamentos",
    icon: <Apartment />,
    propertiesCount: 298,
    color: "#388e3c",
    active: true,
  },
  {
    id: 3,
    name: "Oficina",
    description: "Espacios comerciales y oficinas",
    icon: <Business />,
    propertiesCount: 67,
    color: "#f57c00",
    active: true,
  },
  {
    id: 4,
    name: "Terreno",
    description: "Terrenos y lotes para construcción",
    icon: <Terrain />,
    propertiesCount: 45,
    color: "#7b1fa2",
    active: false,
  },
];

export default function CategoriesManagement() {
  const [categories] = useState(mockCategories);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleAddCategory = () => {
    setEditingCategory(null);
    setFormData({ name: "", description: "" });
    setOpenDialog(true);
  };

  const handleEditCategory = (category: any) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingCategory(null);
  };

  const handleSave = () => {
    // Here you would implement the save logic
    console.log("Saving category:", formData);
    handleCloseDialog();
  };

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4" component="h1">
          Tipos de Propiedad
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={handleAddCategory}
        >
          Nueva Categoría
        </Button>
      </Stack>

      {/* Categories Grid */}
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: `2px solid ${category.color}`,
                opacity: category.active ? 1 : 0.6,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box sx={{ color: category.color, fontSize: "2rem" }}>
                      {category.icon}
                    </Box>
                    <Chip
                      label={category.active ? "Activa" : "Inactiva"}
                      color={category.active ? "success" : "default"}
                      size="small"
                    />
                  </Stack>
                  
                  <Typography variant="h6" component="h2" sx={{ color: category.color }}>
                    {category.name}
                  </Typography>
                  
                  <Typography variant="body2" color="textSecondary">
                    {category.description}
                  </Typography>
                  
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: `${category.color}15`,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h4" sx={{ color: category.color }}>
                      {category.propertiesCount}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      Propiedades
                    </Typography>
                  </Paper>
                </Stack>
              </CardContent>
              
              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Button
                  size="small"
                  startIcon={<Edit />}
                  onClick={() => handleEditCategory(category)}
                >
                  Editar
                </Button>
                <IconButton size="small" color="error">
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingCategory ? "Editar Categoría" : "Nueva Categoría"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <TextField
              label="Nombre de la categoría"
              fullWidth
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <TextField
              label="Descripción"
              fullWidth
              multiline
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={handleSave} variant="contained">
            {editingCategory ? "Actualizar" : "Crear"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
