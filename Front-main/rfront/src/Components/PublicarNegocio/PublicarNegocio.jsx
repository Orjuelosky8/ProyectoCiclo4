import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InfoForm from './InfoForm';
import ContactForm from './ContactForm';
import ServicesForm from './ServicesForm';

const steps = ['Información de la empresa', 'Datos de contacto', 'Productos / Servicios'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <InfoForm />;
    case 1:
      return <ContactForm />;
    case 2:
      return <ServicesForm />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function PublicarNegocio() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Publicar Negocio
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom align="center">
                  ¡Gracias por publicar su negocio!
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Ahora, podrá administrar y editar la infoprmación de su negocio desde la página: "Mi Negocio".
                </Typography>
                <Typography variant="subtitle1" align="center" marginTop="15px">
                    <Button variant="outlined">Ir a Mi Negocio</Button>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Anterior
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Completar' : 'Siguiente'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
      </Container>
    </ThemeProvider>
  );
}