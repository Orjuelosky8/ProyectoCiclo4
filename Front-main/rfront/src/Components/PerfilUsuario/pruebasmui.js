import "./vistafn.css";
import ImgMediaCard from "./pruebacard";
import Grid from "@mui/material/Grid";
import CCCP from "./cardperf";
import "./ppp.css";

export default function VistaPerfil() {
  return (
    <div>
      <div className="divnavperf">
        <CCCP correo="honey@demo.com" />
      </div>
      {/* <h1>card</h1> */}
      <h2 className="texx">Mis proveedores favoritos</h2>
      <Grid container>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="maximascotas"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/dog"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Ultrapets"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/cat"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Fluffydog"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/pet"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Fluffydog"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/pet"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Fluffydog"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/pet"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Fluffydog"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/pet"
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ImgMediaCard
            nombre="Fluffydog"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores dignissimos aperiam sed harum, sit amet quisquam quasi ratione, consectetur culpa nisi velit quibusdam accusamus ea numquam deserunt doloribus debitis!"
            imagen="https://loremflickr.com/389/183/pet"
          />
        </Grid>
      </Grid>
    </div>
  );
}
