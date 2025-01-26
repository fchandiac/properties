import React from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";

export default function AboutUsPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to <strong>Álvaro Bravo Propiedades</strong>, where your dream home becomes a reality. 
          Founded with a passion for connecting people to their ideal spaces, we have been a trusted name 
          in real estate for over a decade.
        </Typography>
        <Card sx={{ mt: 3, backgroundColor: "#f5f5f5" }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Our Story
            </Typography>
            <Typography variant="body2">
              Álvaro Bravo, a visionary in the real estate industry, started this company with a simple 
              mission: to provide personalized, transparent, and efficient property solutions. Over the years, 
              we have grown into a team of dedicated professionals committed to guiding our clients every 
              step of the way.
            </Typography>
          </CardContent>
        </Card>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Why Choose Us?
          </Typography>
          <Typography variant="body2">
            At Álvaro Bravo Propiedades, we pride ourselves on our deep understanding of the market and 
            our ability to match clients with properties that fit their needs and lifestyle. Whether you're 
            buying, selling, or renting, we are here to ensure a smooth and successful experience.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
