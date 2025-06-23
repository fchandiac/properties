"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  Stack,
  Alert,
  Chip,
} from "@mui/material";
import {
  Save,
  Security,
  Notifications,
  Language,
  Palette,
  Email,
  Backup,
  Public,
} from "@mui/icons-material";

export default function Settings() {
  const [settings, setSettings] = useState({
    // General Settings
    siteName: "Inmobiliaria Premium",
    siteDescription: "Tu inmobiliaria de confianza",
    contactEmail: "contacto@inmobiliaria.com",
    contactPhone: "+56 9 1234 5678",
    address: "Av. Principal 123, Santiago, Chile",
    
    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    weeklyReports: true,
    
    // Security
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordExpiry: 90,
    
    // Appearance
    darkMode: false,
    compactView: false,
    language: "es",
    
    // Business
    currency: "CLP",
    timeZone: "America/Santiago",
    showUF: true,
    autoApproveListings: false,
  });

  const [saved, setSaved] = useState(false);

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // Here you would implement the save logic
    console.log("Saving settings:", settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
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
          Configuración del Sistema
        </Typography>
        <Button
          variant="contained"
          startIcon={<Save />}
          size="large"
          onClick={handleSave}
        >
          Guardar Cambios
        </Button>
      </Stack>

      {saved && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Configuración guardada correctamente
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* General Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              avatar={<Public color="primary" />}
              title="Configuración General"
              subheader="Información básica del sitio"
            />
            <CardContent>
              <Stack spacing={3}>
                <TextField
                  label="Nombre del Sitio"
                  fullWidth
                  value={settings.siteName}
                  onChange={(e) => handleSettingChange("siteName", e.target.value)}
                />
                <TextField
                  label="Descripción"
                  fullWidth
                  multiline
                  rows={2}
                  value={settings.siteDescription}
                  onChange={(e) => handleSettingChange("siteDescription", e.target.value)}
                />
                <TextField
                  label="Email de Contacto"
                  fullWidth
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => handleSettingChange("contactEmail", e.target.value)}
                />
                <TextField
                  label="Teléfono de Contacto"
                  fullWidth
                  value={settings.contactPhone}
                  onChange={(e) => handleSettingChange("contactPhone", e.target.value)}
                />
                <TextField
                  label="Dirección"
                  fullWidth
                  multiline
                  rows={2}
                  value={settings.address}
                  onChange={(e) => handleSettingChange("address", e.target.value)}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Notification Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              avatar={<Notifications color="primary" />}
              title="Notificaciones"
              subheader="Configurar alertas y notificaciones"
            />
            <CardContent>
              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.emailNotifications}
                      onChange={(e) => handleSettingChange("emailNotifications", e.target.checked)}
                    />
                  }
                  label="Notificaciones por Email"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.smsNotifications}
                      onChange={(e) => handleSettingChange("smsNotifications", e.target.checked)}
                    />
                  }
                  label="Notificaciones por SMS"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.pushNotifications}
                      onChange={(e) => handleSettingChange("pushNotifications", e.target.checked)}
                    />
                  }
                  label="Notificaciones Push"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.weeklyReports}
                      onChange={(e) => handleSettingChange("weeklyReports", e.target.checked)}
                    />
                  }
                  label="Reportes Semanales"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Security Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              avatar={<Security color="primary" />}
              title="Seguridad"
              subheader="Configuración de seguridad y acceso"
            />
            <CardContent>
              <Stack spacing={3}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.twoFactorAuth}
                      onChange={(e) => handleSettingChange("twoFactorAuth", e.target.checked)}
                    />
                  }
                  label="Autenticación de Dos Factores"
                />
                <TextField
                  label="Timeout de Sesión (minutos)"
                  type="number"
                  fullWidth
                  value={settings.sessionTimeout}
                  onChange={(e) => handleSettingChange("sessionTimeout", parseInt(e.target.value))}
                />
                <TextField
                  label="Expiración de Contraseña (días)"
                  type="number"
                  fullWidth
                  value={settings.passwordExpiry}
                  onChange={(e) => handleSettingChange("passwordExpiry", parseInt(e.target.value))}
                />
                <Stack spacing={1}>
                  <Typography variant="body2" color="textSecondary">
                    Estado de Seguridad:
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label={settings.twoFactorAuth ? "2FA Activo" : "2FA Inactivo"}
                      color={settings.twoFactorAuth ? "success" : "warning"}
                      size="small"
                    />
                    <Chip
                      label="SSL Activo"
                      color="success"
                      size="small"
                    />
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Appearance Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              avatar={<Palette color="primary" />}
              title="Apariencia"
              subheader="Personalización de la interfaz"
            />
            <CardContent>
              <Stack spacing={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.darkMode}
                      onChange={(e) => handleSettingChange("darkMode", e.target.checked)}
                    />
                  }
                  label="Modo Oscuro"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.compactView}
                      onChange={(e) => handleSettingChange("compactView", e.target.checked)}
                    />
                  }
                  label="Vista Compacta"
                />
                <TextField
                  label="Idioma"
                  select
                  fullWidth
                  value={settings.language}
                  onChange={(e) => handleSettingChange("language", e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="pt">Português</option>
                </TextField>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Business Settings */}
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Configuración de Negocio"
              subheader="Parámetros específicos del negocio inmobiliario"
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Moneda Principal"
                    select
                    fullWidth
                    value={settings.currency}
                    onChange={(e) => handleSettingChange("currency", e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="CLP">Peso Chileno (CLP)</option>
                    <option value="USD">Dólar Americano (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                  </TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Zona Horaria"
                    select
                    fullWidth
                    value={settings.timeZone}
                    onChange={(e) => handleSettingChange("timeZone", e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="America/Santiago">Santiago, Chile</option>
                    <option value="America/Buenos_Aires">Buenos Aires, Argentina</option>
                    <option value="America/Lima">Lima, Perú</option>
                  </TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack spacing={2}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.showUF}
                          onChange={(e) => handleSettingChange("showUF", e.target.checked)}
                        />
                      }
                      label="Mostrar precios en UF"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.autoApproveListings}
                          onChange={(e) => handleSettingChange("autoApproveListings", e.target.checked)}
                        />
                      }
                      label="Auto-aprobar publicaciones"
                    />
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* System Information */}
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Información del Sistema"
              subheader="Estado y versión del sistema"
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="textSecondary">
                    Versión del Sistema:
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    v2.1.0
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="textSecondary">
                    Última Actualización:
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    15/01/2024
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="textSecondary">
                    Estado del Servidor:
                  </Typography>
                  <Chip label="En Línea" color="success" size="small" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2" color="textSecondary">
                    Último Backup:
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    Hoy, 03:00 AM
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
