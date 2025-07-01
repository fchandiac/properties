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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  Avatar,
} from "@mui/material";
import {
  Add,
  Search,
  Edit,
  Delete,
  Visibility,
  Publish,
  Schedule,
  Person,
  CalendarToday,
  Visibility as ViewIcon,
  ThumbUp,
} from "@mui/icons-material";

// Mock data for blog articles
const mockArticles = [
  {
    id: 1,
    title: "Guía Completa para Comprar tu Primera Casa en 2024",
    slug: "guia-comprar-primera-casa-2024",
    excerpt: "Todo lo que necesitas saber antes de comprar tu primera propiedad, desde el financiamiento hasta la escrituración.",
    content: "Contenido completo del artículo...",
    featuredImage: "https://via.placeholder.com/400x250/1976d2/white?text=Casa",
    category: "Compra",
    tags: ["primera casa", "financiamiento", "guía"],
    author: "María González",
    authorAvatar: "MG",
    publishDate: "2024-01-20",
    scheduledDate: null,
    status: "Publicado",
    views: 1250,
    likes: 89,
    comments: 12, // Simulado
    avgTime: 180, // segundos, simulado
    featured: true,
  },
  {
    id: 2,
    title: "Tendencias del Mercado Inmobiliario en Santiago",
    slug: "tendencias-mercado-inmobiliario-santiago",
    excerpt: "Análisis de las principales tendencias que están marcando el mercado inmobiliario en la capital.",
    content: "Contenido completo del artículo...",
    featuredImage: "https://via.placeholder.com/400x250/388e3c/white?text=Mercado",
    category: "Mercado",
    tags: ["mercado", "tendencias", "santiago"],
    author: "Carlos Rodríguez",
    authorAvatar: "CR",
    publishDate: "2024-01-18",
    scheduledDate: null,
    status: "Publicado",
    views: 892,
    likes: 45,
    comments: 7, // Simulado
    avgTime: 120, // segundos, simulado
    featured: false,
  },
  {
    id: 3,
    title: "Cómo Preparar tu Propiedad para Vender Rápido",
    slug: "preparar-propiedad-vender-rapido",
    excerpt: "Consejos prácticos para mejorar la presentación de tu propiedad y acelerar el proceso de venta.",
    content: "Contenido completo del artículo...",
    featuredImage: "https://via.placeholder.com/400x250/f57c00/white?text=Venta",
    category: "Venta",
    tags: ["venta", "consejos", "preparación"],
    author: "Ana López",
    authorAvatar: "AL",
    publishDate: null,
    scheduledDate: "2024-01-25",
    status: "Programado",
    views: 0,
    likes: 0,
    comments: 0, // Simulado
    avgTime: 0, // segundos, simulado
    featured: false,
  },
  {
    id: 4,
    title: "Inversión Inmobiliaria: Departamentos vs Casas",
    slug: "inversion-inmobiliaria-departamentos-vs-casas",
    excerpt: "Comparativa entre diferentes tipos de propiedades como vehículo de inversión.",
    content: "Contenido completo del artículo...",
    featuredImage: "https://via.placeholder.com/400x250/7b1fa2/white?text=Inversión",
    category: "Inversión",
    tags: ["inversión", "departamentos", "casas"],
    author: "Juan Pérez",
    authorAvatar: "JP",
    publishDate: null,
    scheduledDate: null,
    status: "Borrador",
    views: 0,
    likes: 0,
    comments: 0, // Simulado
    avgTime: 0, // segundos, simulado
    featured: false,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Publicado":
      return "success";
    case "Programado":
      return "info";
    case "Borrador":
      return "warning";
    case "Archivado":
      return "error";
    default:
      return "default";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Compra":
      return "primary";
    case "Venta":
      return "success";
    case "Mercado":
      return "info";
    case "Inversión":
      return "secondary";
    default:
      return "default";
  }
};

