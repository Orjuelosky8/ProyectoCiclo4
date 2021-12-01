import * as React from "react";
import Icon from "@mui/material/Icon";
import GitHubIcon from "@mui/icons-material/GitHub";
import BadgeIcon from "@mui/icons-material/Badge";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Stack from "@mui/material/Stack";
import "./AboutUs.css";

import carlos from "../../assets/Team/carlos.png";
import Daniel from "../../assets/Team/Daniel2.png";
import Eliana from "./../../assets/Team/Eliana.png";
import Federico from "../../assets/Team/Federico.png";
import Jazmin from "../../assets/Team/Jazmin.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Carlos Eduardo Rodriguez Sanchez",
    imgPath: carlos,
    descrip: "Estudiante del programa Misión TIC 2021 - UTP",
    urlGithub: "https://github.com/CarlosRodriguez21",
    urlLin:
      "https://www.linkedin.com/in/carlos-eduardo-rodr%C3%ADguez-s%C3%A1nchez-505ab389/",
    urlInterp: "https://interacpedia.com/user/carlos-rodriguez-4?tab=profile",
  },

  {
    label: "Daniel Eduardo Orjuela Malagón",
    imgPath: Daniel,
    descrip: "Estudiante del programa Misión TIC 2021 - UTP",
    urlGithub: "https://github.com/Orjuelosky8",
    urlLin:
      "https://www.linkedin.com/in/carlos-eduardo-rodr%C3%ADguez-s%C3%A1nchez-505ab389/",
    urlInterp: "https://interacpedia.com/user/carlos-rodriguez-4?tab=profile",
  },

  {
    label: "Eliana Venegas",
    imgPath: Eliana,
    descrip: "Estudiante del programa Misión TIC 2021 - UTP",
    urlGithub: "https://github.com/elianav10",
    urlLin:
      "https://www.linkedin.com/in/carlos-eduardo-rodr%C3%ADguez-s%C3%A1nchez-505ab389/",
    urlInterp: "https://interacpedia.com/user/carlos-rodriguez-4?tab=profile",
  },

  {
    label: "Federico Montes Garcia",
    imgPath: Federico,
    descrip: "Estudiante del programa Misión TIC 2021 - UTP",
    urlGithub: "https://github.com/federicomontesgarcia",
    urlLin:
      "https://www.linkedin.com/in/carlos-eduardo-rodr%C3%ADguez-s%C3%A1nchez-505ab389/",
    urlInterp: "https://interacpedia.com/user/carlos-rodriguez-4?tab=profile",
  },

  {
    label: "Jazmin Ceballos",
    imgPath: Jazmin,
    descrip: "Estudiante del programa Misión TIC 2021 - UTP",
    urlGithub: "https://github.com/elianav10",
    urlLin:
      "https://www.linkedin.com/in/carlos-eduardo-rodr%C3%ADguez-s%C3%A1nchez-505ab389/",
    urlInterp: "https://interacpedia.com/user/carlos-rodriguez-4?tab=profile",
  },
];

export default function AboutAs() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, alignItems: "center" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Stack className="img-nosotros">
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 200,
                    width: 200,
                    display: "block",
                    maxWidth: 400,
                    maxHeight: 400,
                    overflow: "hidden",
                    alignContent: "center",
                    borderRadius: "300px",
                    padding: "10px,",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          </Stack>
        ))}
      </AutoPlaySwipeableViews>
      <Stack alignItems="center">
        <Paper
          square
          elevation={0}
          sx={{
            display: "block",
            alignItems: "center",
            height: 50,
            paddingBlock: 3,
            bgcolor: "background.default",
            marginBottom: 14,
          }}
        >
          <Typography component="div" color="#004F67" align="center" mb>
            {images[activeStep].label}
          </Typography>

          <Typography
            component="div"
            color="#00303F"
            fontSize="14px"
            align="center"
          >
            {images[activeStep].descrip}
          </Typography>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="center"
            mt
            spacing={1}
          >
            <Link
              target="_blank"
              color="inherit"
              href={images[activeStep].urlGithub}
            >
              <GitHubIcon />
            </Link>
            <Link
              target="_blank"
              color="inherit"
              href={images[activeStep].urlLin}
            >
              <LinkedInIcon />
            </Link>
            <Link
              target="_blank"
              color="inherit"
              href={images[activeStep].urlInterp}
            >
              <BadgeIcon />
            </Link>
          </Stack>

          <Icon
            baseClassName="fas"
            className="fa-plus-circle"
            color="primary"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Paper>
      </Stack>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Siguiente
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />
    </Box>
  );
}
