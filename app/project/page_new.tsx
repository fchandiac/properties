"use client";
import React from "react";
import { Box, Typography, Paper, Grid, Container, Card, CardContent, CardMedia, Divider, Chip, Tab, Tabs } from "@mui/material";

export default function ProjectPage() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Proyecto Inmobiliario
      </Typography>
      
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
        Plataforma integral para la gestión inmobiliaria con Plataforma Inmobiliaria pública y panel administrativo
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper 
            elevation={3}
            sx={{ 
              p: 3, 
              borderRadius: 2
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Descripción General
            </Typography>
            <Typography paragraph>
              Esta plataforma inmobiliaria completa integra dos componentes principales: una Plataforma Inmobiliaria pública 
              y un panel administrativo (Backoffice). El sistema permite la gestión completa del ciclo inmobiliario, 
              desde la publicación de propiedades hasta la gestión de contratos y clientes.
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                variant="fullWidth"
                sx={{
                  mb: 3,
                  '& .MuiTab-root': {
                    fontWeight: 600,
                    fontSize: '1rem',
                  },
                  '& .Mui-selected': {
                    color: tabValue === 0 ? '#1976d2' : '#4caf50',
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: tabValue === 0 ? '#1976d2' : '#4caf50',
                    height: 3
                  }
                }}
              >
                <Tab label="Plataforma Inmobiliaria" />
                <Tab label="Panel Administrativo (Backoffice)" />
              </Tabs>
              
              {/* Contenido de Plataforma Inmobiliaria */}
              {tabValue === 0 && (
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Card 
                        elevation={4}
                        sx={{ 
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 2,
                          overflow: 'hidden'
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="220"
                          image="https://hips.hearstapps.com/hmg-prod/images/230504-voluar-la-casa-que-se-bifurca-019-662229a00e335.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
                          alt="Plataforma Inmobiliaria"
                          sx={{ objectFit: 'cover' }}
                        />
                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 500 }}>
                            Secciones Principales
                          </Typography>
                          
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Inicio</Typography>
                                <Typography variant="body2">
                                  Página principal con propiedades destacadas y acceso rápido a funciones principales.
                                </Typography>
                              </Box>
                              
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Propiedades</Typography>
                                <Typography variant="body2">
                                  Catálogo completo de propiedades con filtros avanzados y visualización detallada.
                                </Typography>
                              </Box>
                              
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Vender/Arrendar</Typography>
                                <Typography variant="body2">
                                  Formularios para propietarios que desean publicar sus propiedades.
                                </Typography>
                              </Box>
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Blog</Typography>
                                <Typography variant="body2">
                                  Artículos informativos sobre el mercado inmobiliario y consejos para compradores.
                                </Typography>
                              </Box>
                              
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Testimonios</Typography>
                                <Typography variant="body2">
                                  Experiencias de clientes satisfechos con el servicio.
                                </Typography>
                              </Box>
                              
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Contacto</Typography>
                                <Typography variant="body2">
                                  Información de contacto y formulario para consultas.
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Card 
                        elevation={4}
                        sx={{ 
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 2
                        }}
                      >
                        <CardContent sx={{ p: 3, flexGrow: 1 }}>
                          <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 500 }}>
                            Características Destacadas
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                              <Box
                                sx={{
                                  bgcolor: 'rgba(25, 118, 210, 0.1)',
                                  color: '#1976d2',
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  fontWeight: 'bold'
                                }}
                              >
                                1
                              </Box>
                              <Box>
                                <Typography variant="subtitle1" fontWeight={600}>Búsqueda y Filtrado Avanzado</Typography>
                                <Typography variant="body2">
                                  Filtros por ubicación, precio, características, tipo de operación (venta/arriendo) 
                                  y más. Resultados inmediatos y relevantes.
                                </Typography>
                              </Box>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                              <Box
                                sx={{
                                  bgcolor: 'rgba(25, 118, 210, 0.1)',
                                  color: '#1976d2',
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  fontWeight: 'bold'
                                }}
                              >
                                2
                              </Box>
                              <Box>
                                <Typography variant="subtitle1" fontWeight={600}>Visualización Inmersiva</Typography>
                                <Typography variant="body2">
                                  Galerías de imágenes de alta calidad, tours virtuales 360° y videos
                                  que permiten explorar cada detalle de las propiedades.
                                </Typography>
                              </Box>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                              <Box
                                sx={{
                                  bgcolor: 'rgba(25, 118, 210, 0.1)',
                                  color: '#1976d2',
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  fontWeight: 'bold'
                                }}
                              >
                                3
                              </Box>
                              <Box>
                                <Typography variant="subtitle1" fontWeight={600}>Gestión de Favoritos</Typography>
                                <Typography variant="body2">
                                  Los usuarios pueden guardar propiedades para revisarlas después,
                                  comparar opciones y solicitar información adicional.
                                </Typography>
                              </Box>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                              <Box
                                sx={{
                                  bgcolor: 'rgba(25, 118, 210, 0.1)',
                                  color: '#1976d2',
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  fontWeight: 'bold'
                                }}
                              >
                                4
                              </Box>
                              <Box>
                                <Typography variant="subtitle1" fontWeight={600}>Calculadoras y Herramientas</Typography>
                                <Typography variant="body2">
                                  Herramientas para calcular hipotecas, estimar costos y evaluar
                                  opciones de financiamiento para las propiedades.
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </CardContent>
                        
                        <Box sx={{ p: 3, bgcolor: 'rgba(25, 118, 210, 0.05)' }}>
                          <Typography variant="body2" fontStyle="italic">
                            "Diseñado para una experiencia óptima en todos los dispositivos: móviles, tablets y escritorio."
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                        {['Diseño Responsivo', 'Optimizado para SEO', 'Carga Rápida', 'Experiencia Intuitiva', 'Contacto Multicanal', 'Mapas Interactivos'].map((feature) => (
                          <Chip 
                            key={feature} 
                            label={feature}
                            sx={{ 
                              bgcolor: 'rgba(25, 118, 210, 0.1)', 
                              color: '#1976d2',
                              fontWeight: 500,
                              m: 0.5
                            }}
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              )}
              
              {/* Contenido de Backoffice */}
              {tabValue === 1 && (
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Card 
                        elevation={4}
                        sx={{ 
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 2,
                          overflow: 'hidden'
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="220"
                          image="https://www.vinasconstructora.com/wp-content/uploads/2024/06/casa-modernas-minimalistas.jpg"
                          alt="Panel administrativo"
                          sx={{ objectFit: 'cover' }}
                        />
                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                          <Typography variant="h5" gutterBottom sx={{ color: '#4caf50', fontWeight: 500 }}>
                            Módulos Principales
                          </Typography>
                          
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Propiedades</Typography>
                                <Typography variant="body2">
                                  Gestión completa de propiedades: creación, edición, fotos, historial de cambios y operaciones.
                                </Typography>
                              </Box>
                              
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Contratos</Typography>
                                <Typography variant="body2">
                                  Administración de contratos de venta/arriendo con gestión de documentos y seguimiento.
                                </Typography>
                              </Box>
                              
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Agentes</Typography>
                                <Typography variant="body2">
                                  Control de agentes inmobiliarios, asignación de propiedades y seguimiento de rendimiento.
                                </Typography>
                              </Box>
                              
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Clientes</Typography>
                                <Typography variant="body2">
                                  Base de datos de clientes con historial de interacciones y preferencias.
                                </Typography>
                              </Box>
                            </Grid>
                            
                            <Grid item xs={12} md={6}>
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Blog</Typography>
                                <Typography variant="body2">
                                  Gestión de contenidos y artículos con métricas de popularidad y visitas.
                                </Typography>
                              </Box>
                              
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Testimonios</Typography>
                                <Typography variant="body2">
                                  Administración de testimonios de clientes con fotos y aprobación.
                                </Typography>
                              </Box>
                              
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Slider/Banner</Typography>
                                <Typography variant="body2">
                                  Control de imágenes y mensajes promocionales en la página principal.
                                </Typography>
                              </Box>
                              
                              <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>Reportes</Typography>
                                <Typography variant="body2">
                                  Informes y estadísticas sobre ventas, visitas y rendimiento.
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Card 
                        elevation={4}
                        sx={{ 
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 2
                        }}
                      >
                        <CardContent sx={{ p: 3, flexGrow: 1 }}>
                          <Typography variant="h5" gutterBottom sx={{ color: '#4caf50', fontWeight: 500 }}>
                            Funcionalidades Avanzadas
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                              <Box
                                sx={{
                                  bgcolor: 'rgba(76, 175, 80, 0.1)',
                                  color: '#4caf50',
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  fontWeight: 'bold'
                                }}
                              >
                                1
                              </Box>
                              <Box>
                                <Typography variant="subtitle1" fontWeight={600}>Filtros Avanzados</Typography>
                                <Typography variant="body2">
                                  Búsqueda y filtrado por múltiples criterios: precio, fecha, operación, ubicación,
                                  con separación visual entre búsqueda y filtros para una mejor experiencia.
                                </Typography>
                              </Box>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                              <Box
                                sx={{
                                  bgcolor: 'rgba(76, 175, 80, 0.1)',
                                  color: '#4caf50',
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  fontWeight: 'bold'
                                }}
                              >
                                2
                              </Box>
                              <Box>
                                <Typography variant="subtitle1" fontWeight={600}>Gestión Multimedia</Typography>
                                <Typography variant="body2">
                                  Administración completa de imágenes y documentos para propiedades y contratos,
                                  con funcionalidades para ver, agregar y eliminar archivos.
                                </Typography>
                              </Box>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                              <Box
                                sx={{
                                  bgcolor: 'rgba(76, 175, 80, 0.1)',
                                  color: '#4caf50',
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  fontWeight: 'bold'
                                }}
                              >
                                3
                              </Box>
                              <Box>
                                <Typography variant="subtitle1" fontWeight={600}>Historial y Trazabilidad</Typography>
                                <Typography variant="body2">
                                  Seguimiento completo de cambios en propiedades (precio, estado) 
                                  con visualización en modal para una revisión detallada.
                                </Typography>
                              </Box>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                              <Box
                                sx={{
                                  bgcolor: 'rgba(76, 175, 80, 0.1)',
                                  color: '#4caf50',
                                  width: 40,
                                  height: 40,
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  fontWeight: 'bold'
                                }}
                              >
                                4
                              </Box>
                              <Box>
                                <Typography variant="subtitle1" fontWeight={600}>Sección "Sobre Nosotros" Editable</Typography>
                                <Typography variant="body2">
                                  Editor de contenido para la sección "Sobre Nosotros" con gestión de texto
                                  y elementos multimedia como videos promocionales.
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </CardContent>
                        
                        <Box sx={{ p: 3, bgcolor: 'rgba(76, 175, 80, 0.05)' }}>
                          <Typography variant="body2" fontStyle="italic">
                            "Panel administrativo completo con todas las herramientas necesarias para gestionar eficientemente el negocio inmobiliario."
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                        {['Gestión de Usuarios', 'Control de Acceso', 'Dashboard Analítico', 'Filtros Avanzados', 'Notificaciones', 'Exportación de Datos'].map((feature) => (
                          <Chip 
                            key={feature} 
                            label={feature}
                            sx={{ 
                              bgcolor: 'rgba(76, 175, 80, 0.1)', 
                              color: '#4caf50',
                              fontWeight: 500,
                              m: 0.5
                            }}
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>
        
        {/* Galería de Propiedades */}
        <Grid item xs={12}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              mt: 4, 
              mb: 2,
              background: 'linear-gradient(to right, #f8f9fc, #eff1f7)',
              borderRadius: 2
            }}
          >
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  color: '#2c3e50',
                  position: 'relative',
                  display: 'inline-block',
                  pb: 2,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '60px',
                    height: '3px',
                    bottom: 0,
                    left: 'calc(50% - 30px)',
                    backgroundColor: '#ff9800',
                  }
                }}
              >
                Propiedades Destacadas
              </Typography>
              <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                sx={{ maxWidth: '800px', mx: 'auto', mt: 1 }}
              >
                Nuestra selección de propiedades exclusivas disponibles en la plataforma
              </Typography>
            </Box>
            
            <Grid container spacing={2}>
              {[
                "https://hips.hearstapps.com/hmg-prod/images/230504-voluar-la-casa-que-se-bifurca-019-662229a00e335.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
                "https://www.vinasconstructora.com/wp-content/uploads/2024/06/casa-modernas-minimalistas.jpg",
                "https://soyarquitectura.mx/wp-content/uploads/2024/06/portada-despacho-arquitectos-render-14.webp",
                "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg"
              ].map((image, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      height: 200,
                      position: 'relative',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        '& .overlay': {
                          opacity: 1
                        }
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`Propiedad ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        p: 1,
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out'
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight={500}>
                        Propiedad Exclusiva
                      </Typography>
                      <Typography variant="body2">
                        {index % 2 === 0 ? 'Venta' : 'Arriendo'} · {Math.floor(Math.random() * 5) + 2} Dormitorios
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            
            <Box 
              sx={{ 
                mt: 4, 
                textAlign: 'center',
                p: 2,
                borderRadius: 2,
                bgcolor: 'rgba(255, 152, 0, 0.05)',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Encuentra tu hogar ideal
              </Typography>
              <Typography>
                Navega por nuestra amplia selección de propiedades y descubre opciones perfectamente 
                adaptadas a tus necesidades y estilo de vida.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
