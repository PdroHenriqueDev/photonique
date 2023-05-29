import { Container, ContentContainer, Form, FormRow } from './styles';
import Input from '@components/input';
import { useContext, useEffect, useState } from 'react';
import DynamicSelect from '@components/select';
import { states } from 'app/utils/variables/states-cities/states';
import { citiesByState } from 'app/utils/variables/states-cities/cities';
import { CityProps } from 'app/models/variables/city.model';
import { UseError } from 'app/hooks/useError';
import ErrorMessage from '@components/errorMessage';
import DatePicker from '@components/datePicker';
import { Dayjs } from 'dayjs';
import { EventFormComponentProps } from 'app/models/components/eventForm.model';
import StaticService from '../../../../services/StaticService';
import { SnackbarContext } from 'app/context/snackBar';

export default function EventForm({ form }: EventFormComponentProps) {
  const [name, setName] = useState('');
  const [local, setLocal] = useState('');
  const [state, setState] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [eventCategories, setEventCategories] = useState([]);
  const [cities, setCities] = useState<CityProps[]>([]);
  const [city, setCity] = useState('');
  const [date, setDate] = useState<Dayjs | null>(null);

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    UseError();

  const { showSnackbar } = useContext(SnackbarContext);

  useEffect(() => {
    if (form.state.length > 1) {
      const citiesFiltered = citiesByState(form.state);
      setCities(citiesFiltered);
      setCity(form.city);
    }

    const getCategories = async () => {
      try {
        const getRequest = await StaticService.getCategories();
        const { data } = getRequest.data;
        setEventCategories(data);
      } catch {
        showSnackbar(
          'Algum erro no servidor, tente novamente em alguns instantes',
          'danger',
        );
      }
    };

    if (!eventCategories.length) getCategories();
  }, [eventCategories.length, form.city, form.state, showSnackbar]);

  const handleEventNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setName(value);

    const shortName = value.length < 3;
    if (shortName) {
      setError({
        field: 'name',
        message: 'Nome muito curto',
      });
    } else {
      removeError('name');
    }
    form.name = value;
  };

  const handleEventLocationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setLocal(value);

    const isShortName = value.length < 3;
    if (isShortName) {
      setError({
        field: 'local',
        message: 'Local muito curto',
      });
    } else {
      removeError('local');
    }
    form.local = value;
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;

    setCategoryId(value);

    if (!value) {
      setError({ field: 'categoryId', message: 'Selecione uma categoria' });
    } else {
      removeError('categoryId');
    }
    form.categoryId = value;
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
    form.state = value;
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCity(value);

    if (!value) {
      setError({ field: 'city', message: 'Selecione uma cidade' });
    } else {
      removeError('city');
    }
    form.city = value;
  };

  const handleDateChange = (date: Dayjs | null) => {
    setDate(date);

    if (!date) {
      setError({ field: 'date', message: 'Selecione uma data' });
    } else {
      removeError('date');
    }
    form.date = date;
  };

  return (
    <Container>
      <ContentContainer>
        <Form noValidate>
          <FormRow>
            <Input
              placeholder="Nome do evento"
              value={name || form.name}
              onChange={handleEventNameChange}
              error={!!getErrorMessageByFieldName('name')}
            />
            {getErrorMessageByFieldName('name') && (
              <ErrorMessage message={getErrorMessageByFieldName('name')} />
            )}
          </FormRow>

          <FormRow>
            <Input
              placeholder="Local"
              value={local || form.local}
              onChange={handleEventLocationChange}
              error={!!getErrorMessageByFieldName('local')}
              //   disabled={isSubmitting}
            />
            {getErrorMessageByFieldName('local') && (
              <ErrorMessage message={getErrorMessageByFieldName('local')} />
            )}
          </FormRow>

          <FormRow>
            <DynamicSelect
              emptyMessa={'Selecione a categoria do evento'}
              options={eventCategories}
              value={categoryId || form.categoryId}
              onChange={(e) => handleCategoryChange(e)}
              error={!!getErrorMessageByFieldName('categoryId')}
              //   disabled={isSubmitting}
            />
            {getErrorMessageByFieldName('categoryId') && (
              <ErrorMessage
                message={getErrorMessageByFieldName('categoryId')}
              />
            )}
          </FormRow>

          <FormRow>
            <DynamicSelect
              emptyMessa={'Selecione seu Estado'}
              options={states}
              value={state || form.state}
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
                state === '' && form.state === ''
                  ? 'Selecione primeiro o estado'
                  : 'Selecione sua Cidade'
              }
              options={cities}
              disabled={state === '' && form.state === ''}
              value={city || form.city}
              valueType={'name'}
              onChange={(e) => handleCityChange(e)}
              error={!!getErrorMessageByFieldName('city')}
            />
            {getErrorMessageByFieldName('city') && (
              <ErrorMessage message={getErrorMessageByFieldName('city')} />
            )}
          </FormRow>

          <FormRow>
            <DatePicker value={date ?? form.date} onChange={handleDateChange} />
            {getErrorMessageByFieldName('date') && (
              <ErrorMessage message={getErrorMessageByFieldName('date')} />
            )}
          </FormRow>
        </Form>
      </ContentContainer>
    </Container>
  );
}
