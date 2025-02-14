'use client'
import React, {useState, useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import { getUf } from "@/app/actions/uf";
import moment from "moment";

export default function UserAppHeader() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [uf, setUf] = useState(0);

  const fetchUf = async () => {
    const data = await getUf();
    const series = data.serie;

    const today = moment();
    const uf = series.find((item: { fecha: moment.MomentInput; }) => moment(item.fecha).isSame(today, 'day'));
    setUf(uf.valor);
  }

  useEffect(() => {
    fetchUf();
  }, []);

  return (
    <>

    <Box
      component="header"
      sx={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        paddingX: { xs: 2, sm: 8, md: 12, lg: 16 },


        position: "sticky",
        top: 0,
        zIndex: 1000,

        // Alineación vertical
      }}
    >
      {/* Logo como fondo */}
      <Box
        sx={{
          backgroundImage: "url(/logo-long.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: 70,
          width: 200,
          objectFit: "contain", // Ajusta el tamaño sin distorsionar la imagen
          marginRight: "16px", // Espacio entre el logo y el título
        }}
      />

      {/* Título o nombre de la app */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography  sx={{ marginRight: 2, fontSize: ".8rem", fontWeight: 200 }}>
          UF hoy: {uf.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
          </Typography>

        {/* Icono de menú alineado a la derecha */}
        <IconButton edge="end" color="inherit" aria-label="menu"
          onClick={() => setOpenSideBar(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>

    <SideBar open={openSideBar} toggleDrawer={setOpenSideBar} />

    </>
  );
}
