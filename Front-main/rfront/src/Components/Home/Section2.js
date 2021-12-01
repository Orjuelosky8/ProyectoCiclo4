import * as React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import seccioempresas from "../../assets/Home/seccioempresas.svg";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

export default function Section2() {
  return (
    <Stack className="seccion-empresas" justifyContent="center">
      <Typography
        color="#ffffff"
        variant="h4"
        align="center"
        paddingTop="50px"
        component="div"
        mb="0px"
      >
        Para Empresas de Sector Mascotas
      </Typography>
      <Typography color="#ffffff" variant="h5" align="center" mt="-20px">
        ________________________________
      </Typography>
      <Typography
        color="#ffffff"
        variant="h6"
        align="center"
        component="div"
        mb="40px"
      >
        ¿Cómo funciona?
      </Typography>

      <Stack
        className="empresas"
        direction="row-reverse"
        justifyContent="center"
        spacing={4}
        marginX="100px"
      >
        <Stack>
          <Typography
            color="#ffffff"
            fontSize="24"
            align="left"
            component="div"
            mb="0px"
          >
            Crear una cuenta
          </Typography>

          {/* <Typography color='#ffffff' fontSize='18' align="left" component="div" mb='0px'>
                Para publicar tu negocio primero deberás crear una cuenta como “Negocio Proveedor”, luego podrás iniciar el proceso desde la página “Mi Perfil”.
              </Typography> */}

          <Typography
            color="#ffffff"
            fontSize="24"
            align="left"
            component="div"
            mb="0px"
          >
            Crear y administrar tu página
          </Typography>

          <Typography
            color="#ffffff"
            fontSize="18"
            align="left"
            component="div"
            mb="0px"
          >
            Luego, deberas diligenciar el formulario que esta dividido en tres
            secciónes:
            <ol className="items-e">
              <li className="items-empresa">Información de la Empresa</li>
              <li className="items-empresa">Productos / Servicios</li>
              <li className="items-empresa">Datos de Contacto</li>
            </ol>
            Una vez creada tu página de negocio podrás administrarla (Editar
            información o eliminar la cuenta) desde la página “Mi Perfil”.
          </Typography>

          <Stack direction="row" spacing={1} mt>
            <Button id="button-empezar" size="medium" variant="outlined">
              <Link to="/Perfil" className="btnin">
                VER UNA DEMO
              </Link>
            </Button>
            <Button id="button-empezar" size="medium" variant="outlined">
              <Link to="/Perfil" className="btnin">
                CREAR CUENTA
              </Link>
            </Button>
          </Stack>
        </Stack>

        <Stack>
          <img
            className="img-people-pet"
            src={seccioempresas}
            alt="peopleandpet"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
