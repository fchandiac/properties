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
            </Typography>              <Typography paragraph>
                Este proyecto representa una plataforma inmobiliaria completa
                que permite la gestión de propiedades, contratos, agentes y clientes. La plataforma
                cuenta con un panel administrativo (Backoffice) y una Plataforma Inmobiliaria pública.
              </Typography>
              <Typography paragraph>
                El objetivo principal es facilitar la venta y arriendo de propiedades, ofreciendo
                herramientas tanto para administradores como para clientes, mejorando la eficiencia
                del proceso inmobiliario y la experiencia del usuario final.
              </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Divider sx={{ my: 2 }} />
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="240"
              image="https://hips.hearstapps.com/hmg-prod/images/230504-voluar-la-casa-que-se-bifurca-019-662229a00e335.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
              alt="Imagen del proyecto"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Estado Actual
              </Typography>
              <Typography paragraph>
                La plataforma se encuentra completamente funcional, con todas las características
                principales implementadas tanto en el backoffice como en la Plataforma Inmobiliaria. 
                Actualmente se están realizando mejoras continuas basadas en el feedback de los usuarios.
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
        
        {/* Sección de Usuario */}
        <Grid item xs={12}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              mt: 4, 
              mb: 2,
              background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
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
                    backgroundColor: '#3f51b5',
                  }
                }}
              >
                Experiencia de Usuario
              </Typography>
              <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                sx={{ maxWidth: '800px', mx: 'auto', mt: 1 }}
              >
                Nuestra plataforma ha sido diseñada pensando en una experiencia de usuario
                excepcional, intuitiva y completa para todos nuestros clientes.
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: '#3f51b5', 
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      '&::before': {
                        content: '""',
                        display: 'inline-block',
                        width: '8px',
                        height: '24px',
                        backgroundColor: '#3f51b5',
                        mr: 2,
                        borderRadius: '4px'
                      }
                    }}
                  >
                    Búsqueda y Filtrado Avanzado
                  </Typography>
                  <Typography paragraph>
                    Los usuarios pueden buscar propiedades utilizando una amplia variedad de filtros:
                    ubicación, precio, tamaño, número de habitaciones, tipo de operación (venta/arriendo) 
                    y muchas más opciones. El sistema de búsqueda está optimizado para entregar
                    resultados relevantes de manera instantánea.
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1,
                      mb: 2
                    }}
                  >
                    {['Búsqueda geolocalizada', 'Filtros combinados', 'Guardado de búsquedas', 'Alertas personalizadas'].map((feature) => (
                      <Chip 
                        key={feature} 
                        label={feature}
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(63, 81, 181, 0.1)', 
                          color: '#3f51b5',
                          fontWeight: 500
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: '#3f51b5', 
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      '&::before': {
                        content: '""',
                        display: 'inline-block',
                        width: '8px',
                        height: '24px',
                        backgroundColor: '#3f51b5',
                        mr: 2,
                        borderRadius: '4px'
                      }
                    }}
                  >
                    Gestión de Favoritos y Contacto
                  </Typography>
                  <Typography paragraph>
                    Los usuarios pueden guardar propiedades favoritas para revisarlas más tarde,
                    comparar múltiples propiedades lado a lado, y contactar directamente a los
                    agentes inmobiliarios a través de múltiples canales: formulario de contacto,
                    WhatsApp, llamada telefónica o solicitud de visita programada.
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1,
                      mb: 2
                    }}
                  >
                    {['Propiedades favoritas', 'Comparación', 'Contacto multicanal', 'Historial de visitas'].map((feature) => (
                      <Chip 
                        key={feature} 
                        label={feature}
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(63, 81, 181, 0.1)', 
                          color: '#3f51b5',
                          fontWeight: 500
                        }}
                      />
                    ))}
                  </Box>
                </Box>
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
                    alt="Plataforma Inmobiliaria"
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        color: '#3f51b5', 
                        fontWeight: 500
                      }}
                    >
                      Características Adicionales
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            bgcolor: 'rgba(63, 81, 181, 0.1)',
                            color: '#3f51b5',
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
                          <Typography variant="subtitle1" fontWeight={500}>Experiencia de visualización inmersiva</Typography>
                          <Typography variant="body2">
                            Tours virtuales 360°, imágenes de alta calidad y videos de las propiedades
                            permiten a los usuarios explorar cada detalle antes de coordinar una visita presencial.
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            bgcolor: 'rgba(63, 81, 181, 0.1)',
                            color: '#3f51b5',
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
                          <Typography variant="subtitle1" fontWeight={500}>Calculadoras financieras</Typography>
                          <Typography variant="body2">
                            Herramientas interactivas para calcular hipotecas, estimar costos de crédito,
                            evaluar capacidad de pago y simular diferentes escenarios de financiamiento.
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            bgcolor: 'rgba(63, 81, 181, 0.1)',
                            color: '#3f51b5',
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
                          <Typography variant="subtitle1" fontWeight={500}>Blog y recursos educativos</Typography>
                          <Typography variant="body2">
                            Acceso a artículos informativos sobre el mercado inmobiliario, consejos para compradores
                            y arrendatarios, guías paso a paso y análisis de tendencias del sector.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            <Box 
              sx={{ 
                mt: 4, 
                textAlign: 'center',
                p: 2,
                borderRadius: 2,
                bgcolor: 'rgba(63, 81, 181, 0.05)',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Diseñado para una experiencia multiplataforma
              </Typography>
              <Typography>
                Nuestra interfaz está completamente optimizada para funcionar en dispositivos móviles,
                tablets y escritorio, garantizando una experiencia consistente en cualquier pantalla.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        
        {/* Sección de Tecnología */}
        <Grid item xs={12}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              mt: 4, 
              mb: 2,
              background: 'linear-gradient(to right, #f6f9fc, #edf2ff)',
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
                    backgroundColor: '#4caf50',
                  }
                }}
              >
                Tecnología y Arquitectura
              </Typography>
              <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                sx={{ maxWidth: '800px', mx: 'auto', mt: 1 }}
              >
                Nuestra plataforma está construida con tecnologías modernas que garantizan 
                rendimiento, escalabilidad y una experiencia de usuario excepcional.
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: '#4caf50', 
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      '&::before': {
                        content: '""',
                        display: 'inline-block',
                        width: '8px',
                        height: '24px',
                        backgroundColor: '#4caf50',
                        mr: 2,
                        borderRadius: '4px'
                      }
                    }}
                  >
                    Stack Tecnológico
                  </Typography>
                  <Typography paragraph>
                    Utilizamos un stack de tecnologías modernas y robustas para construir una aplicación rápida, 
                    segura y escalable. La arquitectura está diseñada para ofrecer una experiencia de usuario 
                    fluida y proporcionar a los administradores herramientas potentes para la gestión inmobiliaria.
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1,
                      mb: 2
                    }}
                  >
                    {['Next.js', 'TypeScript', 'Material UI', 'React', 'Node.js', 'PostgreSQL'].map((tech) => (
                      <Chip 
                        key={tech} 
                        label={tech}
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(76, 175, 80, 0.1)', 
                          color: '#4caf50',
                          fontWeight: 500
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: '#4caf50', 
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      '&::before': {
                        content: '""',
                        display: 'inline-block',
                        width: '8px',
                        height: '24px',
                        backgroundColor: '#4caf50',
                        mr: 2,
                        borderRadius: '4px'
                      }
                    }}
                  >
                    Seguridad y Cumplimiento
                  </Typography>
                  <Typography paragraph>
                    La seguridad es una prioridad en nuestra plataforma. Implementamos medidas robustas 
                    para proteger datos sensibles y garantizar transacciones seguras, manteniendo la 
                    confianza de nuestros usuarios y clientes.
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1,
                      mb: 2
                    }}
                  >
                    {['Autenticación JWT', 'Encriptación', 'Protección de datos'].map((feature) => (
                      <Chip 
                        key={feature} 
                        label={feature}
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(76, 175, 80, 0.1)', 
                          color: '#4caf50',
                          fontWeight: 500
                        }}
                      />
                    ))}
                  </Box>
                </Box>
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
                    image="https://soyarquitectura.mx/wp-content/uploads/2024/06/portada-despacho-arquitectos-render-14.webp"
                    alt="Arquitectura tecnológica"
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        color: '#4caf50', 
                        fontWeight: 500
                      }}
                    >
                      Características Técnicas
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
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
                          <Typography variant="subtitle1" fontWeight={500}>Arquitectura Serverless</Typography>
                          <Typography variant="body2">
                            Utilizamos una arquitectura serverless que permite escalabilidad automática,
                            alta disponibilidad y optimización de costos basados en el uso real.
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
                          <Typography variant="subtitle1" fontWeight={500}>API RESTful</Typography>
                          <Typography variant="body2">
                            Interfaz de programación bien documentada que permite integraciones 
                            con sistemas externos y potencial para desarrollar aplicaciones móviles nativas.
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
                          <Typography variant="subtitle1" fontWeight={500}>Rendimiento Optimizado</Typography>
                          <Typography variant="body2">
                            Implementación de técnicas avanzadas como SSR (Server-Side Rendering), 
                            lazy loading, y optimización de imágenes para tiempos de carga rápidos.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            <Box 
              sx={{ 
                mt: 4, 
                textAlign: 'center',
                p: 2,
                borderRadius: 2,
                bgcolor: 'rgba(76, 175, 80, 0.05)',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Desarrollo continuo y mejora
              </Typography>
              <Typography>
                Nuestro equipo de desarrollo trabaja constantemente en mejorar la plataforma, 
                implementando nuevas funcionalidades y optimizando el rendimiento basado en 
                feedback de usuarios y análisis de datos de uso.
              </Typography>
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
