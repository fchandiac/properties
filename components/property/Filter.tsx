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
  Slider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// Lista de regiones y comunas de Chile
const regionsAndCommunes = [
  {
    region: "Región Metropolitana",
    communes: ["Santiago", "Providencia", "Las Condes", "La Florida", "Puente Alto"],
  },
  {
    region: "Valparaíso",
    communes: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "Concón"],
  },
  {
    region: "Biobío",
    communes: ["Concepción", "Talcahuano", "Los Ángeles", "Chillán", "Coronel"],
  },
  {
    region: "Maule",
    communes: ["Talca", "Curicó", "Linares", "Constitución", "San Javier", "Parral"],
  },
];

// Lista de tipos de propiedad
const propertyTypes = ["Casa", "Departamento", "Oficina", "Local", "Terreno"];

export default function Filter() {
  const [openFilter, setOpenFilter] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCommune, setSelectedCommune] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedSaleRent, setSelectedSaleRent] = useState("");
  const [priceRange, setPriceRange] = useState([50000000, 300000000]); // Rango inicial en CLP

  // Obtener comunas filtradas según la región seleccionada
  const communes =
    regionsAndCommunes.find((region) => region.region === selectedRegion)?.communes || [];

  // Manejar cambio en el slider
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

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
      <Box sx={{ display: "flex", justifyContent: "space-between", color: "#9e9e9e" }}>
        <Typography fontSize={16} sx={{ flexGrow: 1 }}>
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
              {/* Filtro Venta / Arriendo */}
              <FormControl fullWidth size="small">
                <InputLabel sx={{ backgroundColor: "white", padding: "3px 5px" }}>
                  Venta / Arriendo
                </InputLabel>
                <Select
                  value={selectedSaleRent}
                  onChange={(e) => setSelectedSaleRent(e.target.value)}
                >
                  <MenuItem value="Venta">Venta</MenuItem>
                  <MenuItem value="Arriendo">Arriendo</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={4} lg={3} xl={2}>
              {/* Filtro tipo de propiedad */}
              <FormControl fullWidth size="small">
                <InputLabel sx={{ backgroundColor: "white", padding: "3px 5px" }}>
                  Tipo de propiedad
                </InputLabel>
                <Select
                  value={selectedPropertyType}
                  onChange={(e) => setSelectedPropertyType(e.target.value)}
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
                <InputLabel sx={{ backgroundColor: "white", padding: "3px 5px" }}>
                  Región
                </InputLabel>
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
                <InputLabel sx={{ backgroundColor: "white", padding: "3px 5px" }}>
                  Comuna
                </InputLabel>
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

            <Grid item xs={12} md={8} lg={6} xl={4}>
              {/* Filtro de Rango de Precios */}
              <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
                Rango de Precios (CLP)
              </Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={10000000} // 10M CLP
                max={1000000000} // 1B CLP
                step={5000000} // Incremento de 5M CLP
              />
              <Typography variant="caption">
                {new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(priceRange[0])}{" "}
                -{" "}
                {new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(priceRange[1])}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
