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
  Avatar,
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
  Block,
  CheckCircle,
  Search,
  Add,
  Email,
  Phone,
} from "@mui/icons-material";

// Mock data for users
const mockUsers = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@email.com",
    phone: "+56 9 1234 5678",
    role: "Cliente",
    status: "Activo",
    registrationDate: "2024-01-15",
    lastLogin: "2024-01-20",
    propertiesViewed: 12,
    avatar: "JP",
  },
  {
    id: 2,
    name: "María González",
    email: "maria.gonzalez@email.com",
    phone: "+56 9 8765 4321",
    role: "Agente",
    status: "Activo",
    registrationDate: "2023-12-10",
    lastLogin: "2024-01-21",
    propertiesViewed: 45,
    avatar: "MG",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    email: "carlos.rodriguez@email.com",
    phone: "+56 9 5555 0000",
    role: "Cliente",
    status: "Inactivo",
    registrationDate: "2024-01-05",
    lastLogin: "2024-01-18",
    propertiesViewed: 8,
    avatar: "CR",
  },
  {
    id: 4,
    name: "Ana López",
    email: "ana.lopez@email.com",
    phone: "+56 9 7777 8888",
    role: "Admin",
    status: "Activo",
    registrationDate: "2023-11-01",
    lastLogin: "2024-01-21",
    propertiesViewed: 156,
    avatar: "AL",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Activo":
      return "success";
    case "Inactivo":
      return "error";
    case "Pendiente":
      return "warning";
    default:
      return "default";
  }
};

const getRoleColor = (role: string) => {
  switch (role) {
    case "Admin":
      return "secondary";
    case "Agente":
      return "primary";
    case "Cliente":
      return "default";
    default:
      return "default";
  }
};

export default function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Cliente",
    status: "Activo",
  });
  const [users] = useState(mockUsers);

  const handleOpenDialog = (user?: any) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status,
      });
    } else {
      setEditingUser(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "Cliente",
        status: "Activo",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingUser(null);
  };

  const handleSaveUser = () => {
    console.log("Saving user:", formData);
    handleCloseDialog();
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
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
          Gestión de Usuarios
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={() => handleOpenDialog()}
        >
          Nuevo Usuario
        </Button>
      </Stack>

      {/* Search */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          placeholder="Buscar usuarios por nombre, email o rol..."
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

      {/* Users Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell><strong>Usuario</strong></TableCell>
              <TableCell><strong>Contacto</strong></TableCell>
              <TableCell><strong>Rol</strong></TableCell>
              <TableCell><strong>Estado</strong></TableCell>
              <TableCell><strong>Registro</strong></TableCell>
              <TableCell><strong>Último Acceso</strong></TableCell>
              <TableCell><strong>Actividad</strong></TableCell>
              <TableCell align="center"><strong>Acciones</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: "#1976d2" }}>
                      {user.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight="medium">
                        {user.name}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        ID: {user.id}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack spacing={0.5}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Email fontSize="small" color="action" />
                      <Typography variant="body2">{user.email}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Phone fontSize="small" color="action" />
                      <Typography variant="body2">{user.phone}</Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    label={user.role}
                    color={getRoleColor(user.role) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={user.status}
                    color={getStatusColor(user.status) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>{user.registrationDate}</TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {user.propertiesViewed} propiedades vistas
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1}>
                    <IconButton size="small" color="info" onClick={() => handleOpenDialog(user)}>
                      <Edit fontSize="small" />
                    </IconButton>
                    {user.status === "Activo" ? (
                      <IconButton size="small" color="warning">
                        <Block fontSize="small" />
                      </IconButton>
                    ) : (
                      <IconButton size="small" color="success">
                        <CheckCircle fontSize="small" />
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

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingUser ? "Editar Usuario" : "Nuevo Usuario"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                label="Nombre completo"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={(e) => handleFormChange("name", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Teléfono"
                variant="outlined"
                fullWidth
                value={formData.phone}
                onChange={(e) => handleFormChange("phone", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Rol</InputLabel>
                <Select
                  label="Rol"
                  value={formData.role}
                  onChange={(e) => handleFormChange("role", e.target.value)}
                >
                  <MenuItem value="Cliente">Cliente</MenuItem>
                  <MenuItem value="Agente">Agente</MenuItem>
                  <MenuItem value="Admin">Administrador</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Estado</InputLabel>
                <Select
                  label="Estado"
                  value={formData.status}
                  onChange={(e) => handleFormChange("status", e.target.value)}
                >
                  <MenuItem value="Activo">Activo</MenuItem>
                  <MenuItem value="Inactivo">Inactivo</MenuItem>
                  <MenuItem value="Pendiente">Pendiente</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSaveUser} color="primary" variant="contained">
            {editingUser ? "Guardar Cambios" : "Crear Usuario"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
