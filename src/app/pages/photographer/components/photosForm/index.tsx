import { Container, ContentContainer, Form, FormRow } from './styles';
import Input from '@components/input';
import { useState } from 'react';
import DynamicSelect from '@components/select';
import { states } from 'app/utils/variables/states-cities/states';
import { citiesByState } from 'app/utils/variables/states-cities/cities';
import { CityProps } from 'app/models/variables/city.model';
import { UseError } from 'app/hooks/useError';
import ErrorMessage from '@components/errorMessage';

function PhotosForm() {
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [state, setState] = useState('');
  const [cities, setCities] = useState<CityProps[]>([]);
  const [city, setCity] = useState('');

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    UseError();

  const handleEventNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setEventName(value);

    const shortName = value.length < 3;
    if (shortName) {
      setError({
        field: 'eventName',
        message: 'Nome muito curto',
      });
    } else {
      removeError('eventName');
    }
  };

  const handleEventLocationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setEventLocation(value);

    const shortName = value.length < 3;
    if (shortName) {
      setError({
        field: 'eventLocation',
        message: 'Local muito curto',
      });
    } else {
      removeError('eventLocation');
    }
  };

  const handleStateChange = (
    event: React.ChangeEvent<HTMLSelectElement> | string,
  ) => {
    const value =
      typeof event === 'string' || !event ? event : event.target.value;

    const citiesFiltered = citiesByState(value);
    setCities(citiesFiltered);

    setState(value);

    if (!value) {
      setError({ field: 'state', message: 'Selecione um Estado' });
    } else {
      removeError('state');
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCity(value);

    if (!value) {
      setError({ field: 'city', message: 'Selecione uma cidade' });
    } else {
      removeError('city');
    }
  };

  return (
    <Container>
      <ContentContainer>
        <Form noValidate>
          <FormRow>
            <Input
              placeholder="Nome do evento"
              value={eventName}
              onChange={handleEventNameChange}
              error={!!getErrorMessageByFieldName('eventName')}
            />
            {getErrorMessageByFieldName('eventName') && (
              <ErrorMessage message={getErrorMessageByFieldName('eventName')} />
            )}
          </FormRow>

          <FormRow>
            <Input
              placeholder="Local"
              value={eventLocation}
              onChange={handleEventLocationChange}
              error={!!getErrorMessageByFieldName('eventLocation')}
              //   disabled={isSubmitting}
            />
            {getErrorMessageByFieldName('eventLocation') && (
              <ErrorMessage
                message={getErrorMessageByFieldName('eventLocation')}
              />
            )}
          </FormRow>

          <FormRow>
            <DynamicSelect
              emptyMessa={'Selecione seu Estado'}
              options={states}
              value={state}
              valueType={'value'}
              onChange={(e) => handleStateChange(e)}
              error={!!getErrorMessageByFieldName('state')}
              //   disabled={isSubmitting}
            />
            {getErrorMessageByFieldName('state') && (
              <ErrorMessage message={getErrorMessageByFieldName('state')} />
            )}
          </FormRow>

          <FormRow>
            <DynamicSelect
              emptyMessa={
                state === ''
                  ? 'Selecione primeiro o estado'
                  : 'Selecione sua Cidade'
              }
              options={cities}
              disabled={state === ''}
              value={city}
              valueType={'name'}
              onChange={(e) => handleCityChange(e)}
              error={!!getErrorMessageByFieldName('city')}
            />
            {getErrorMessageByFieldName('city') && (
              <ErrorMessage message={getErrorMessageByFieldName('city')} />
            )}
          </FormRow>
        </Form>
      </ContentContainer>
    </Container>
  );
}

export default PhotosForm;
