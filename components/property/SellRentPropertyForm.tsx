"use client";
import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";

interface SellRentPropertyFormProps {
  type?: 0 | 1;
  googleMapLink?: string | null;
  youtubeLink?: string | null;
  ticToLink?: string | null;
  category?: string;
  builtArea?: number;
  landArea?: number;
  bathrooms?: number;
  bedrooms?: number;
  parkingSpaces?: number;
  address?: string;
  description?: string;
  name?: string;
  rut?: string;
  phone?: string;
  email?: string;
}

const categories = ["House", "Apartment", "Condo", "Townhouse", "Studio"];

export default function SellRentPropertyForm({
  type = 0,
  googleMapLink = '',
  youtubeLink = '',
  ticToLink = '',
  category = "House",
  builtArea = 120,
  landArea = 200,
  bathrooms = 2,
  bedrooms = 3,
  parkingSpaces = 1,
  address = "123 Main St, Santiago, Chile",
  description = "This is a beautiful house in the heart of Santiago, Chile.",
  name = "John Doe",
  rut = "12.345.678-9",
  phone = "+56 9 1234 5678",
  email = "mail@mail.com",
}: SellRentPropertyFormProps) {
  const [propertyData, setPropertyData] = useState({
    type,
    category,
    builtArea,
    landArea,
    bathrooms,
    bedrooms,
    parkingSpaces,
    address,
    description,
    name,
    rut,
    phone,
    email,
  });

  return (
    <Grid container spacing={2} direction="column">
      <Grid item mb={2}>
        <Typography variant="h4">
          {type === 0
            ? "¿Quieres Vender tu propiedad?"
            : "¿Quieres Arrendar tu propiedad?"}
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6">Información de la propiedad</Typography>
      </Grid>

      <Grid item>
        <FormControl fullWidth
        size="small"
        >
          <InputLabel id="category-label"
          sx={{
            backgroundColor: "white",
            padding: "3px 5px",
          
          }}
          >Categoría</InputLabel>
          <Select
            id="category-select"
            labelId="category-label"
            name="category"
            value={propertyData.category}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <TextField
          fullWidth
             size="small"
          name="builtArea"
          label="Metros Construidos (m²)"
          type="number"
          value={propertyData.builtArea}
          //onChange={handleFieldChange}
        />
      </Grid>

      <Grid item>
        <TextField
          fullWidth
             size="small"
          name="landArea"
          label="Metros de Terreno (m²)"
          type="number"
          value={propertyData.landArea}
          //onChange={handleFieldChange}
        />
      </Grid>

      <Grid item>
        <TextField
          fullWidth
             size="small"
          name="bathrooms"
          label="Baños"
          type="number"
          value={propertyData.bathrooms}
          //onChange={handleFieldChange}
        />
      </Grid>

      <Grid item>
        <TextField
          fullWidth
             size="small"
          name="bedrooms"
          label="Habitaciones"
          type="number"
          value={propertyData.bedrooms}
          //onChange={handleFieldChange}
        />
      </Grid>

      <Grid item>
        <TextField
          fullWidth
             size="small"
          name="parkingSpaces"
          label="Estacionamientos"
          type="number"
          value={propertyData.parkingSpaces}
          // onChange={handleFieldChange}
        />
      </Grid>

      <Grid item>
        <Typography variant="h6">Ubicación</Typography>
        <TextField
          fullWidth
             size="small"
          name="address"
          label="Dirección"
          value={propertyData.address}
          // onChange={handleFieldChange}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          name="googleMapLink"
             size="small"
          label="Google Maps"
          value={googleMapLink}
          //onChange={handleFieldChange}
        />
      </Grid>

      <Grid item>
        <Typography variant="h6">Descripción</Typography>
        <TextField
          fullWidth
             size="small"
          name="description"
          label="Descripción"
          multiline
          rows={4}
          value={propertyData.description}
          //onChange={handleFieldChange}
        />
      </Grid>

      <Grid item>
        <Typography variant="h6">Información del Propietario</Typography>
      </Grid>

      <Grid item>
        <TextField
          fullWidth
          name="name"
             size="small"
          label="Nombre"
          value={propertyData.name}
          // onChange={handleFieldChange}
        />
      </Grid>

      <Grid item>
        <TextField
          fullWidth
          name="rut"
          label="RUT"
             size="small"
          value={propertyData.rut}
          //onChange={handleFieldChange}
        />
      </Grid>

      <Grid item>
        <TextField
          fullWidth
          name="phone"
          label="Teléfono"
             size="small"
          value={propertyData.phone}
          //onChange={handleFieldChange}
        />
      </Grid>

      <Grid item>
        <TextField
          fullWidth
          name="email"
          label="Correo Electrónico"
             size="small"
          value={propertyData.email}
          //onChange={handleFieldChange}
        />
      </Grid>

      <Grid item textAlign={'right'}>
        <Button variant="contained" color="primary">
          Solicitar contacto
        </Button>
      </Grid>
    </Grid>
  );
}
