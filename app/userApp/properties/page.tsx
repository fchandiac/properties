import Filter from "@/components/property/Filter";
import PropertyUserCard from "@/components/property/PropertyUserCard";
import { Grid } from "@mui/material";
import React from "react";

export default function PropertiesPage() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} marginTop={4}>
          <Filter />
        </Grid>
        {propertiesList.map((property, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PropertyUserCard
              key={index}
              //@ts-ignore
              type={property.type}
              featured={property.featured ?? false}
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
        ))}
      </Grid>
    </>
  );
}

const propertiesList = [
  {
    type: 0,
    featured: true,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/230504-voluar-la-casa-que-se-bifurca-019-662229a00e335.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
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
    type: 1,
    featured: true,
    image:
      "https://www.vinasconstructora.com/wp-content/uploads/2024/06/casa-modernas-minimalistas.jpg",
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
    type: 0,
    featured: false,
    image:
      "https://soyarquitectura.mx/wp-content/uploads/2024/06/portada-despacho-arquitectos-render-14.webp",
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
    type: 1,
    featured: false,
    image:
      "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg",
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
    type: 0,
    featured: false,
    image:
      "https://quees.mobi/wp-content/uploads/2021/06/arquitectura-moderna.jpg",
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
    type: 1,
    image:
      "https://img.freepik.com/fotos-premium/visualizacion-3d-casa-moderna-colores-brillantes-diseno-fachada-casa-arquitectura-moderna_839035-148698.jpg",
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
  {
    type: 1,
    featured: false,
    image:
      "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg",
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
    type: 1,
    featured: false,
    image:
      "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg",
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
    type: 1,
    featured: false,
    image:
      "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg",
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
    type: 1,
    featured: false,
    image:
      "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg",
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
    type: 1,
    featured: false,
    image:
      "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg",
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
    type: 1,
    featured: false,
    image:
      "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg",
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
];
