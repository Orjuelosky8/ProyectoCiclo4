import * as React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import pets from "../../assets/Home/pets.svg";
// import empresas from "../../assets/Home/empresas.svg";
import peopleandpet from "../../assets/Home/peopleandpet.png";
import turismogrupo from "../../assets/Home/turismogrupo.png";
import turismo from "../../assets/Home/turismo.png";
import yoga from "../../assets/Home/yoga.png";
import { Link } from "react-router-dom";

function card_cont(imagen, titulo, descripcion, btn) {
  return (
    <div>
      <Card
        style={{ backgroundColor: "#ffffff" }}
        sx={{
          alignItems: "center",
          height: "100%",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          minWidth: 225,
          maxWidth: 400,
          minHeight: 220,
          maxHeight: 350,
          paddingTop: "20px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 120,
            width: 120,
          }}
          image={imagen}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {titulo}
          </Typography>
          <Typography align="center">{descripcion}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Section1() {
  return (
    <Stack className="seccion-lideres" justifyContent="center">
      <div>
        <Typography
          variant="h4"
          align="center"
          paddingTop="50px"
          component="div"
          mb="0px"
        >
          <b>Misión</b>
        </Typography>
        <Typography variant="h5" align="center" mt="-20px">
          ________________________
        </Typography>
        <Typography
          variant="h6"
          align="center"
          component="div"
          mb="20px"
        ></Typography>

        <Stack
          className="lideres"
          direction="row"
          justifyContent="center"
          spacing={4}
          marginX="100px"
        >
          <Stack>
            <Typography fontSize="18" align="left" component="div" mb="0px">
              Descubre un lugar mágico nace de la idea de aportar un beneficio a
              la sociedad en medio de esta crisis global, uniéndonos a la
              sociedad en pro de que conozcan y expresen sus opiniones sobre los
              sitios turísticos y del manejo adecuado de los sistemas de
              información, que posibilite de una manera más ágil y sencilla
              adquirir el conocimiento oportuno de los lugares vinculados a la
              razón social del establecimiento.
            </Typography>

            <Typography fontSize="18" align="left" component="div" mb="0px">
              En función de sus recursos financieros, vamos a establecer las
              especificaciones detalladas con los alojamientos, de los medios de
              transporte a utilizar, menús, comidas, actividades, vida nocturna,
              etc.
            </Typography>

            <Stack direction="row" spacing={1} mt>
              <Button id="button-empezar" size="medium" variant="outlined">
                <Link to="/Proveedores" className="btnin">
                  Ver más...
                </Link>
              </Button>
            </Stack>
          </Stack>

          {/* <Stack>
            <img src={yoga} alt="yoga" />
            <img
              className="img-people-pet"
              src={peopleandpet}
              alt="peopleandpet"
            />
          </Stack> */}
        </Stack>
      </div>

      <Stack direction="row" justifyContent="center" spacing={4}>
        {card_cont(
          turismo,
          "Turismo",
          " Disfruta una experiencia única planeada para tí."
        )}
        {card_cont(
          yoga,
          "Tour bienestar",
          "En nuestro tour, podrás experimentar una sesión de Yoga dirigida por un profesional en el tema."
        )}
        {card_cont(
          peopleandpet,
          "Tour gastronómico",
          "Atrévete a descubrir en nuestro tour gastronómico los sabores que guardan los barrios gastronómicos."
        )}
      </Stack>

      <div>
        <Typography
          variant="h4"
          align="center"
          paddingTop="50px"
          component="div"
          mb="0px"
        >
          <b>TURISMO DE GRUPO</b>
        </Typography>
        <Typography variant="h5" align="center" mt="-20px">
          ________________________
        </Typography>
        <Typography variant="h6" align="center" component="div" mb="20px">
          ¿Cómo funciona?
        </Typography>

        <Stack
          className="lideres"
          direction="row"
          justifyContent="center"
          spacing={4}
          marginX="100px"
        >
          <Stack>
            {/* <Typography fontSize="24" align="left" component="div" mb="0px">
              Encontrar proveedores cercanos
            </Typography> */}

            <Typography fontSize="18" align="left" component="div" mb="0px">
              Nuestro equipo se especializada en animación y organización de
              viajes de grupo estudiará un programa a su medida, sobre la base
              de los programas existentes
            </Typography>

            <Typography fontSize="18" align="left" component="div" mb="0px">
              En función de sus recursos financieros, vamos a establecer las
              especificaciones detalladas con los alojamientos, de los medios de
              transporte a utilizar, menús, comidas, actividades, vida nocturna,
              etc.
            </Typography>

            <Stack direction="row" spacing={1} mt>
              {/* <Button id="button-empezar" size='medium' variant="outlined">
                            <Link to={{pathname:'/Mapa',state}} className="btnin">VER MAPA</Link>
                        </Button> */}
              <Button id="button-empezar" size="medium" variant="outlined">
                <Link to="/Proveedores" className="btnin">
                  Ver más...
                </Link>
              </Button>
            </Stack>

            {/* <Typography fontSize="24" align="left" component="div" mb="0px">
              Guardar mis proveedores favoritos
            </Typography>
            <Typography fontSize="18" align="left" component="div" mb>
              Si creas una cuenta como líder de manada, podrás marcar tus
              proveedores favoritos (mediante el botón con forma de estrella),
              luego podrás encontrarlos fácilmente en la página de “Mi Perfil”,
              el lugar para guardar los mejóres productos o servicios para tu
              mascota.
            </Typography>

            <div>
              <Button id="button-empezar" size="medium" variant="outlined">
                <Link to="/Perfil" className="btnin">
                  CREAR CUENTA
                </Link>
              </Button>
            </div> */}
          </Stack>

          <Stack>
            <img
              className="img-people-pet"
              src={turismogrupo}
              alt="turismogrupo"
            />
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}
