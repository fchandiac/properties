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
  Tabs,
  Tab,
} from "@mui/material";
import {
  Add,
  Search,
  Edit,
  Delete,
  Visibility,
  Person,
  Business,
  Phone,
  Email,
  LocationOn,
  AttachFile,
} from "@mui/icons-material";

// Interfaces
interface PersonData {
  id: number;
  type: "Natural" | "Jurídica";
  name: string;
  rut: string;
  email: string;
  phone: string;
  address: string;
  role: "Comprador" | "Vendedor" | "Arrendatario" | "Arrendador";
  contractsCount: number;
  documents: string[];
  status: "Activo" | "Inactivo" | "Pendiente";
  created: string;
}

// Mock data for people
const mockPeople: PersonData[] = [
  {
    id: 1,
    type: "Natural",
    name: "Juan Carlos Pérez González",
    rut: "12.345.678-9",
    email: "juan.perez@email.com",
    phone: "+56 9 1234 5678",
    address: "Las Condes 123, Santiago",
    role: "Comprador",
    contractsCount: 2,
    documents: ["Cédula", "Certificado Ingresos"],
    status: "Activo",
    created: "2024-01-15",
  },
  {
    id: 2,
    type: "Jurídica",
    name: "Inmobiliaria Los Robles Ltda.",
    rut: "76.543.210-K",
    email: "contacto@losrobles.cl",
    phone: "+56 2 2345 6789",
    address: "Providencia 456, Santiago",
    role: "Vendedor",
    contractsCount: 5,
    documents: ["Escritura", "Poder"],
    status: "Activo",
    created: "2023-12-10",
  },
  {
    id: 3,
    type: "Natural",
    name: "María Elena González Silva",
    rut: "15.678.901-2",
    email: "maria.gonzalez@email.com",
    phone: "+56 9 8765 4321",
    address: "Ñuñoa 789, Santiago",
    role: "Arrendatario",
    contractsCount: 1,
    documents: ["Cédula", "Liquidación Sueldo"],
    status: "Activo",
    created: "2024-01-08",
  },
  {
    id: 4,
    type: "Natural",
    name: "Carlos Roberto Rodríguez",
    rut: "18.901.234-5",
    email: "carlos.rodriguez@email.com",
    phone: "+56 9 5555 0000",
    address: "Maipú 321, Santiago",
    role: "Arrendador",
    contractsCount: 3,
    documents: ["Cédula", "Escritura Propiedad"],
    status: "Inactivo",
    created: "2023-11-20",
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

const getTypeColor = (type: string) => {
  return type === "Natural" ? "primary" : "secondary";
};

const getRoleColor = (role: string) => {
  switch (role) {
    case "Comprador":
      return "info";
    case "Vendedor":
      return "success";
    case "Arrendatario":
      return "warning";
    case "Arrendador":
      return "error";
    default:
      return "default";
  }
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`people-tabpanel-${index}`}
      aria-labelledby={`people-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function PeopleManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    type: "Natural",
    name: "",
    rut: "",
    email: "",
    phone: "",
    address: "",
    role: "Comprador",
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const naturalPeople = mockPeople.filter(person => person.type === "Natural");
  const legalPeople = mockPeople.filter(person => person.type === "Jurídica");

  const filteredPeople = mockPeople.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.rut.includes(searchTerm) ||
    person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNaturalPeople = naturalPeople.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.rut.includes(searchTerm) ||
    person.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLegalPeople = legalPeople.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.rut.includes(searchTerm) ||
    person.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPerson = () => {
    setFormData({
      type: "Natural",
      name: "",
      rut: "",
      email: "",
      phone: "",
      address: "",
      role: "Comprador",
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSave = () => {
    console.log("Saving person:", formData);
    handleCloseDialog();
  };

  const renderTableHeader = () => (
    <TableHead>
      <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
        <TableCell><strong>Persona</strong></TableCell>
        <TableCell><strong>RUT</strong></TableCell>
        <TableCell><strong>Contacto</strong></TableCell>
        <TableCell><strong>Rol</strong></TableCell>
        <TableCell><strong>Contratos</strong></TableCell>
        <TableCell><strong>Documentos</strong></TableCell>
        <TableCell><strong>Estado</strong></TableCell>
        <TableCell align="center"><strong>Acciones</strong></TableCell>
      </TableRow>
    </TableHead>
  );

  const renderTableRow = (person: any) => (
    <TableRow key={person.id} hover>
      <TableCell>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: person.type === "Natural" ? "#1976d2" : "#7b1fa2" }}>
            {person.type === "Natural" ? <Person /> : <Business />}
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight="medium">
              {person.name}
            </Typography>
            <Chip
              label={person.type}
              color={getTypeColor(person.type) as any}
              size="small"
              sx={{ mt: 0.5 }}
            />
          </Box>
        </Stack>
      </TableCell>
      <TableCell>
        <Typography variant="body2" fontFamily="monospace">
          {person.rut}
        </Typography>
      </TableCell>
      <TableCell>
        <Stack spacing={0.5}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Email fontSize="small" color="action" />
            <Typography variant="body2">{person.email}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Phone fontSize="small" color="action" />
            <Typography variant="body2">{person.phone}</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOn fontSize="small" color="action" />
            <Typography variant="caption" color="textSecondary">
              {person.address}
            </Typography>
          </Stack>
        </Stack>
      </TableCell>
      <TableCell>
        <Chip
          label={person.role}
          color={getRoleColor(person.role) as any}
          size="small"
        />
      </TableCell>
      <TableCell>
        <Typography variant="h6" color="primary">
          {person.contractsCount}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          contratos
        </Typography>
      </TableCell>
      <TableCell>
        <Stack direction="row" spacing={0.5} flexWrap="wrap">
          {person.documents.map((doc: string, index: number) => (
            <Chip
              key={index}
              label={doc}
              size="small"
              variant="outlined"
              icon={<AttachFile fontSize="small" />}
            />
          ))}
        </Stack>
      </TableCell>
      <TableCell>
        <Chip
          label={person.status}
          color={getStatusColor(person.status) as any}
          size="small"
        />
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" spacing={1}>
          <IconButton size="small" color="primary">
            <Visibility fontSize="small" />
          </IconButton>
          <IconButton size="small" color="info">
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small" color="error">
            <Delete fontSize="small" />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
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
          Gestión de Personas
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={handleAddPerson}
        >
          Nueva Persona
        </Button>
      </Stack>

      {/* Search */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          placeholder="Buscar por nombre, RUT, email o rol..."
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

      {/* Tabs */}
      <Paper>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="people tabs"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label={`Todas (${filteredPeople.length})`} />
          <Tab label={`Personas Naturales (${naturalPeople.length})`} />
          <Tab label={`Personas Jurídicas (${legalPeople.length})`} />
        </Tabs>

        {/* All People Tab */}
        <TabPanel value={tabValue} index={0}>
          <TableContainer>
            <Table>
              {renderTableHeader()}
              <TableBody>
                {filteredPeople.map(renderTableRow)}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* Natural People Tab */}
        <TabPanel value={tabValue} index={1}>
          <TableContainer>
            <Table>
              {renderTableHeader()}
              <TableBody>
                {filteredNaturalPeople.map(renderTableRow)}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* Legal People Tab */}
        <TabPanel value={tabValue} index={2}>
          <TableContainer>
            <Table>
              {renderTableHeader()}
              <TableBody>
                {filteredLegalPeople.map(renderTableRow)}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Paper>

      {/* Add/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>Nueva Persona</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Tipo de Persona</InputLabel>
                <Select
                  value={formData.type}
                  label="Tipo de Persona"
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <MenuItem value="Natural">Persona Natural</MenuItem>
                  <MenuItem value="Jurídica">Persona Jurídica</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Rol</InputLabel>
                <Select
                  value={formData.role}
                  label="Rol"
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <MenuItem value="Comprador">Comprador</MenuItem>
                  <MenuItem value="Vendedor">Vendedor</MenuItem>
                  <MenuItem value="Arrendatario">Arrendatario</MenuItem>
                  <MenuItem value="Arrendador">Arrendador</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label={formData.type === "Natural" ? "Nombre Completo" : "Razón Social"}
                fullWidth
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="RUT"
                fullWidth
                value={formData.rut}
                onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                placeholder="12.345.678-9"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                fullWidth
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Teléfono"
                fullWidth
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+56 9 1234 5678"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Dirección"
                fullWidth
                multiline
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={handleSave} variant="contained">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
