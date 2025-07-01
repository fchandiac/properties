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
  Avatar,
  Rating,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Add,
  Search,
  Edit,
  Delete,
  Visibility,
  CheckCircle,
  Cancel,
  Star,
  Person,
  Home,
  CalendarToday,
} from "@mui/icons-material";

// Mock data for testimonials
const mockTestimonials = [
  {
    id: 1,
    clientName: "Juan Carlos Pérez",
    clientAvatar: "JP",
    rating: 5,
    comment: "Excelente servicio, muy profesionales y me ayudaron a encontrar la casa perfecta para mi familia. El proceso fue rápido y sin complicaciones.",
    serviceType: "Compra",
    propertyTitle: "Casa en Las Condes",
    propertyImage: "https://via.placeholder.com/300x200/1976d2/white?text=Casa",
    agent: "María González",
    date: "2024-01-15",
    status: "Aprobado",
    featured: true,
  },
  {
    id: 2,
    clientName: "Ana María López",
    clientAvatar: "AL",
    rating: 4,
    comment: "Muy buena atención y seguimiento durante todo el proceso de arriendo. Recomiendo totalmente sus servicios.",
    serviceType: "Arriendo",
    propertyTitle: "Departamento en Providencia",
    propertyImage: "https://via.placeholder.com/300x200/388e3c/white?text=Depto",
    agent: "Carlos Rodríguez",
    date: "2024-01-10",
    status: "Pendiente",
    featured: false,
  },
  {
    id: 3,
    clientName: "Roberto Silva",
    clientAvatar: "RS",
    rating: 5,
    comment: "Vendí mi propiedad muy rápido gracias al equipo. Excelente marketing y muy buena negociación.",
    serviceType: "Venta",
    propertyTitle: "Casa en Ñuñoa",
    propertyImage: "https://via.placeholder.com/300x200/f57c00/white?text=Casa",
    agent: "Juan Pérez",
    date: "2024-01-08",
    status: "Aprobado",
    featured: false,
  },
  {
    id: 4,
    clientName: "Carmen Torres",
    clientAvatar: "CT",
    rating: 3,
    comment: "El servicio estuvo bien, aunque hubo algunos retrasos en la comunicación.",
    serviceType: "Compra",
    propertyTitle: "Departamento en Maipú",
    propertyImage: "https://via.placeholder.com/300x200/7b1fa2/white?text=Depto",
    agent: "Ana López",
    date: "2024-01-05",
    status: "Rechazado",
    featured: false,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Aprobado":
      return "success";
    case "Pendiente":
      return "warning";
    case "Rechazado":
      return "error";
    default:
      return "default";
  }
};

const getServiceColor = (serviceType: string) => {
  switch (serviceType) {
    case "Compra":
      return "primary";
    case "Venta":
      return "success";
    case "Arriendo":
      return "info";
    default:
      return "default";
  }
};

