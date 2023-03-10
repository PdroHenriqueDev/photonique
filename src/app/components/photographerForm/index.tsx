import { useState } from 'react';
import Button from '@dynamicComponents/button';
import Input from '@dynamicComponents/input';
import DynamicSelect from '@dynamicComponents/select';
import { Form, Container, ContentContainer, FormGroup, TextLogin, TextWelcome, FormRow, ErrorMessage } from './styles';
import { genders } from '../../utils/variables/gender';
import { states } from '../../utils/variables/states-cities/states';
import { citiesByState } from '../../utils/variables/states-cities/cities';
import { cpfMask } from '../../utils/masks/cpf';
import { phoneMask } from '../../utils/masks/phone';
import { formatCEP } from '../../utils/masks/cep';
import { UseError } from '../../hooks/useError';
import {  isCpf, isPhoneNumber, isPasswordStrong, isEmail } from '../../utils/validators';
import { PhotographerFormProps } from 'app/models/components/photographerForm.mode';

function RegisterForm({ buttonLabel, onSubmit, isSubmitting }:PhotographerFormProps) {
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [cpf, setCpf] = useState('');
  const [gender, setGenter] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { setError, removeError, getErrorMessageByFieldName, errors } = UseError();

  const isFormValid = name !== '' &&
    email !== '' &&
    cpf !== '' &&
    gender !== '' &&
    phone !== '' &&
    zipCode !== '' &&
    state !== '' &&
    city !== '' &&
    address !== '' &&
    neighborhood !== '' &&
    number !== '' &&
    password !== '' &&
    confirmPassword !== '' &&
    errors.length === 0;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);

    if (!event.target.value) {
        setError({ field: 'name', message: 'O nome ?? obrigat??rio' })
    } else {
        removeError('name')
    }
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

  if (event.target.value && !isEmail(event.target.value)) {
      setError({ field: 'email', message: 'E-email inv??lido' });
  } else {
      removeError('email');
  }
}

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedCpf = cpfMask(event.target.value);
    setCpf(maskedCpf);

    if (event.target.value && !isCpf(maskedCpf)) {
        setError({ field: 'cpf', message: 'Cpf inv??lido' })
    } else {
        removeError('cpf')
    }

  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenter(event.target.value)

    if (!event.target.value) {
        setError({ field: 'gender', message: 'Selecione um g??nero' })
    } else {
        removeError('gender')
    }
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedNumber = phoneMask(event.target.value);
    setPhone(maskedNumber);

    if (event.target.value && !isPhoneNumber(maskedNumber)) {
        setError({ field: 'phone', message: 'N??mero inv??lido' })
    } else {
        removeError('phone')
    }
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedCep = formatCEP(event.target.value);
    setZipCode(maskedCep);

    if (!event.target.value) {
        setError({ field: 'cep', message: 'Cep inv??lido' })
    } else {
        removeError('cep')
    }
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const citiesFiltered: any = citiesByState(event.target.value);
    setCities(citiesFiltered);

    setState(event.target.value);

    if (!event.target.value) {
        setError({ field: 'state', message: 'Selecione um Estado' })
    } else {
        removeError('state')
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);

    if (!event.target.value) {
        setError({ field: 'city', message: 'Selecione uma cidade' })
    } else {
        removeError('city')
    }
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);

    if (!event.target.value) {
        setError({ field: 'address', message: 'O logadouro ?? obrigat??rio' })
    } else {
        removeError('address')
    }
  };

  const handleNeighborhoodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNeighborhood(event.target.value);

    if (!event.target.value) {
        setError({ field: 'neighborhood', message: 'O bairro ?? obrigat??rio' })
    } else {
        removeError('neighborhood')
    }
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);

    if (!event.target.value) {
        setError({ field: 'number', message: 'O n??mero ?? obrigat??rio' })
    } else {
        removeError('number')
    }
  };

  const handleComplementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComplement(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    let erros = isPasswordStrong(event.target.value);

    if (event.target.value && erros) {
        removeError('password');
        setError({ field: 'password', message: erros });
    } else {
        removeError('password');
    }

    if (confirmPassword.length > 3 && event.target.value !==  confirmPassword) {
        setError({ field: 'confirmPassword', message: 'As senhas precisam ser iguais' });
    } else {
        removeError('confirmPassword');
    }
  }

  const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);

    if (event.target.value !== password)  {
        setError({ field: 'confirmPassword', message: 'As senhas precisam ser iguais' });
    } else {
        removeError('confirmPassword');
    }
  }

  const handleSubmit = (event: any) => {
        event.preventDefault();

        onSubmit({
            name,
            email,
            cpf,
            gender,
            phone,
            zipCode,
            state,
            city,
            address,
            neighborhood,
            number,
            complement,
            password,
            confirmPassword,
        });
    };

  return (
    <Container>
        <ContentContainer>
            <TextLogin>Cadastre-se</TextLogin>
            <TextWelcome>Junte-se a n??s</TextWelcome>
            <Form onSubmit={handleSubmit} noValidate >
                <FormRow>
                    <Input
                        value={name} placeholder='Nome'
                        onChange={handleNameChange}
                        error={!!getErrorMessageByFieldName('name')}
                        disabled={isSubmitting}
                    />
                    { getErrorMessageByFieldName('name') && <ErrorMessage>{getErrorMessageByFieldName('name')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <Input
                        value={email} placeholder='Email'
                        onChange={handleEmailChange}
                        error={!!getErrorMessageByFieldName('email')}
                        disabled={isSubmitting}
                    />
                    { getErrorMessageByFieldName('email') && <ErrorMessage>{getErrorMessageByFieldName('email')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <Input
                        placeholder='CPF'
                        value={cpf}
                        onChange={handleCpfChange}
                        maxLength='14'
                        error={!!getErrorMessageByFieldName('cpf')}
                        disabled={isSubmitting}
                    />
                    { getErrorMessageByFieldName('cpf') && <ErrorMessage>{getErrorMessageByFieldName('cpf')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <DynamicSelect
                        emptyMessa={'Selecione seu G??nero'}
                        options={genders}
                        value={gender} onChange={handleGenderChange}
                        error={!!getErrorMessageByFieldName('gender')}
                        disabled={isSubmitting}
                    />
                    { getErrorMessageByFieldName('gender') && <ErrorMessage>{getErrorMessageByFieldName('gender')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <Input
                        placeholder='Telefone/Celular'
                        value={phone}
                        onChange={handlePhoneNumberChange}
                        error={!!getErrorMessageByFieldName('phone')}
                        disabled={isSubmitting}
                    />
                    { getErrorMessageByFieldName('phone') && <ErrorMessage>{getErrorMessageByFieldName('phone')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <Input
                        placeholder='Cep'
                        value={zipCode}
                        onChange={handleCepChange}
                        error={!!getErrorMessageByFieldName('cep')}
                        disabled={isSubmitting}
                    />
                    { getErrorMessageByFieldName('cep') && <ErrorMessage>{getErrorMessageByFieldName('cep')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <DynamicSelect
                        emptyMessa={'Selecione seu Estado'}
                        options={states}
                        value={state}
                        valueType={'value'}
                        onChange={(e) => handleStateChange(e)}
                        error={!!getErrorMessageByFieldName('state')}
                        disabled={isSubmitting}
                    />
                    { getErrorMessageByFieldName('state') && <ErrorMessage>{getErrorMessageByFieldName('state')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <DynamicSelect
                        emptyMessa={state === '' ? 'Selecione primeiro o estado' : 'Selecione sua Cidade'}
                        options={cities}
                        disabled={state === '' || isSubmitting}
                        value={city}
                        valueType={'name'}
                        onChange={(e) => handleCityChange(e)}
                        error={!!getErrorMessageByFieldName('city')}
                    />
                    { getErrorMessageByFieldName('city') && <ErrorMessage>{getErrorMessageByFieldName('city')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <Input
                        placeholder='Logradouro'
                        value={address}
                        onChange={handleAddressChange}
                        error={!!getErrorMessageByFieldName('address')}
                        disabled={isSubmitting}
                    />
                    { getErrorMessageByFieldName('address') && <ErrorMessage>{getErrorMessageByFieldName('address')}</ErrorMessage> }
                </FormRow>


                <FormGroup>
                    <FormRow>
                        <Input
                            placeholder='Bairro'
                            value={neighborhood}
                            onChange={handleNeighborhoodChange}
                            error={!!getErrorMessageByFieldName('neighborhood')}
                            disabled={isSubmitting}
                        />
                        { getErrorMessageByFieldName('neighborhood') && <ErrorMessage>{getErrorMessageByFieldName('neighborhood')}</ErrorMessage> }
                    </FormRow>

                    <FormRow>
                        <Input placeholder='N??mero'
                            value={number}
                            onChange={handleNumberChange}
                            error={!!getErrorMessageByFieldName('number')}
                            disabled={isSubmitting}
                        />
                        { getErrorMessageByFieldName('number') && <ErrorMessage>{getErrorMessageByFieldName('number')}</ErrorMessage> }
                    </FormRow>
                </FormGroup>

                <FormRow>
                    <Input
                        placeholder='Complemento'
                        value={complement}
                        onChange={handleComplementChange}
                        disabled={isSubmitting}
                    />
                </FormRow>

                <FormRow>
                    <Input
                        type="password"
                        value={password}
                        onChange={handlePassword}
                        error={!!getErrorMessageByFieldName('password')}
                        disabled={isSubmitting}
                    />
                    { getErrorMessageByFieldName('password') && <ErrorMessage>{getErrorMessageByFieldName('password')}</ErrorMessage> }
                </FormRow>
                <FormRow>
                    <Input
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                        error={!!getErrorMessageByFieldName('confirmPassword')}
                        disabled={isSubmitting}
                    />
                    { getErrorMessageByFieldName('confirmPassword') && <ErrorMessage>{getErrorMessageByFieldName('confirmPassword')}</ErrorMessage> }
                </FormRow>

                <Button label={isFormValid ? buttonLabel : 'Preencha todos os campos'} disabled={!isFormValid} isLoading={isSubmitting}/>
            </Form>
        </ContentContainer>
    </Container>
  );
}

export default RegisterForm;
