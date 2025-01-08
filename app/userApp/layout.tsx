'use client';
import React from "react";
import UserAppHeader from "../../components/header/UserAppHeader";
import BottomBar from "@/components/footer/BottomBar";
import Footer from "@/components/footer/Fotter";
import SliderImages from "@/components/slider/SliderImages";
import Navbar from "@/components/header/NavBar";
import { usePathname } from "next/navigation";

export default function layout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const isHome = pathname === "/userApp";



  return (
    <>
      <UserAppHeader />
      {
        isHome && (
          <SliderImages 
          images={imagesList}
      
        />
        )
      }
   
      <Navbar />
      {children}
      <Footer />
      <BottomBar />
    </>
  );
}
const imagesList = [
  {
    imageUrl:
      "https://www.vinasconstructora.com/wp-content/uploads/2024/06/casa-modernas-minimalistas.jpg",
    linkUrl: "https://example.com/mountain",
  },
  {
    imageUrl:
      "https://soyarquitectura.mx/wp-content/uploads/2024/06/portada-despacho-arquitectos-render-14.webp",
    linkUrl: "https://example.com/flower-field",
  },
  {
    imageUrl:
      "https://img.freepik.com/fotos-premium/casa-moderna-grandes-ventanales-e-iluminacion-natural-ia-generativa_410516-70480.jpg",
    linkUrl: "https://example.com/beach",
  },
  {
    imageUrl:
      "https://quees.mobi/wp-content/uploads/2021/06/arquitectura-moderna.jpg",
    linkUrl: "https://example.com/forest",
  },
  {
    imageUrl:
      "https://img.freepik.com/fotos-premium/visualizacion-3d-casa-moderna-colores-brillantes-diseno-fachada-casa-arquitectura-moderna_839035-148698.jpg",
    linkUrl: "https://example.com/lavender",
  },
];
