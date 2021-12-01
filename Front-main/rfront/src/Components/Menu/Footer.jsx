import React from "react";
import Typography from "@mui/material/Typography";
import "./Footer.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

export default function Footer() {
  return (
    <footer>
      <Stack className="Footer" alignItems="center" justifyContent="center">
        <Typography
          variant="body1"
          fontSize="10px"
          color="#7A9D96"
          align="center"
        >
          © 2021 - TODOS LOS DERECHOS RESERVADOS - DTLM
        </Typography>
      </Stack>
    </footer>
  );
}
