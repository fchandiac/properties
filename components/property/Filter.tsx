"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Lista de regiones y comunas de Chile
const regionsAndCommunes = [
  {
    region: "Región Metropolitana",
    communes: [
      "Santiago",
      "Providencia",
      "Las Condes",
      "La Florida",
      "Puente Alto",
    ],
  },
  {
    region: "Valparaíso",
    communes: [
      "Valparaíso",
      "Viña del Mar",
      "Quilpué",
      "Villa Alemana",
      "Concón",
    ],
  },
  {
    region: "Biobío",
    communes: ["Concepción", "Talcahuano", "Los Ángeles", "Chillán", "Coronel"],
  },
  {
    region: "Maule",
    communes: [
      "Talca",
      "Curicó",
      "Linares",
      "Constitución",
      "San Javier",
      "Parral",
    ],
  },
];

// lista de tipos de propiedad
const propertyTypes = ["Casa", "Departamento", "Oficina", "Local", "Terreno"];

export default function Filter() {
  const [openFilter, setOpenFilter] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCommune, setSelectedCommune] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedSaleRent, setSelectedSaleRent] = useState("");

  // Obtener comunas filtradas según la región seleccionada
  const communes =
    regionsAndCommunes.find((region) => region.region === selectedRegion)
      ?.communes || [];

  return (
    <Box
      sx={{
        paddingX: 1,
        paddingY: 0.5,
        paddingBottom: 1,
        border: ".5px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        margin: "auto",
        backgroundColor: "white",
        position: "relative",
        mb: 2,
        "&:hover": {
          boxShadow: "0px 8px 16px rgba(0,0,0,0.5)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#9e9e9e",
        }}
      >
        <Typography
          fontSize={16}
          sx={{
            flexGrow: 1,
          }}
        >
          Filtros
        </Typography>

        {openFilter ? (
          <ExpandLessIcon onClick={() => setOpenFilter(false)} />
        ) : (
          <ExpandMoreIcon onClick={() => setOpenFilter(true)} />
        )}
      </Box>
      {openFilter && (
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4} lg={3} xl={2}>
              {/* Filtro tipo de propiedad */}
              <FormControl fullWidth size="small">
                <InputLabel
                  sx={{
                    backgroundColor: "white",
                    padding: "3px 5px",
                  
                  }}
                >Venta / Arriendo </InputLabel>
                <Select
                  value={selectedSaleRent}
                  onChange={(e) => {
                    setSelectedSaleRent(e.target.value);
                  }}
                >
                  <MenuItem value="Venta">Venta</MenuItem>
                  <MenuItem value="Arriendo">Arriendo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={4} lg={3} xl={2}>
              {/* Filtro tipo de propiedad */}
              <FormControl fullWidth size="small">
                <InputLabel
                  sx={{
                    backgroundColor: "white",
                    padding: "3px 5px",
                  
                  }}
                >Tipo de propiedad</InputLabel>
                <Select
                  value={selectedPropertyType}
                  onChange={(e) => {
                    setSelectedPropertyType(e.target.value);
               
                  }}
                >
                  {propertyTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={4} lg={3} xl={2}>
              {/* Filtro por Región */}
              <FormControl fullWidth size="small">
                <InputLabel
                  sx={{
                    backgroundColor: "white",
                    padding: "3px 5px",
                  
                  }}
                >Región</InputLabel>
                <Select
                  value={selectedRegion}
                  onChange={(e) => {
                    setSelectedRegion(e.target.value);
                    setSelectedCommune(""); // Reinicia la comuna al cambiar la región
                  }}
                >
                  {regionsAndCommunes.map((region) => (
                    <MenuItem key={region.region} value={region.region}>
                      {region.region}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={4} lg={3} xl={2}>
              {/* Filtro por Comuna */}
              <FormControl fullWidth size="small" disabled={!selectedRegion}>
                <InputLabel
                  sx={{
                    backgroundColor: "white",
                    padding: "3px 5px",
                  
                  }}
                >Comuna</InputLabel>
                <Select
                  value={selectedCommune}
                  onChange={(e) => setSelectedCommune(e.target.value)}
                >
                  {communes.map((commune) => (
                    <MenuItem key={commune} value={commune}>
                      {commune}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
