import React from "react";
import { Box, Container } from "@mui/material";
import BlogPost from "../../../components/blog/BlogPost";
import BlogMiniCard from "@/components/blog/BlogMiniCard";

const blogMiniCards = [
  {
    title: "Cómo Evaluar un Barrio Antes de Comprar",
    image: "https://i0.wp.com/www.householdpm.com.au/wp-content/uploads/2019/08/hppost-how-to-switch-to-household-propertiest-01.jpg?fit=1920%2C1080&ssl=1",
  },
  {
    title: "Consejos para Invertir en Bienes Raíces",
    image: "https://s7d9.scene7.com/is/image/ledcor/Belmont%20Reunion%2003?qlt=85&wid=480&ts=1691085180535&dpr=on,2.625",
  },
  {
    title: "Errores Comunes al Comprar una Casa",
    image: "https://i0.wp.com/www.householdpm.com.au/wp-content/uploads/2019/08/hppost-how-to-switch-to-household-propertiest-01.jpg?fit=1920%2C1080&ssl=1",
  },
  {
    title: "Cómo Aumentar el Valor de tu Propiedad",
    image: "https://s7d9.scene7.com/is/image/ledcor/Belmont%20Reunion%2003?qlt=85&wid=480&ts=1691085180535&dpr=on,2.625",
  },
  {
    title: "Documentos Necesarios para Comprar una Vivienda",
    image: "https://s7d9.scene7.com/is/image/ledcor/Belmont%20Reunion%2003?qlt=85&wid=480&ts=1691085180535&dpr=on,2.625",
  },
  {
    title: "Tendencias en el Mercado Inmobiliario 2025",
    image: "https://i0.wp.com/www.householdpm.com.au/wp-content/uploads/2019/08/hppost-how-to-switch-to-household-propertiest-01.jpg?fit=1920%2C1080&ssl=1",
  },
  {
    title: "¿Comprar o Alquilar? Pros y Contras",
    image: "https://source.unsplash.com/300x200/?house,rent,buy",
  },
  {
    title: "La Importancia de un Buen Agente Inmobiliario",
    image: "https://i0.wp.com/www.householdpm.com.au/wp-content/uploads/2019/08/hppost-how-to-switch-to-household-propertiest-01.jpg?fit=1920%2C1080&ssl=1",
  },
  {
    title: "Cómo Negociar el Precio de una Casa",
    image: "https://source.unsplash.com/300x200/?realestate,negotiation",
  },
  {
    title: "Financiamiento Hipotecario: Lo que Debes Saber",
    image: "https://source.unsplash.com/300x200/?mortgage,finance",
  },
  {
    title: "Factores Claves para Comprar en Preventa",
    image: "https://source.unsplash.com/300x200/?construction,building",
  },
  {
    title: "Cómo Detectar Fraudes Inmobiliarios",
    image: "https://source.unsplash.com/300x200/?realestate,scam",
  },
];

export default function BlogPage() {
  const blogData = {
    title: "Seguridad en los Barrios y Compra de Casas",
    summary:
      "Antes de comprar una propiedad, es esencial investigar la seguridad del barrio. Factores como la iluminación pública, presencia de cámaras de vigilancia y la proximidad a estaciones de policía son determinantes. También es útil hablar con los vecinos para obtener información de primera mano sobre la situación de seguridad en la zona.",
    image:
      "https://quees.mobi/wp-content/uploads/2021/06/arquitectura-moderna.jpg",
    content: [
      "La seguridad es uno de los aspectos más importantes a tener en cuenta a la hora de comprar una propiedad...",
      "Evaluar la seguridad en una zona requiere de un enfoque integral...",
      "La proximidad a servicios como estaciones de policía, bomberos y centros médicos también juega un papel clave...",
      "Además de la seguridad general del barrio, la seguridad en la vivienda misma es otro factor relevante...",
      "En conclusión, la seguridad en los barrios es un factor decisivo al comprar una casa...",
    ],
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <BlogPost {...blogData} />

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          padding: 2,
          width: "100%", // Ocupa todo el ancho disponible
          flexWrap: "nowrap", // No permite que las tarjetas se bajen de línea
          scrollbarWidth: "none", // Oculta la barra en Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Oculta la barra en Chrome y Edge
        }}
      >
        {blogMiniCards.map((card, index) => (
          <Box key={index} sx={{ minWidth: 250 }}>
            <BlogMiniCard title={card.title} image={card.image} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
