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
  Card,
  CardMedia,
  CardContent,
  Divider,
  TextareaAutosize,
} from "@mui/material";
import {
  Search,
  Visibility,
  CheckCircle,
  Cancel,
  Home,
  Person,
  LocationOn,
  AttachMoney,
  Phone,
  Email,
  CalendarToday,
} from "@mui/icons-material";

// Mock data for publication requests
const mockRequests = [
  {
    id: 1,
    type: "Venta",
    propertyType: "Casa",
    title: "Casa en Las Condes con jardín",
    address: "Las Condes 123, Santiago",
    price: 150000000,
    uf: 3902,
    bedrooms: 3,
    bathrooms: 2,
    builtArea: 120,
    landArea: 200,
    owner: {
      name: "Juan Carlos Pérez",
      phone: "+56 9 1234 5678",
      email: "juan.perez@email.com",
    },
    description: "Hermosa casa en sector residencial de Las Condes, con amplio jardín y excelente ubicación cerca de colegios y centros comerciales.",
    images: [
      "https://via.placeholder.com/400x300/1976d2/white?text=Fachada",
      "https://via.placeholder.com/400x300/388e3c/white?text=Living",
      "https://via.placeholder.com/400x300/f57c00/white?text=Cocina",
    ],
    submittedDate: "2024-01-20",
    status: "Pendiente",
    observations: "",
  },
  {
    id: 2,
    type: "Arriendo",
    propertyType: "Departamento",
    title: "Departamento moderno en Providencia",
    address: "Providencia 456, Santiago",
    price: 800000,
    uf: 20.8,
    bedrooms: 2,
    bathrooms: 1,
    builtArea: 80,
    landArea: 0,
    owner: {
      name: "María Elena González",
      phone: "+56 9 8765 4321",
      email: "maria.gonzalez@email.com",
    },
    description: "Departamento completamente amoblado en edificio con gimnasio y terraza. Excelente conectividad con metro.",
    images: [
      "https://via.placeholder.com/400x300/7b1fa2/white?text=Fachada",
      "https://via.placeholder.com/400x300/d32f2f/white?text=Living",
    ],
    submittedDate: "2024-01-18",
    status: "Aprobada",
    observations: "Aprobada para publicación inmediata",
  },
  {
    id: 3,
    type: "Venta",
    propertyType: "Oficina",
    title: "Oficina en centro de negocios",
    address: "Las Condes 789, Santiago",
    price: 95000000,
    uf: 2470,
    bedrooms: 0,
    bathrooms: 2,
    builtArea: 60,
    landArea: 0,
    owner: {
      name: "Constructora ABC Ltda.",
      phone: "+56 2 2345 6789",
      email: "ventas@abc.cl",
    },
    description: "Oficina en moderno edificio corporativo con estacionamientos incluidos y excelente ubicación.",
    images: [
      "https://via.placeholder.com/400x300/ff9800/white?text=Oficina",
    ],
    submittedDate: "2024-01-15",
    status: "Rechazada",
    observations: "Faltan documentos de propiedad y algunas fotografías no tienen la calidad requerida",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Aprobada":
      return "success";
    case "Pendiente":
      return "warning";
    case "Rechazada":
      return "error";
    default:
      return "default";
  }
};

const getTypeColor = (type: string) => {
  return type === "Venta" ? "primary" : "secondary";
};

