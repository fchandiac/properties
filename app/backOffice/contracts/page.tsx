"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
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
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import {
  Add,
  Search,
  Edit,
  Visibility,
  AttachMoney,
  Home,
  CalendarToday,
  Person,
  Description,
  Delete,
} from "@mui/icons-material";

// Mock data for contracts
const mockSalesContracts = [
  {
    id: 1,
    type: "Venta",
    property: "Casa Las Condes",
    propertyAddress: "Las Condes, Santiago",
    buyer: "Juan Pérez",
    seller: "María González",
    agent: "Carlos Rodríguez",
    salePrice: 150000000,
    uf: 3902,
    date: "2024-01-15",
    status: "Firmado",
    payments: [
      { date: "2024-01-15", amount: 15000000, type: "Pie" },
      { date: "2024-02-15", amount: 135000000, type: "Crédito" },
    ],
    documents: [
      { name: "Título de propiedad.pdf", type: "Título", url: "/public/prop.png" },
      { name: "Plano casa.pdf", type: "Plano", url: "/public/prop.png" },
    ],
  },
  {
    id: 2,
    type: "Venta",
    property: "Departamento Providencia",
    propertyAddress: "Providencia, Santiago",
    buyer: "Ana López",
    seller: "Pedro Silva",
    agent: "María González",
    salePrice: 95000000,
    uf: 2470,
    date: "2024-01-10",
    status: "En proceso",
    payments: [
      { date: "2024-01-10", amount: 9500000, type: "Pie" },
    ],
    documents: [],
  },
];

