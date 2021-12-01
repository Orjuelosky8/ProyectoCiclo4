import * as React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
// import empresas from "../../assets/Home/empresas.svg";
// import seccioempresas from "../../assets/Home/seccioempresas.svg";

import AboutUs from "./AboutUs.jsx";
import Section1 from "./Section1";

const theme = createTheme();

// const descripHeader =
//   "Ayudamos a nuestros usuarios a encontrar los mejores proveedores de servicios para mascotas desde cualquier parte del país.";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#00303F"),
  backgroundColor: "#00303F",
  "&:hover": {
    backgroundColor: "#00303F",
  },
}));

export default function Home() {
  return (
    <div className="all-page">
      <CssBaseline />
      <div className="contenido-header">

      </div>

      <main>
        <Section1 />

        <Stack className="seccion-about-us" justifyContent="center">
          <Typography
            variant="h4"
            align="center"
            paddingTop="50px"
            component="div"
            mb="0px"
          >
            Sobre el Proyecto
          </Typography>
          <Typography variant="h5" align="center" mt="-20px">
            __________________________
          </Typography>
          <Typography variant="h6" align="center" component="div" mb="40px">
            Desarrollado por
          </Typography>

          <Stack
            className="nosotros"
            justifyContent="center"
            alignItems="center"
            marginX="100px"
          >
            <AboutUs />

            <div>
              <button className="More">
                <Link to="/Team">
                  Mas información
                </Link>
              </button>
            </div>
          </Stack>
        </Stack>
      </main>
      <Box
        sx={{ bgcolor: "#004F67", p: 2, marginTop: "3%" }}
        component="footer"
      >
      </Box>

    </div>
  );
}
