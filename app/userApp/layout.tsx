import React from "react";
import UserAppHeader from "../../components/header/UserAppHeader";
import BottomBar from "@/components/footer/BottomBar";
import Footer from "@/components/footer/Fotter";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserAppHeader />
      {children}
      <Footer />
      <BottomBar />
    </>
  );
}
