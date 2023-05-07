import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, ContentContainer, SetpContentContainer } from './styles';
import EventForm from '../eventForm';
import PhotosUpload from '../../components/photosUpload';
import { EventFormProps } from 'app/models/components/eventForm.model';
import { SnackbarContext } from 'app/context/snackBar';

const steps = [
  'Qualifique suas fotos',
  'Faça o upload das suas fotos',
  'Finalizar',
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [eventForm] = useState<EventFormProps>({
    name: '',
    local: '',
    category: '',
    state: '',
    city: '',
    date: null,
  });

  const { showSnackbar } = useContext(SnackbarContext);

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleButton = async () => {
    const isEventFormFilled: boolean = Object.keys(eventForm).every((key) => {
      return eventForm[key];
    });

    if (activeStep === 0 && !isEventFormFilled) {
      showSnackbar('Preencha o formulário', 'warning');
      return;
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps} className="step">
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <ContentContainer>
          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button className="step-button" onClick={handleReset}>
                  Reset
                </Button>
              </Box>
            </>
          ) : (
            <>
              <SetpContentContainer>
                {activeStep === 0 && <EventForm form={eventForm} />}
                {activeStep === 1 && <PhotosUpload />}
              </SetpContentContainer>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  className="step-button"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Voltar
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button className="step-button" onClick={handleButton}>
                  {activeStep === 1
                    ? 'Enviar fotos'
                    : activeStep === steps.length - 1
                    ? 'Finalizar'
                    : 'Próximo'}
                </Button>
              </Box>
            </>
          )}
        </ContentContainer>
      </Box>
    </Container>
  );
}