export default function TestimonialsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  const [actionType, setActionType] = useState<"add" | "edit" | "view">("add");
  const [formData, setFormData] = useState({
    clientName: "",
    rating: 5,
    comment: "",
    serviceType: "Compra",
    propertyTitle: "",
    agent: "",
    image: null as File | null, // Nuevo campo para la imagen
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const filteredTestimonials = mockTestimonials.filter((testimonial) =>
    testimonial.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.agent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTestimonial = () => {
    setFormData({
      clientName: "",
      rating: 5,
      comment: "",
      serviceType: "Compra",
      propertyTitle: "",
      agent: "",
      image: null,
    });
    setActionType("add");
    setOpenDialog(true);
  };

  const handleEditTestimonial = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setFormData({
      clientName: testimonial.clientName,
      rating: testimonial.rating,
      comment: testimonial.comment,
      serviceType: testimonial.serviceType,
      propertyTitle: testimonial.propertyTitle,
      agent: testimonial.agent,
      image: null,
    });
    setActionType("edit");
    setOpenDialog(true);
  };

  const handleViewTestimonial = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setActionType("view");
    setOpenDialog(true);
  };

  const handleApproveTestimonial = (id: number) => {
    console.log("Approving testimonial:", id);
  };

  const handleRejectTestimonial = (id: number) => {
    console.log("Rejecting testimonial:", id);
  };

  const handleToggleFeatured = (id: number) => {
    console.log("Toggling featured status for testimonial:", id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTestimonial(null);
  };

  const handleSave = () => {
    console.log("Saving testimonial:", formData);
    handleCloseDialog();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const approvedCount = mockTestimonials.filter(t => t.status === "Aprobado").length;
  const pendingCount = mockTestimonials.filter(t => t.status === "Pendiente").length;
  const featuredCount = mockTestimonials.filter(t => t.featured).length;

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4" component="h1">
          Gestión de Testimonios
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={handleAddTestimonial}
        >
          Nuevo Testimonio
        </Button>
      </Stack>

      {/* Statistics */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" color="success.main">
              {approvedCount}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Testimonios Aprobados
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" color="warning.main">
              {pendingCount}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Pendientes de Revisión
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h4" color="primary.main">
              {featuredCount}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Testimonios Destacados
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Search */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          placeholder="Buscar por cliente, comentario, servicio o agente..."
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

      {/* Testimonials Grid */}
      <Grid container spacing={3}>
        {filteredTestimonials.map((testimonial) => (
          <Grid item xs={12} md={6} lg={4} key={testimonial.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: testimonial.featured ? "2px solid #ffd700" : "1px solid #e0e0e0",
              }}
            >
              {testimonial.featured && (
                <Chip
                  label="DESTACADO"
                  color="warning"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    zIndex: 1,
                    fontWeight: "bold",
                  }}
                />
              )}
              
              <CardContent sx={{ flexGrow: 1 }}>
                {/* Client Info */}
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Avatar sx={{ bgcolor: "#1976d2" }}>
                    {testimonial.clientAvatar}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="div">
                      {testimonial.clientName}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Rating value={testimonial.rating} size="small" readOnly />
                      <Typography variant="caption" color="textSecondary">
                        ({testimonial.rating}/5)
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>

                {/* Comment */}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    mb: 2,
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  "{testimonial.comment}"
                </Typography>

                {/* Service and Property Info */}
                <Stack spacing={1} sx={{ mb: 2 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip
                      label={testimonial.serviceType}
                      color={getServiceColor(testimonial.serviceType) as any}
                      size="small"
                    />
                    <Chip
                      label={testimonial.status}
                      color={getStatusColor(testimonial.status) as any}
                      size="small"
                    />
                  </Stack>
                  
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Home fontSize="small" color="action" />
                    <Typography variant="caption">
                      {testimonial.propertyTitle}
                    </Typography>
                  </Stack>
                  
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Person fontSize="small" color="action" />
                    <Typography variant="caption">
                      Agente: {testimonial.agent}
                    </Typography>
                  </Stack>
                  
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CalendarToday fontSize="small" color="action" />
                    <Typography variant="caption">
                      {testimonial.date}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => handleViewTestimonial(testimonial)}
                  >
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="info"
                    onClick={() => handleEditTestimonial(testimonial)}
                  >
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <Delete fontSize="small" />
                  </IconButton>
                </Stack>

                <Stack direction="row" spacing={1}>
                  {testimonial.status === "Pendiente" && (
                    <>
                      <IconButton
                        size="small"
                        color="success"
                        onClick={() => handleApproveTestimonial(testimonial.id)}
                      >
                        <CheckCircle fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleRejectTestimonial(testimonial.id)}
                      >
                        <Cancel fontSize="small" />
                      </IconButton>
                    </>
                  )}
                  
                  {testimonial.status === "Aprobado" && (
                    <IconButton
                      size="small"
                      color="warning"
                      onClick={() => handleToggleFeatured(testimonial.id)}
                    >
                      <Star fontSize="small" />
                    </IconButton>
                  )}
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {actionType === "add" && "Nuevo Testimonio"}
          {actionType === "edit" && "Editar Testimonio"}
          {actionType === "view" && "Ver Testimonio"}
        </DialogTitle>
        <DialogContent>
          {actionType === "view" && selectedTestimonial ? (
            <Box>
              <Stack spacing={3} sx={{ mt: 1 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: "#1976d2", width: 60, height: 60 }}>
                    {selectedTestimonial.clientAvatar}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{selectedTestimonial.clientName}</Typography>
                    <Rating value={selectedTestimonial.rating} readOnly />
                    <Typography variant="body2" color="textSecondary">
                      {selectedTestimonial.date}
                    </Typography>
                  </Box>
                </Stack>
                
                <Typography variant="body1">
                  "{selectedTestimonial.comment}"
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Tipo de Servicio
                    </Typography>
                    <Typography variant="body1">{selectedTestimonial.serviceType}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Propiedad
                    </Typography>
                    <Typography variant="body1">{selectedTestimonial.propertyTitle}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Agente
                    </Typography>
                    <Typography variant="body1">{selectedTestimonial.agent}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Estado
                    </Typography>
                    <Chip
                      label={selectedTestimonial.status}
                      color={getStatusColor(selectedTestimonial.status) as any}
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Stack>
            </Box>
          ) : (
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Nombre del Cliente"
                  fullWidth
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Tipo de Servicio</InputLabel>
                  <Select
                    value={formData.serviceType}
                    label="Tipo de Servicio"
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <MenuItem value="Compra">Compra</MenuItem>
                    <MenuItem value="Venta">Venta</MenuItem>
                    <MenuItem value="Arriendo">Arriendo</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Título de la Propiedad"
                  fullWidth
                  value={formData.propertyTitle}
                  onChange={(e) => setFormData({ ...formData, propertyTitle: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Agente Responsable"
                  fullWidth
                  value={formData.agent}
                  onChange={(e) => setFormData({ ...formData, agent: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="legend">Calificación</Typography>
                <Rating
                  value={formData.rating}
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, rating: newValue || 1 });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Comentario"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                >
                  {formData.image ? "Cambiar Imagen" : "Agregar Imagen"}
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>
                {(imagePreview || (actionType === "edit" && selectedTestimonial?.image)) && (
                  <Box mt={2}>
                    <Typography variant="caption">Vista previa:</Typography>
                    <img
                      src={imagePreview || selectedTestimonial?.image}
                      alt="preview"
                      style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 8 }}
                    />
                  </Box>
                )}
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
              {actionType === "add" ? "Crear" : "Actualizar"}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
