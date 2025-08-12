"use client";
import React from "react";
import { Box, Typography, Paper, Grid, Container, Card, CardContent, CardMedia, Divider, Chip } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Crear un tema personalizado para la impresión
const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media print': {
            padding: '0 !important',
            margin: '0 !important',
            width: '100% !important',
            maxWidth: 'none !important',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '@media print': {
            boxShadow: 'none !important',
            margin: '0 !important',
          },
        },
      },
    },
  },
});

export default function ProjectPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: 4, 
          mb: 8,
          '@media print': {
            mt: 0,
            mb: 0,
            maxWidth: '100%',
            width: '100%',
          }
        }}
      >
        <style jsx global>{`
          @media print {
            @page {
              size: letter portrait;
              margin: 1cm;
            }
            body {
              min-width: initial !important;
            }
            .page {
              page-break-after: always;
              margin-bottom: 0 !important;
            }
          }
        `}</style>
        
        <Box className="page" sx={{ 
          minHeight: 'auto',
          paddingBottom: '2rem',
          marginBottom: '2rem',
          '@media print': {
            pageBreakAfter: 'always',
          }
        }}>
          <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ pt: 4 }}>
            Proyecto Inmobiliario
          </Typography>
          
          <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Plataforma integral para la gestión inmobiliaria con Plataforma Inmobiliaria pública y panel administrativo
          </Typography>
          
          <Paper 
            elevation={3}
            sx={{ 
              p: 3, 
              borderRadius: 2,
              mb: 4
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
          </Paper>

          <Paper
            elevation={3}
            sx={{ 
              p: 3, 
              borderRadius: 2,
              mb: 4
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Objetivos Globales de la Aplicación
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={600}>Optimización del Mercado Inmobiliario</Typography>
                  <Typography variant="body2">
                    Facilitar la conexión entre propietarios, agentes y clientes para agilizar los procesos de compra, venta y arriendo 
                    de propiedades, reduciendo los tiempos de gestión y mejorando la eficiencia del mercado.
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={600}>Transparencia y Confianza</Typography>
                  <Typography variant="body2">
                    Proporcionar información clara, completa y verificada sobre todas las propiedades, 
                    generando confianza entre todas las partes involucradas en las transacciones inmobiliarias.
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={600}>Accesibilidad Digital</Typography>
                  <Typography variant="body2">
                    Democratizar el acceso a oportunidades inmobiliarias mediante una plataforma digital 
                    intuitiva disponible en cualquier dispositivo, eliminando barreras geográficas y temporales.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={600}>Digitalización de Procesos</Typography>
                  <Typography variant="body2">
                    Transformar procesos tradicionalmente manuales y presenciales en flujos digitales eficientes, 
                    desde la captura de propiedades hasta la firma de contratos.
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={600}>Centralización de la Información</Typography>
                  <Typography variant="body2">
                    Ofrecer un punto único de acceso a toda la información relevante del mercado inmobiliario,
                    facilitando la toma de decisiones informadas por parte de todos los usuarios.
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={600}>Escalabilidad y Adaptabilidad</Typography>
                  <Typography variant="body2">
                    Desarrollar una plataforma capaz de crecer con las necesidades del mercado y adaptarse 
                    rápidamente a cambios en el sector inmobiliario local y global.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Segunda página - Plataforma Inmobiliaria */}
        <Box className="page" sx={{ 
          minHeight: 'auto',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          marginBottom: '2rem',
          borderTop: '1px dashed #ccc',
          '@media print': {
            pageBreakBefore: 'always',
            pageBreakAfter: 'always',
          }
        }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
            color: '#1976d2', 
            mb: 4,
            borderBottom: '2px solid #1976d2',
            paddingBottom: '0.5rem'
          }}>
            Plataforma Inmobiliaria
          </Typography>
          
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
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Tercera página - Continuación de Plataforma Inmobiliaria */}
        <Box className="page" sx={{ 
          minHeight: 'auto',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          marginBottom: '2rem',
          borderTop: '1px dashed #ccc',
          '@media print': {
            pageBreakBefore: 'always',
            pageBreakAfter: 'always',
          }
        }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
            color: '#1976d2', 
            mb: 4,
            borderBottom: '2px solid #1976d2',
            paddingBottom: '0.5rem'
          }}>
            Plataforma Inmobiliaria (continuación)
          </Typography>
          
          <Grid container spacing={3}>
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
                    Características Destacadas (continuación)
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
                  height="200"
                  image="https://www.vinasconstructora.com/wp-content/uploads/2024/06/casa-modernas-minimalistas.jpg"
                  alt="Propiedad de ejemplo"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 500 }}>
                    Beneficios para el Usuario
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight={600}>Ahorro de Tiempo</Typography>
                    <Typography variant="body2">
                      Búsqueda eficiente con filtros personalizados que muestran solo propiedades relevantes.
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight={600}>Decisiones Informadas</Typography>
                    <Typography variant="body2">
                      Información completa sobre cada propiedad, incluyendo detalles técnicos, ubicación y entorno.
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight={600}>Transparencia</Typography>
                    <Typography variant="body2">
                      Precios claros, condiciones detalladas y posibilidad de contacto directo con agentes verificados.
                    </Typography>
                  </Box>
                </CardContent>
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
        
        {/* Cuarta página - Panel Administrativo */}
        <Box className="page" sx={{ 
          minHeight: 'auto',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          marginBottom: '2rem',
          borderTop: '1px dashed #ccc',
          '@media print': {
            pageBreakBefore: 'always',
            pageBreakAfter: 'always',
          }
        }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
            color: '#4caf50', 
            mb: 4,
            borderBottom: '2px solid #4caf50',
            paddingBottom: '0.5rem'
          }}>
            Panel Administrativo (Backoffice)
          </Typography>
          
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
                  image="https://xp.io/storage/14oO7ZfN.jpg"
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
                          Gestión completa del catálogo de propiedades con opciones avanzadas de edición.
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" fontWeight={600}>Agentes</Typography>
                        <Typography variant="body2">
                          Administración de perfiles de agentes inmobiliarios y asignación de propiedades.
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
                        <Typography variant="subtitle1" fontWeight={600}>Contratos</Typography>
                        <Typography variant="body2">
                          Gestión de contratos de compraventa y arrendamiento con seguimiento de estado.
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" fontWeight={600}>Reportes</Typography>
                        <Typography variant="body2">
                          Estadísticas y análisis detallados sobre el rendimiento del negocio.
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" fontWeight={600}>Configuración</Typography>
                        <Typography variant="body2">
                          Opciones de personalización y ajustes generales de la plataforma.
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
                    Funcionalidades Clave
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
                        <Typography variant="subtitle1" fontWeight={600}>Gestión de Publicaciones</Typography>
                        <Typography variant="body2">
                          Control total sobre qué propiedades se publican en la plataforma pública,
                          con programación de destacados y promociones especiales.
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
                        <Typography variant="subtitle1" fontWeight={600}>Administración de Usuarios</Typography>
                        <Typography variant="body2">
                          Gestión de roles y permisos para diferentes tipos de usuarios del sistema:
                          administradores, agentes, personal de soporte y otros.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Quinta página - Continuación Panel Administrativo */}
        <Box className="page" sx={{ 
          minHeight: 'auto',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          marginBottom: '2rem',
          borderTop: '1px dashed #ccc',
          '@media print': {
            pageBreakBefore: 'always',
            pageBreakAfter: 'always',
          }
        }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
            color: '#4caf50', 
            mb: 4,
            borderBottom: '2px solid #4caf50',
            paddingBottom: '0.5rem'
          }}>
            Panel Administrativo (Backoffice) - Continuación
          </Typography>
          
          <Grid container spacing={3}>
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
                    Funcionalidades Clave (continuación)
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
                        3
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>Dashboard Analítico</Typography>
                        <Typography variant="body2">
                          Visualización en tiempo real de métricas clave: visitas, leads generados,
                          propiedades más vistas, conversiones y rendimiento de agentes.
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
                        <Typography variant="subtitle1" fontWeight={600}>CRM Inmobiliario</Typography>
                        <Typography variant="body2">
                          Sistema completo de gestión de relaciones con clientes, integrado con
                          seguimiento de comunicaciones, tareas y oportunidades.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
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
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="https://www.propertyme.com.au/wp-content/uploads/2022/04/PropertyMe-Dashboard-1024x576.png"
                  alt="Dashboard administrativo"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#4caf50', fontWeight: 500 }}>
                    Ventajas para la Gestión
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight={600}>Control Centralizado</Typography>
                    <Typography variant="body2">
                      Administración unificada de todas las operaciones del negocio inmobiliario desde un solo lugar.
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight={600}>Automatización de Procesos</Typography>
                    <Typography variant="body2">
                      Reducción de tareas manuales mediante flujos de trabajo automatizados y notificaciones inteligentes.
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight={600}>Toma de Decisiones Informada</Typography>
                    <Typography variant="body2">
                      Acceso a datos históricos y en tiempo real para optimizar estrategias comerciales.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12}>
              <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                {['Permisos Multinivel', 'Historial de Cambios', 'Exportación de Datos', 'Panel Personalizable', 'Integraciones API', 'Multimoneda'].map((feature) => (
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

        {/* Sexta página - Galería de propiedades y conclusión */}
        <Box className="page" sx={{ 
          minHeight: 'auto',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          marginBottom: '2rem',
          borderTop: '1px dashed #ccc',
          '@media print': {
            pageBreakBefore: 'always',
            pageBreakAfter: 'always',
          }
        }}>
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
            mb: 4,
            borderBottom: '2px solid #ff9800',
            paddingBottom: '0.5rem',
            color: '#ff9800',
          }}>
            Galería de Propiedades Destacadas
          </Typography>
          
          <Grid container spacing={2}>
            {['https://images.adsttc.com/media/images/5e5e/da62/6ee6/7e7b/0500/00be/newsletter/02C.jpg?1583266398', 
              'https://www.arkiplus.com/wp-content/uploads/2017/05/casas-modernas.jpg', 
              'https://i.pinimg.com/originals/f9/31/ec/f931ec3d7ebac4a62a4cf5130fd38040.jpg', 
              'https://www.thespruce.com/thmb/oFSa5rAqRY8vtX59xF4X_PyKpGc=/2048x1365/filters:no_upscale():max_bytes(150000):strip_icc()/upscale-residential-house-961735344-5c718d0d46e0fb0001dfd517.jpg',
              'https://www.purentonline.com/blog/wp-content/uploads/2023/04/fachadas-casas-minimalistas-modernas-1.jpg',
              'https://www.estiloydeco.com/wp-content/uploads/2022/11/casa-diseno-minimalista-3.jpg'].map((image, index) => (
              <Grid item xs={6} md={4} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    height: '200px',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
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
                      {index % 2 === 0 ? 'Venta' : 'Arriendo'} · {index % 2 === 0 ? 3 : 4} Dormitorios
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

          <Box sx={{ mt: 4, p: 3, borderTop: '1px solid #e0e0e0' }}>
            <Typography variant="h5" align="center" gutterBottom>
              Conclusión
            </Typography>
            <Typography align="center" paragraph>
              Esta plataforma inmobiliaria integral ofrece soluciones completas tanto para clientes finales como para 
              profesionales del sector, optimizando todos los procesos del ciclo inmobiliario y mejorando la experiencia 
              de todos los participantes del mercado.
            </Typography>
            <Typography align="center" variant="subtitle1" sx={{ fontStyle: 'italic' }}>
              Un sistema diseñado para la eficiencia, transparencia y escalabilidad en el sector inmobiliario.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  );
}
