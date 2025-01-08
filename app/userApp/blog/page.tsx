import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

export default function BlogPage() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Título del blog */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Blog: Seguridad en los Barrios y Compra de Casas
      </Typography>

      {/* Bajada (subheading) */}
      <Typography variant="body1" textAlign="center" marginBottom={4}>
        Antes de comprar una propiedad, es esencial investigar la seguridad del
        barrio. Factores como la iluminación pública, presencia de cámaras de
        vigilancia, y la proximidad a estaciones de policía son determinantes.
        También es útil hablar con los vecinos para obtener información de
        primera mano sobre la situación de seguridad en la zona.
      </Typography>

      {/* Imagen grande */}
      <Box sx={{ width: "100%", marginBottom: 4 }}>
        <img
          src="https://www.homeurbano.com/content/multimedia/lugares/chile/seguridad/seguridad-barrios.jpg"
          alt="blog"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Box>

      {/* Artículo dividido en secciones */}
      <Typography variant="body2" textAlign="justify" marginBottom={4}>
        La seguridad es uno de los aspectos más importantes a tener en cuenta a
        la hora de comprar una propiedad. Un barrio seguro proporciona una
        sensación de tranquilidad a los residentes, lo cual no solo impacta en
        su calidad de vida, sino también en el valor de la propiedad. Un barrio
        con bajos índices de criminalidad atrae tanto a compradores como a
        inquilinos, lo que hace que las propiedades en esas áreas sean más
        deseables y, por lo tanto, más costosas. 
      </Typography>

      <Typography variant="body2" textAlign="justify" marginBottom={4}>
        Evaluar la seguridad en una zona requiere de un enfoque integral. En
        primer lugar, es importante investigar las estadísticas de criminalidad en
        el área. Muchos municipios y organizaciones locales publican datos sobre
        crímenes y delitos, lo que puede dar una idea clara del nivel de seguridad
        en un vecindario. También es fundamental observar la infraestructura
        del barrio: calles bien iluminadas, presencia de cámaras de seguridad y
        el mantenimiento de las zonas comunes son señales de que el lugar se
        toma en serio la seguridad.
      </Typography>

      <Typography variant="body2" textAlign="justify" marginBottom={4}>
        La proximidad a servicios como estaciones de policía, bomberos y centros
        médicos también juega un papel clave en la percepción de seguridad de los
        compradores. Las zonas con fácil acceso a estos servicios tienden a ser
        más valoradas, ya que ofrecen respuestas rápidas ante cualquier emergencia.
        Además, el testimonio de los residentes actuales es invaluable. Hablar con
        los vecinos y conocer su experiencia en cuanto a seguridad puede proporcionar
        información útil que no se encuentra en las estadísticas oficiales.
      </Typography>

      <Typography variant="body2" textAlign="justify" marginBottom={4}>
        Además de la seguridad general del barrio, la seguridad en la vivienda misma
        es otro factor relevante. Las viviendas que cuentan con sistemas de seguridad
        adicionales, como alarmas, cámaras de vigilancia, o portones automáticos,
        pueden ofrecer mayor protección a los residentes. A menudo, los compradores
        están dispuestos a pagar un poco más por una propiedad que cuente con
        estas medidas adicionales de seguridad.
      </Typography>

      <Typography variant="body2" textAlign="justify" marginBottom={4}>
        En conclusión, la seguridad en los barrios es un factor decisivo al
        comprar una casa. No solo influye en la calidad de vida de los residentes,
        sino también en el valor de la propiedad. Es importante considerar una
        serie de factores, desde la seguridad en las calles hasta las características
        de la vivienda, para tomar una decisión informada y segura a la hora de
        invertir en una nueva propiedad.
      </Typography>
    </Container>
  );
}