const mockRentalContracts = [
  {
    id: 1,
    type: "Arriendo",
    property: "Departamento Ñuñoa",
    propertyAddress: "Ñuñoa, Santiago",
    tenant: "Luis Ramírez",
    landlord: "Carmen Torres",
    agent: "Juan Pérez",
    monthlyRent: 800000,
    uf: 20.8,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    deposit: 1600000,
    status: "Activo",
    payments: [
      { date: "2024-01-01", amount: 800000, type: "Mes 1", status: "Pagado" },
      { date: "2024-02-01", amount: 800000, type: "Mes 2", status: "Pagado" },
      { date: "2024-03-01", amount: 800000, type: "Mes 3", status: "Pendiente" },
    ],
    documents: [
      { name: "Contrato arriendo.pdf", type: "Contrato", url: "/public/prop.png" },
    ],
  },
  {
    id: 2,
    type: "Arriendo",
    property: "Casa Maipú",
    propertyAddress: "Maipú, Santiago",
    tenant: "Roberto González",
    landlord: "Patricia Morales",
    agent: "Ana López",
    monthlyRent: 1200000,
    uf: 31.2,
    startDate: "2024-02-01",
    endDate: "2025-01-31",
    deposit: 2400000,
    status: "Activo",
    payments: [
      { date: "2024-02-01", amount: 1200000, type: "Mes 1", status: "Pagado" },
      { date: "2024-03-01", amount: 1200000, type: "Mes 2", status: "Atrasado" },
    ],
    documents: [],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Firmado":
    case "Activo":
    case "Pagado":
      return "success";
    case "En proceso":
    case "Pendiente":
      return "warning";
    case "Cancelado":
    case "Atrasado":
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
      id={`contracts-tabpanel-${index}`}
      aria-labelledby={`contracts-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ContractsManagement() {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [editingContract, setEditingContract] = useState<any>(null);
  const [contractType, setContractType] = useState<"venta" | "arriendo">("venta");
  const [formData, setFormData] = useState({
    type: "Venta",
    property: "",
    propertyAddress: "",
    buyer: "",
    seller: "",
    tenant: "",
    landlord: "",
    agent: "",
    salePrice: "",
    monthlyRent: "",
    deposit: "",
    uf: "",
    duration: "",
    status: "Borrador",
    date: new Date().toISOString().split('T')[0],
    commission: "",
  });
  const [docPreviews, setDocPreviews] = useState<{ name: string; type: string; url: string }[]>([]);

  // Mock data for dropdowns
  const mockProperties = [
    "Casa Las Condes",
    "Departamento Providencia",
    "Casa Ñuñoa",
    "Oficina Las Condes",
  ];

  const mockPeople = [
    "Juan Pérez González",
    "María González Silva",
    "Carlos Rodríguez López",
    "Ana Martínez Torres",
  ];

  const mockAgents = [
    "Carlos Rodríguez",
    "Ana Martínez",
    "Luis González",
    "Patricia Silva",
  ];

  const handleOpenDialog = (contract?: any, type?: "venta" | "arriendo") => {
    if (contract) {
      setEditingContract(contract);
      setContractType(contract.type === "Venta" ? "venta" : "arriendo");
      setFormData({
        type: contract.type,
        property: contract.property,
        propertyAddress: contract.propertyAddress || contract.address || "",
        buyer: contract.buyer || "",
        seller: contract.seller || "",
        tenant: contract.tenant || "",
        landlord: contract.landlord || "",
        agent: contract.agent,
        salePrice: contract.salePrice?.toString() || "",
        monthlyRent: contract.monthlyRent?.toString() || "",
        deposit: contract.deposit?.toString() || "",
        uf: contract.uf?.toString() || "",
        duration: contract.duration?.toString() || "",
        status: contract.status,
        date: contract.date,
        commission: contract.commission?.toString() || "",
      });
      setDocPreviews(contract.documents || []);
    } else {
      setEditingContract(null);
      setContractType(type || "venta");
      setFormData({
        type: type === "arriendo" ? "Arriendo" : "Venta",
        property: "",
        propertyAddress: "",
        buyer: "",
        seller: "",
        tenant: "",
        landlord: "",
        agent: "",
        salePrice: "",
        monthlyRent: "",
        deposit: "",
        uf: "",
        duration: "",
        status: "Borrador",
        date: new Date().toISOString().split('T')[0],
        commission: "",
      });
      setDocPreviews([]);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingContract(null);
  };

  const handleSaveContract = () => {
    console.log("Saving contract:", formData);
    handleCloseDialog();
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const filteredSalesContracts = mockSalesContracts.filter((contract) =>
    contract.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.seller.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRentalContracts = mockRentalContracts.filter((contract) =>
    contract.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.landlord.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Statistics
  const totalSales = mockSalesContracts.reduce((acc, contract) => acc + contract.salePrice, 0);
  const totalRentals = mockRentalContracts.length;
  const activeRentals = mockRentalContracts.filter(c => c.status === "Activo").length;
  const pendingPayments = mockRentalContracts.reduce((acc, contract) => 
    acc + contract.payments.filter(p => p.status === "Pendiente" || p.status === "Atrasado").length, 0
  );

  const handleAddDocument = (e: React.ChangeEvent<HTMLInputElement>, docType: string) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDocPreviews((prev) => [
          ...prev,
          { name: file.name, type: docType, url: reader.result as string },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };
  const handleRemoveDocument = (idx: number) => {
    setDocPreviews((prev) => prev.filter((_, i) => i !== idx));
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
          Gestión de Contratos
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={() => handleOpenDialog()}
        >
          Nuevo Contrato
        </Button>
      </Stack>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Ventas Totales
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#1976d2" }}>
                    ${totalSales.toLocaleString()}
                  </Typography>
                </Box>
                <AttachMoney sx={{ color: "#1976d2", fontSize: "3rem" }} />
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
                    Arriendos Activos
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#388e3c" }}>
                    {activeRentals}
                  </Typography>
                </Box>
                <Home sx={{ color: "#388e3c", fontSize: "3rem" }} />
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
                    Contratos Totales
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#f57c00" }}>
                    {mockSalesContracts.length + totalRentals}
                  </Typography>
                </Box>
                <Description sx={{ color: "#f57c00", fontSize: "3rem" }} />
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
                    Pagos Pendientes
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#d32f2f" }}>
                    {pendingPayments}
                  </Typography>
                </Box>
                <CalendarToday sx={{ color: "#d32f2f", fontSize: "3rem" }} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Search */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          placeholder="Buscar contratos por propiedad, comprador, vendedor, arrendatario..."
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
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="contracts tabs"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label={`Contratos de Venta (${mockSalesContracts.length})`} />
          <Tab label={`Contratos de Arriendo (${mockRentalContracts.length})`} />
        </Tabs>
        
        {/* Action buttons for each tab */}
        <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() => handleOpenDialog(undefined, "venta")}
              disabled={tabValue !== 0}
            >
              Nuevo Contrato de Venta
            </Button>
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() => handleOpenDialog(undefined, "arriendo")}
              disabled={tabValue !== 1}
            >
              Nuevo Contrato de Arriendo
            </Button>
          </Stack>
        </Box>

        {/* Sales Contracts Tab */}
        <TabPanel value={tabValue} index={0}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell><strong>Propiedad</strong></TableCell>
                  <TableCell><strong>Comprador</strong></TableCell>
                  <TableCell><strong>Vendedor</strong></TableCell>
                  <TableCell><strong>Agente</strong></TableCell>
                  <TableCell><strong>Precio</strong></TableCell>
                  <TableCell><strong>Fecha</strong></TableCell>
                  <TableCell><strong>Estado</strong></TableCell>
                  <TableCell align="center"><strong>Acciones</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredSalesContracts.map((contract) => (
                  <TableRow key={contract.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight="medium">
                        {contract.property}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {contract.propertyAddress}
                      </Typography>
                    </TableCell>
                    <TableCell>{contract.buyer}</TableCell>
                    <TableCell>{contract.seller}</TableCell>
                    <TableCell>{contract.agent}</TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        UF {contract.uf.toLocaleString()}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        ${contract.salePrice.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell>{contract.date}</TableCell>
                    <TableCell>
                      <Chip
                        label={contract.status}
                        color={getStatusColor(contract.status) as any}
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Stack direction="row" spacing={1}>
                        <IconButton size="small" color="primary">
                          <Visibility fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="info" onClick={() => handleOpenDialog(contract)}>
                          <Edit fontSize="small" />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* Rental Contracts Tab */}
        <TabPanel value={tabValue} index={1}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell><strong>Propiedad</strong></TableCell>
                  <TableCell><strong>Arrendatario</strong></TableCell>
                  <TableCell><strong>Arrendador</strong></TableCell>
                  <TableCell><strong>Agente</strong></TableCell>
                  <TableCell><strong>Renta Mensual</strong></TableCell>
                  <TableCell><strong>Período</strong></TableCell>
                  <TableCell><strong>Estado</strong></TableCell>
                  <TableCell align="center"><strong>Acciones</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRentalContracts.map((contract) => (
                  <TableRow key={contract.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight="medium">
                        {contract.property}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {contract.propertyAddress}
                      </Typography>
                    </TableCell>
                    <TableCell>{contract.tenant}</TableCell>
                    <TableCell>{contract.landlord}</TableCell>
                    <TableCell>{contract.agent}</TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        UF {contract.uf}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        ${contract.monthlyRent.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {contract.startDate}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        hasta {contract.endDate}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={contract.status}
                        color={getStatusColor(contract.status) as any}
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Stack direction="row" spacing={1}>
                        <IconButton size="small" color="primary">
                          <Visibility fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="info" onClick={() => handleOpenDialog(contract)}>
                          <Edit fontSize="small" />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Paper>

      {/* Contract Form Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          {editingContract ? "Editar Contrato" : "Nuevo Contrato"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel>Tipo de Contrato</InputLabel>
              <Select
                value={contractType}
                onChange={(e) => setContractType(e.target.value as "venta" | "arriendo")}
                disabled={!!editingContract}
              >
                <MenuItem value="venta">Venta</MenuItem>
                <MenuItem value="arriendo">Arriendo</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Propiedad"
              value={formData.property}
              onChange={(e) => handleFormChange("property", e.target.value)}
              fullWidth
              required
            />

            <TextField
              label="Dirección de la Propiedad"
              value={formData.propertyAddress}
              onChange={(e) => handleFormChange("propertyAddress", e.target.value)}
              fullWidth
              required
            />

            {contractType === "venta" ? (
              <>
                <TextField
                  label="Comprador"
                  value={formData.buyer}
                  onChange={(e) => handleFormChange("buyer", e.target.value)}
                  fullWidth
                  required
                />

                <TextField
                  label="Vendedor"
                  value={formData.seller}
                  onChange={(e) => handleFormChange("seller", e.target.value)}
                  fullWidth
                  required
                />
              </>
            ) : (
              <>
                <TextField
                  label="Arrendatario"
                  value={formData.tenant}
                  onChange={(e) => handleFormChange("tenant", e.target.value)}
                  fullWidth
                  required
                />

                <TextField
                  label="Arrendador"
                  value={formData.landlord}
                  onChange={(e) => handleFormChange("landlord", e.target.value)}
                  fullWidth
                  required
                />
              </>
            )}

            <FormControl fullWidth>
              <InputLabel>Agente</InputLabel>
              <Select
                value={formData.agent}
                onChange={(e) => handleFormChange("agent", e.target.value)}
              >
                {mockAgents.map((agent) => (
                  <MenuItem key={agent} value={agent}>
                    {agent}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Precio de Venta"
              value={formData.salePrice}
              onChange={(e) => handleFormChange("salePrice", e.target.value)}
              fullWidth
              disabled={contractType === "arriendo"}
              InputProps={{
                startAdornment: <InputAdornment position="start">UF</InputAdornment>,
              }}
              required
            />

            <TextField
              label="Renta Mensual"
              value={formData.monthlyRent}
              onChange={(e) => handleFormChange("monthlyRent", e.target.value)}
              fullWidth
              disabled={contractType === "venta"}
              InputProps={{
                startAdornment: <InputAdornment position="start">UF</InputAdornment>,
              }}
              required
            />

            <TextField
              label="Depósito"
              value={formData.deposit}
              onChange={(e) => handleFormChange("deposit", e.target.value)}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">UF</InputAdornment>,
              }}
              required
            />

            <TextField
              label="UF"
              value={formData.uf}
              onChange={(e) => handleFormChange("uf", e.target.value)}
              fullWidth
              required
            />

            {contractType === "arriendo" && (
              <TextField
                label="Duración (meses)"
                value={formData.duration}
                onChange={(e) => handleFormChange("duration", e.target.value)}
                fullWidth
                required
              />
            )}

            <FormControl fullWidth>
              <InputLabel>Estado</InputLabel>
              <Select
                value={formData.status}
                onChange={(e) => handleFormChange("status", e.target.value)}
              >
                <MenuItem value="Borrador">Borrador</MenuItem>
                <MenuItem value="Activo">Activo</MenuItem>
                <MenuItem value="Cancelado">Cancelado</MenuItem>
                <MenuItem value="Firmado">Firmado</MenuItem>
                <MenuItem value="En proceso">En proceso</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Fecha"
              type="date"
              value={formData.date}
              onChange={(e) => handleFormChange("date", e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              required
            />

            <TextField
              label="Comisión"
              value={formData.commission}
              onChange={(e) => handleFormChange("commission", e.target.value)}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">UF</InputAdornment>,
              }}
              required
            />

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Documentos asociados
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 2 }}>
                {docPreviews.length === 0 && (
                  <Typography variant="caption" color="textSecondary">
                    No hay documentos cargados.
                  </Typography>
                )}
                {docPreviews.map((doc, idx) => (
                  <Box key={idx} sx={{ position: 'relative', display: 'inline-block', minWidth: 120 }}>
                    <img
                      src={doc.url}
                      alt={doc.name}
                      style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 4, border: '1px solid #ccc' }}
                    />
                    <Typography variant="caption" display="block">{doc.name}</Typography>
                    <Typography variant="caption" color="textSecondary" display="block">{doc.type}</Typography>
                    <IconButton
                      size="small"
                      color="error"
                      sx={{ position: 'absolute', top: 0, right: 0 }}
                      onClick={() => handleRemoveDocument(idx)}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" component="label">
                  Agregar Título
                  <input
                    type="file"
                    accept="application/pdf,image/*"
                    hidden
                    onChange={(e) => handleAddDocument(e, "Título")}
                  />
                </Button>
                <Button variant="outlined" component="label">
                  Agregar Plano
                  <input
                    type="file"
                    accept="application/pdf,image/*"
                    hidden
                    onChange={(e) => handleAddDocument(e, "Plano")}
                  />
                </Button>
                <Button variant="outlined" component="label">
                  Agregar Contrato
                  <input
                    type="file"
                    accept="application/pdf,image/*"
                    hidden
                    onChange={(e) => handleAddDocument(e, "Contrato")}
                  />
                </Button>
              </Stack>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSaveContract} color="primary" variant="contained">
            {editingContract ? "Guardar Cambios" : "Crear Contrato"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
