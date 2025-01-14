import PropertyUserCard from "@/components/property/PropertyUserCard";
import SliderImages from "@/components/slider/SliderImages";
import TestimonialCard from "@/components/TestimonialCard";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

export default function UserPage() {
  
  return (
    <div>
      <Container>
        <Grid direction={"row"} container spacing={2} mt={2}>
          {
            propertiesList.map((property, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PropertyUserCard
                  image={property.image}
                  category={property.category}
                  builtArea={property.builtArea}
                  landArea={property.landArea}
                  bathrooms={property.bathrooms}
                  bedrooms={property.bedrooms}
                  parkingSpaces={property.parkingSpaces}
                  price={property.price}
                  uf={property.uf}
                  address={property.address}
                  googleMapLink={property.googleMapLink}
                  youtubeLink={property.youtubeLink}
                  ticToLink={property.ticToLink}
                />
              </Grid>
            ))
          }
        </Grid>
      </Container>

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
    </div>
  );
}

// Estilos en línea
import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  navbar: {
    backgroundColor: "white",
    padding: "10px 20px",
    position: "sticky",
    top: 34,
    zIndex: 1000,
    boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    justifyContent: "center",
  },
  navItem: {
    margin: "0 15px",
    color: "#212121",
  },
};

const propertiesList = [
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/230504-voluar-la-casa-que-se-bifurca-019-662229a00e335.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
    category: "House",
    builtArea: 120,
    landArea: 200,
    bathrooms: 2,
    bedrooms: 3,
    parkingSpaces: 1,
    price: 150000000,
    uf: 39027,
    address: "123 Main St, Santiago, Chile",
    googleMapLink: "https://maps.google.com",
    youtubeLink: "https://www.youtube.com",
    ticToLink: "https://www.tiktok.com",
  },
  {
    image: "https://www.vinasconstructora.com/wp-content/uploads/2024/06/casa-modernas-minimalistas.jpg",
    category: "Apartment",
    builtArea: 80,
    landArea: 150,
    bathrooms: 1,
    bedrooms: 2,
    parkingSpaces: 1,
    price: 90000000,
    uf: 28000,
    address: "456 Elm St, Santiago, Chile",
    googleMapLink: "https://maps.google.com",
    youtubeLink: "https://www.youtube.com",
    ticToLink: "https://www.tiktok.com",
  },
  {
    image: "https://soyarquitectura.mx/wp-content/uploads/2024/06/portada-despacho-arquitectos-render-14.webp",
    category: "House",
    builtArea: 250,
    landArea: 500,
    bathrooms: 4,
    bedrooms: 5,
    parkingSpaces: 2,
    price: 350000000,
    uf: 93000,
    address: "789 Oak St, Santiago, Chile",
    googleMapLink: "https://maps.google.com",
    youtubeLink: "https://www.youtube.com",
    ticToLink: "https://www.tiktok.com",
  },
  {
    image: "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg",
    category: "House",
    builtArea: 180,
    landArea: 350,
    bathrooms: 3,
    bedrooms: 4,
    parkingSpaces: 2,
    price: 220000000,
    uf: 58000,
    address: "101 Pine St, Santiago, Chile",
    googleMapLink: "https://maps.google.com",
    youtubeLink: "https://www.youtube.com",
    ticToLink: "https://www.tiktok.com",
  },
  {
    image: "https://quees.mobi/wp-content/uploads/2021/06/arquitectura-moderna.jpg",
    category: "Apartment",
    builtArea: 95,
    landArea: 120,
    bathrooms: 2,
    bedrooms: 3,
    parkingSpaces: 1,
    price: 120000000,
    uf: 31000,
    address: "202 Maple St, Santiago, Chile",
    googleMapLink: "https://maps.google.com",
    youtubeLink: "https://www.youtube.com",
    ticToLink: "https://www.tiktok.com",
  },
  {
    image: "https://img.freepik.com/fotos-premium/visualizacion-3d-casa-moderna-colores-brillantes-diseno-fachada-casa-arquitectura-moderna_839035-148698.jpg",
    category: "House",
    builtArea: 300,
    landArea: 600,
    bathrooms: 5,
    bedrooms: 6,
    parkingSpaces: 3,
    price: 450000000,
    uf: 115000,
    address: "303 Birch St, Santiago, Chile",
    googleMapLink: "https://maps.google.com",
    youtubeLink: "https://www.youtube.com",
    ticToLink: "https://www.tiktok.com",
  },
];

