import TestimonialCard from '@/components/TestimonialCard'
import { Container, Grid } from '@mui/material'
import React from 'react'

export default function page() {
  return (
    <>
    
          <Container>
            <Grid container spacing={2} mt={2} direction={"column"}>
              <Grid item>
                <TestimonialCard
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2ahJliB6cPF2rMalfHlFmJuM7Tjgs1iGHO0279xD6Wyg_fPPB9UCXd0J5oPlSXcncN8&usqp=CAU" // Reemplaza con la URL de la imagen
                  message="The service provided by Álvaro Bravo has been exceptional. From the initial consultation to the final purchase, every step was seamless and professional. His expertise in the real estate market, attention to detail, and commitment to finding the perfect property made the entire experience stress-free and enjoyable. Highly recommended for anyone looking to buy or sell their property with confidence."
                  name="John Doe"
                  date="January 7, 2025"
                />
              </Grid>
              <Grid item>
                <TestimonialCard
                  image="https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg" // Reemplaza con la URL de la imagen
                  message="I've never seen anything like it. It's incredible!"
                  name="Jane Doe"
                  date="February 14, 2025"
                />
              </Grid>
            </Grid>
          </Container>
    </>
  )
}