export default function BlogManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [actionType, setActionType] = useState<"add" | "edit" | "view">("add");
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Compra",
    tags: "",
    scheduledDate: "",
  });

  const filteredArticles = mockArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || article.status === filterStatus;
    const matchesCategory = filterCategory === "all" || article.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleAddArticle = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "Compra",
      tags: "",
      scheduledDate: "",
    });
    setActionType("add");
    setOpenDialog(true);
  };

  const handleEditArticle = (article: any) => {
    setSelectedArticle(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      tags: article.tags.join(", "),
      scheduledDate: article.scheduledDate || "",
    });
    setActionType("edit");
    setOpenDialog(true);
  };

  const handleViewArticle = (article: any) => {
    setSelectedArticle(article);
    setActionType("view");
    setOpenDialog(true);
  };

  const handlePublishArticle = (id: number) => {
    console.log("Publishing article:", id);
  };

  const handleToggleFeatured = (id: number) => {
    console.log("Toggling featured status for article:", id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedArticle(null);
  };

  const handleSave = () => {
    console.log("Saving article:", formData);
    handleCloseDialog();
  };

  const publishedCount = mockArticles.filter(a => a.status === "Publicado").length;
  const draftCount = mockArticles.filter(a => a.status === "Borrador").length;
  const scheduledCount = mockArticles.filter(a => a.status === "Programado").length;
  const totalViews = mockArticles.reduce((acc, article) => acc + article.views, 0);

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4" component="h1">
          Gestión del Blog
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={handleAddArticle}
        >
          Nuevo Artículo
        </Button>
      </Stack>

      {/* Statistics */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Artículos Publicados
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#388e3c" }}>
                    {publishedCount}
                  </Typography>
                </Box>
                <Publish sx={{ color: "#388e3c", fontSize: "3rem" }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Borradores
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#ff9800" }}>
                    {draftCount}
                  </Typography>
                </Box>
                <Edit sx={{ color: "#ff9800", fontSize: "3rem" }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Programados
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#2196f3" }}>
                    {scheduledCount}
                  </Typography>
                </Box>
                <Schedule sx={{ color: "#2196f3", fontSize: "3rem" }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Vistas Totales
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#9c27b0" }}>
                    {totalViews.toLocaleString()}
                  </Typography>
                </Box>
                <ViewIcon sx={{ color: "#9c27b0", fontSize: "3rem" }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Search and Filters */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              placeholder="Buscar artículos por título, contenido o autor..."
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
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Estado</InputLabel>
              <Select
                value={filterStatus}
                label="Estado"
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <MenuItem value="all">Todos</MenuItem>
                <MenuItem value="Publicado">Publicado</MenuItem>
                <MenuItem value="Borrador">Borrador</MenuItem>
                <MenuItem value="Programado">Programado</MenuItem>
                <MenuItem value="Archivado">Archivado</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Categoría</InputLabel>
              <Select
                value={filterCategory}
                label="Categoría"
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <MenuItem value="all">Todas</MenuItem>
                <MenuItem value="Compra">Compra</MenuItem>
                <MenuItem value="Venta">Venta</MenuItem>
                <MenuItem value="Mercado">Mercado</MenuItem>
                <MenuItem value="Inversión">Inversión</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* Articles Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell><strong>Artículo</strong></TableCell>
              <TableCell><strong>Autor</strong></TableCell>
              <TableCell><strong>Categoría</strong></TableCell>
              <TableCell><strong>Estado</strong></TableCell>
              <TableCell><strong>Fecha</strong></TableCell>
              <TableCell><strong>Estadísticas</strong></TableCell>
              <TableCell align="center"><strong>Acciones</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredArticles.map((article) => (
              <TableRow key={article.id} hover>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      component="img"
                      src={article.featuredImage}
                      sx={{
                        width: 60,
                        height: 40,
                        objectFit: "cover",
                        borderRadius: 1,
                      }}
                    />
                    <Box>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" fontWeight="medium" component="span">
                          {article.title}
                        </Typography>
                        {article.featured && (
                          <Chip
                            label="DESTACADO"
                            color="warning"
                            size="small"
                            sx={{ ml: 1 }}
                            component="span"
                          />
                        )}
                      </span>
                      <Typography variant="caption" color="textSecondary">
                        {article.excerpt.substring(0, 80)}...
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar sx={{ bgcolor: "#1976d2", width: 30, height: 30 }}>
                      {article.authorAvatar}
                    </Avatar>
                    <Typography variant="body2">{article.author}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    label={article.category}
                    color={getCategoryColor(article.category) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={article.status}
                    color={getStatusColor(article.status) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Stack spacing={0.5}>
                    {article.publishDate && (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CalendarToday fontSize="small" color="action" />
                        <Typography variant="caption">
                          {article.publishDate}
                        </Typography>
                      </Stack>
                    )}
                    {article.scheduledDate && (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Schedule fontSize="small" color="info" />
                        <Typography variant="caption" color="info.main">
                          {article.scheduledDate}
                        </Typography>
                      </Stack>
                    )}
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack spacing={0.5}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <ViewIcon fontSize="small" color="action" />
                      <Typography variant="caption">
                        {article.views.toLocaleString()} vistas
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <ThumbUp fontSize="small" color="action" />
                      <Typography variant="caption">
                        {article.likes} likes
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Person fontSize="small" color="action" />
                      <Typography variant="caption">
                        {article.comments} comentarios
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Schedule fontSize="small" color="action" />
                      <Typography variant="caption">
                        {article.avgTime ? `${article.avgTime} seg. promedio` : '—'}
                      </Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleViewArticle(article)}
                    >
                      <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="info"
                      onClick={() => handleEditArticle(article)}
                    >
                      <Edit fontSize="small" />
                    </IconButton>
                    {article.status === "Borrador" && (
                      <IconButton
                        size="small"
                        color="success"
                        onClick={() => handlePublishArticle(article.id)}
                      >
                        <Publish fontSize="small" />
                      </IconButton>
                    )}
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

      {/* Add/Edit/View Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="lg" fullWidth>
        <DialogTitle>
          {actionType === "add" && "Nuevo Artículo"}
          {actionType === "edit" && "Editar Artículo"}
          {actionType === "view" && "Ver Artículo"}
        </DialogTitle>
        <DialogContent>
          {actionType === "view" && selectedArticle ? (
            <Box sx={{ mt: 1 }}>
              <img
                src={selectedArticle.featuredImage}
                alt={selectedArticle.title}
                style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "8px" }}
              />
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                {selectedArticle.title}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Chip label={selectedArticle.category} color={getCategoryColor(selectedArticle.category) as any} />
                <Chip label={selectedArticle.status} color={getStatusColor(selectedArticle.status) as any} />
                {selectedArticle.featured && <Chip label="DESTACADO" color="warning" />}
              </Stack>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedArticle.excerpt}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Por {selectedArticle.author} • {selectedArticle.publishDate || selectedArticle.scheduledDate}
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  label="Título del Artículo"
                  fullWidth
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Categoría</InputLabel>
                  <Select
                    value={formData.category}
                    label="Categoría"
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <MenuItem value="Compra">Compra</MenuItem>
                    <MenuItem value="Venta">Venta</MenuItem>
                    <MenuItem value="Mercado">Mercado</MenuItem>
                    <MenuItem value="Inversión">Inversión</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Etiquetas (separadas por coma)"
                  fullWidth
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="primera casa, financiamiento, guía"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Resumen/Extracto"
                  fullWidth
                  multiline
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contenido"
                  fullWidth
                  multiline
                  rows={8}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Escribe el contenido del artículo aquí..."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Fecha de Publicación Programada"
                  type="date"
                  fullWidth
                  value={formData.scheduledDate}
                  onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText="Dejar vacío para publicar inmediatamente"
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
            <>
              <Button onClick={handleSave} variant="outlined">
                Guardar Borrador
              </Button>
              <Button onClick={handleSave} variant="contained">
                {formData.scheduledDate ? "Programar" : "Publicar"}
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
