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
      "https://panelyacanalados.com/wp-content/uploads/2021/10/casa-de-arquitectura-moderna.jpg",
    linkUrl: "https://example.com/flower-field",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mu_Qr9zzVQd3_G61rJmYfUFUDNWbGmWbUA&s",
    linkUrl: "https://example.com/beach",
  },
  {
    imageUrl:
      "https://quees.mobi/wp-content/uploads/2021/06/arquitectura-moderna.jpg",
    linkUrl: "https://example.com/forest",
  },
  {
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9q4VfaMlU525iSyBZmEyFx9pAubnuoetxGQhvDcUKf6jv3m5LIUOFF6wGeyPrSUldoA4cMW99NzZ1iTb23aNK-fvjhGZA8LO8PhzsFgeEhBmK55eEQQfoccFmE5x87uF4oR6Q8WeC8EI/s1600/1297697521-davemendelsohn.jpg",
    linkUrl: "https://example.com/lavender",
  },
];
