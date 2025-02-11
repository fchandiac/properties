"use client";
import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

interface BlogPostProps {
  title: string;
  summary: string;
  image: string;
  content: string[];
}

export default function BlogPost({
  title,
  summary,
  image,
  content,
}: BlogPostProps) {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        {/* Primera fila: Título y Resumen */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{summary}</Typography>
        </Grid>

        {/* Segunda columna: Imagen */}
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%" }}>
            <img
              src={image}
              alt="blog"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Segunda fila: Contenido del artículo */}
      <Grid container spacing={4} marginTop={4}>
        <Grid item xs={12}>
          {content.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body2"
              textAlign="justify"
              marginBottom={2}
            >
              {paragraph}
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* <ShareCard /> */}
    </Container>
  );
}

// import {
//   FacebookShareButton,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   InstapaperIcon,
//   InstapaperShareButton,
// } from "react-share";

// const ShareCard = () => {
//   const shareUrl = window.location.href; // O la URL que quieras compartir
//   const title = "Mi Publicación Genial";
//   const imageUrl =
//     "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202403/65ee8897a0986-i-want-to-sell-my-house-and-buy-two-other-residential-properties-the-capital-gain-on-it-will-be-aro-112910279-16x9.jpg?size=948:533";

//   return (
//     <div>
//       <img src={imageUrl} alt="Imagen para compartir" width="100" />
//       <div>
//         <FacebookShareButton url={shareUrl} hashtag="#MiHashtag">
//           <FacebookIcon size={32} round />
//         </FacebookShareButton>
//         <TwitterShareButton url={shareUrl} title={title}>
//           <TwitterIcon size={32} round />
//         </TwitterShareButton>
//         <InstapaperShareButton url={shareUrl} title={title}>
//           <InstapaperIcon size={32} round />
//         </InstapaperShareButton>
//       </div>
//     </div>
//   );
// };