export default function PublicationRequests() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [actionType, setActionType] = useState<"approve" | "reject" | "view">("view");
  const [observations, setObservations] = useState("");

  const filteredRequests = mockRequests.filter((request) =>
    request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.propertyType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewRequest = (request: any) => {
    setSelectedRequest(request);
    setActionType("view");
    setObservations(request.observations);
    setOpenDialog(true);
  };

  const handleApproveRequest = (request: any) => {
    setSelectedRequest(request);
    setActionType("approve");
    setObservations("");
    setOpenDialog(true);
  };

  const handleRejectRequest = (request: any) => {
    setSelectedRequest(request);
    setActionType("reject");
    setObservations("");
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedRequest(null);
    setObservations("");
  };

  const handleConfirmAction = () => {
    if (actionType === "approve") {
      console.log("Approving request:", selectedRequest.id);
    } else if (actionType === "reject") {
      console.log("Rejecting request:", selectedRequest.id, "Reason:", observations);
    }
    handleCloseDialog();
  };

  const pendingCount = mockRequests.filter(r => r.status === "Pendiente").length;
  const approvedCount = mockRequests.filter(r => r.status === "Aprobada").length;
  const rejectedCount = mockRequests.filter(r => r.status === "Rechazada").length;

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4" component="h1">
          Solicitudes de Publicación
        </Typography>
        <Stack direction="row" spacing={2}>
          <Chip label={`Pendientes: ${pendingCount}`} color="warning" />
          <Chip label={`Aprobadas: ${approvedCount}`} color="success" />
          <Chip label={`Rechazadas: ${rejectedCount}`} color="error" />
        </Stack>
      </Stack>

      {/* Search */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          placeholder="Buscar por título, dirección, propietario o tipo de propiedad..."
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

      {/* Requests Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell><strong>Propiedad</strong></TableCell>
              <TableCell><strong>Propietario</strong></TableCell>
              <TableCell><strong>Tipo</strong></TableCell>
              <TableCell><strong>Precio</strong></TableCell>
              <TableCell><strong>Fecha</strong></TableCell>
              <TableCell><strong>Estado</strong></TableCell>
              <TableCell align="center"><strong>Acciones</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRequests.map((request) => (
              <TableRow key={request.id} hover>
                <TableCell>
                  <Stack spacing={1}>
                    <Typography variant="body2" fontWeight="medium">
                      {request.title}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocationOn fontSize="small" color="action" />
                      <Typography variant="caption" color="textSecondary">
                        {request.address}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Home fontSize="small" color="action" />
                      <Typography variant="caption">
                        {request.propertyType} • {request.bedrooms}D • {request.bathrooms}B • {request.builtArea}m²
                      </Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack spacing={0.5}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Person fontSize="small" color="action" />
                      <Typography variant="body2">{request.owner.name}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Phone fontSize="small" color="action" />
                      <Typography variant="caption">{request.owner.phone}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Email fontSize="small" color="action" />
                      <Typography variant="caption">{request.owner.email}</Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    label={request.type}
                    color={getTypeColor(request.type) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Stack spacing={0.5}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AttachMoney fontSize="small" color="action" />
                      <Typography variant="body2">
                        UF {request.uf.toLocaleString()}
                      </Typography>
                    </Stack>
                    <Typography variant="caption" color="textSecondary">
                      ${request.price.toLocaleString()}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CalendarToday fontSize="small" color="action" />
                    <Typography variant="body2">{request.submittedDate}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    label={request.status}
                    color={getStatusColor(request.status) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleViewRequest(request)}
                    >
                      <Visibility fontSize="small" />
                    </IconButton>
                    {request.status === "Pendiente" && (
                      <>
                        <IconButton
                          size="small"
                          color="success"
                          onClick={() => handleApproveRequest(request)}
                        >
                          <CheckCircle fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleRejectRequest(request)}
                        >
                          <Cancel fontSize="small" />
                        </IconButton>
                      </>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* View/Action Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="lg" fullWidth>
        <DialogTitle>
          {actionType === "view" && "Detalles de Solicitud"}
          {actionType === "approve" && "Aprobar Solicitud"}
          {actionType === "reject" && "Rechazar Solicitud"}
        </DialogTitle>
        <DialogContent>
          {selectedRequest && (
            <Grid container spacing={3}>
              {/* Property Images */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Imágenes de la Propiedad
                </Typography>
                <Grid container spacing={2}>
                  {selectedRequest.images.map((image: string, index: number) => (
                    <Grid item xs={6} key={index}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="150"
                          image={image}
                          alt={`Imagen ${index + 1}`}
                        />
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Property Details */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Información de la Propiedad
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      Título
                    </Typography>
                    <Typography variant="body1" fontWeight="medium">
                      {selectedRequest.title}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      Dirección
                    </Typography>
                    <Typography variant="body1">
                      {selectedRequest.address}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      Descripción
                    </Typography>
                    <Typography variant="body1">
                      {selectedRequest.description}
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="textSecondary">
                        Tipo
                      </Typography>
                      <Typography variant="body1">
                        {selectedRequest.type} - {selectedRequest.propertyType}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="textSecondary">
                        Precio
                      </Typography>
                      <Typography variant="body1">
                        UF {selectedRequest.uf.toLocaleString()} (${selectedRequest.price.toLocaleString()})
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" color="textSecondary">
                        Dormitorios
                      </Typography>
                      <Typography variant="body1">{selectedRequest.bedrooms}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" color="textSecondary">
                        Baños
                      </Typography>
                      <Typography variant="body1">{selectedRequest.bathrooms}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" color="textSecondary">
                        Superficie
                      </Typography>
                      <Typography variant="body1">{selectedRequest.builtArea}m²</Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>

              {/* Owner Information */}
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Información del Propietario
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body2" color="textSecondary">
                      Nombre
                    </Typography>
                    <Typography variant="body1">{selectedRequest.owner.name}</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body2" color="textSecondary">
                      Teléfono
                    </Typography>
                    <Typography variant="body1">{selectedRequest.owner.phone}</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body2" color="textSecondary">
                      Email
                    </Typography>
                    <Typography variant="body1">{selectedRequest.owner.email}</Typography>
                  </Grid>
                </Grid>
              </Grid>

              {/* Action specific content */}
              {(actionType === "approve" || actionType === "reject") && (
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    {actionType === "approve" ? "Observaciones de Aprobación" : "Motivo de Rechazo"}
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder={
                      actionType === "approve"
                        ? "Observaciones adicionales (opcional)..."
                        : "Describa el motivo del rechazo..."
                    }
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    required={actionType === "reject"}
                  />
                </Grid>
              )}

              {/* Current observations if viewing */}
              {actionType === "view" && selectedRequest.observations && (
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Observaciones
                  </Typography>
                  <Typography variant="body1">
                    {selectedRequest.observations}
                  </Typography>
                </Grid>
              )}
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>
            {actionType === "view" ? "Cerrar" : "Cancelar"}
          </Button>
          {actionType === "approve" && (
            <Button onClick={handleConfirmAction} variant="contained" color="success">
              Aprobar Solicitud
            </Button>
          )}
          {actionType === "reject" && (
            <Button
              onClick={handleConfirmAction}
              variant="contained"
              color="error"
              disabled={!observations.trim()}
            >
              Rechazar Solicitud
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
