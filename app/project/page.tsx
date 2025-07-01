"use client";
import React from "react";
import { Box, Typography, Paper, Grid, Container, Card, CardContent, CardMedia, Divider } from "@mui/material";

export default function ProjectPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Proyecto Inmobiliario
      </Typography>
      
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Información detallada sobre el desarrollo del proyecto inmobiliario y su progreso
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3}
            sx={{ 
              p: 3, 
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Descripción del Proyecto
            </Typography>
            <Typography paragraph>
              Este proyecto consiste en el desarrollo de una plataforma inmobiliaria completa
              que permite la gestión de propiedades, contratos, agentes y clientes. La plataforma
              cuenta con un panel administrativo (Backoffice) y una interfaz pública para usuarios.
            </Typography>
            <Typography paragraph>
              El objetivo principal es facilitar la venta y arriendo de propiedades, ofreciendo
              herramientas tanto para administradores como para clientes, mejorando la eficiencia
              del proceso inmobiliario.
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary">
              Fecha de inicio: Enero 2025
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fecha estimada de finalización: Diciembre 2025
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="240"
              image="/public/prop.png"
              alt="Imagen del proyecto"
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Estado Actual
              </Typography>
              <Typography paragraph>
                Actualmente, el proyecto se encuentra en fase de desarrollo, con un avance
                aproximado del 60%. Se han implementado las funcionalidades principales del
                backoffice y se está trabajando en la interfaz de usuario público.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Última actualización: 1 de julio de 2025
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Características Principales
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Gestión de Propiedades
                    </Typography>
                    <Typography variant="body2">
                      Permite administrar propiedades, incluyendo información detallada,
                      imágenes, precios y estado (venta/arriendo).
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Gestión de Contratos
                    </Typography>
                    <Typography variant="body2">
                      Sistema completo para la gestión de contratos de venta y arriendo,
                      incluyendo documentación y seguimiento.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Blog y Marketing
                    </Typography>
                    <Typography variant="body2">
                      Módulo de blog para contenido de marketing inmobiliario,
                      con análisis de métricas y popularidad.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
