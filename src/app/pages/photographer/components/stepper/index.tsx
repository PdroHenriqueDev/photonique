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
import PhotographerService from '../../../../services/PhotographerService';
import Spinner from '@components/spinner';
import { PhotoProps } from 'app/models/components/photosUpload.mode';
import Final from '../final';

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
    categoryId: '',
    state: '',
    city: '',
    date: null,
  });
  const [files, setFiles] = useState<PhotoProps[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventId, setEventId] = useState('');

  const { showSnackbar } = useContext(SnackbarContext);

  const validateSteps = (): boolean => {
    if (activeStep === 0) {
      const isEventFormFilled = Object.values(eventForm).every((value) =>
        Boolean(value),
      );

      if (!isEventFormFilled) {
        showSnackbar('Preencha o formulário todo', 'warning');
        return false;
      }
    }

    if (activeStep === 1 && files.length === 0) return false;

    return true;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const changeStep = (error = false) => {
    if (error) return;

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleButton = async () => {
    const isValid = validateSteps();
    // console.log('got here in handleButton', error);
    if (!isValid) return;

    if (activeStep === 0) await createEvent(eventForm);

    if (activeStep === 1) await uploadPhotos(files);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //   const handleSkip = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped((prevSkipped) => {
  //       const newSkipped = new Set(prevSkipped.values());
  //       newSkipped.add(activeStep);
  //       return newSkipped;
  //     });
  //   };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleFilesSelect = (filesSelected: PhotoProps[]) => {
    setFiles(filesSelected);
  };

  const handleFile = (photo: PhotoProps) => {
    const newFiles = files.filter((file) => file.id !== photo.id);
    setFiles([...newFiles, photo]);
  };

  const createEvent = async (eventForm: EventFormProps) => {
    setIsSubmitting(true);
    try {
      const postRequest = await PhotographerService.createEvent(eventForm);
      const { message, data } = postRequest.data;
      setEventId(data);
      showSnackbar(message, 'success');
      changeStep();
    } catch (error: any) {
      const { message } = error.response.data;
      showSnackbar(message, 'danger');
      changeStep(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const uploadPhotos = async (photos: PhotoProps[]) => {
    setIsSubmitting(true);

    try {
      photos.forEach(async (photo) => {
        if (!photo.isSent) {
          const { file } = photo;
          await PhotographerService.uploadFile(file, {
            onUploadProgress: (progressEvent) => {
              if (progressEvent?.total) {
                const progressRequest = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total,
                );
                photo.progress = progressRequest;
                handleFile(photo);
              }
            },
          })
            .then(() => {
              photo.isSent = true;
            })
            .catch(() => {
              showSnackbar('Error no envio', 'danger');
            });
        }
      });
      changeStep();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonText = (activeStep: number): string => {
    const stepIndex = {
      0: 'Salvar evento',
      1: 'Enviar fotos',
      [steps.length - 1]: 'Finalizar',
    };

    return stepIndex[activeStep];
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
                {activeStep === 1 && (
                  <PhotosUpload
                    photos={files}
                    onFilesSelect={handleFilesSelect}
                    isSubmitting={isSubmitting}
                  />
                )}
                {activeStep === 2 && <Final />}
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
                <Button
                  className="step-button"
                  onClick={handleButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner /> : handleButtonText(activeStep)}
                </Button>
              </Box>
            </>
          )}
        </ContentContainer>
      </Box>
    </Container>
  );
}
