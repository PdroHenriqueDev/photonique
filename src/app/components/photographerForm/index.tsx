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
import {  isCpf, isPhoneNumber, isPasswordStrong } from '../../utils/validators';

function RegisterForm() {
  const [name, setName ] = useState('');
  const [cpf, setCpf] = useState('');
  const [gender, setGenter] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [state, setState] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = UseError();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);

    if (!event.target.value) {
        setError({ field: 'name', message: 'O nome é obrigatório' })
    } else {
        removeError('name')
    }
  }

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedCpf = cpfMask(event.target.value);
    setCpf(maskedCpf);

    if (event.target.value && !isCpf(maskedCpf)) {
        setError({ field: 'cpf', message: 'Cpf inválido' })
    } else {
        removeError('cpf')
    }

  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenter(event.target.value)

    if (!event.target.value) {
        setError({ field: 'gender', message: 'Selecione um gênero' })
    } else {
        removeError('gender')
    }
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedNumber = phoneMask(event.target.value);
    setPhone(maskedNumber);

    if (event.target.value && !isPhoneNumber(maskedNumber)) {
        setError({ field: 'phone', message: 'Número inválido' })
    } else {
        removeError('phone')
    }
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedCep = formatCEP(event.target.value);
    setCep(maskedCep);

    if (!event.target.value) {
        setError({ field: 'cep', message: 'Cep inválido' })
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
    setSelectedCity(event.target.value);

    if (!event.target.value) {
        setError({ field: 'city', message: 'Selecione uma cidade' })
    } else {
        removeError('city')
    }
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);

    if (!event.target.value) {
        setError({ field: 'address', message: 'O logadouro é obrigatório' })
    } else {
        removeError('address')
    }
  };

  const handleNeighborhoodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNeighborhood(event.target.value);

    if (!event.target.value) {
        setError({ field: 'neighborhood', message: 'O bairro é obrigatório' })
    } else {
        removeError('neighborhood')
    }
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);

    if (!event.target.value) {
        setError({ field: 'number', message: 'O número é obrigatório' })
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

  }

  const handleConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);

    if (event.target.value !== password)  {
        setError({ field: 'confirmPassword', message: 'As senhas precisam ser iguais' });
    } else {
        removeError('confirmPassword');
    }
  }

  return (
    <Container>
        <ContentContainer>
            <TextLogin>Cadastre-se</TextLogin>
            <TextWelcome>Junte-se a nós</TextWelcome>
            <Form>
                <FormRow>
                    <Input value={name} placeholder='Nome' onChange={handleNameChange} error={!!getErrorMessageByFieldName('name')}/>
                    { getErrorMessageByFieldName('name') && <ErrorMessage>{getErrorMessageByFieldName('name')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <Input placeholder='CPF' value={cpf}  onChange={handleCpfChange} maxLength='14'/>
                    { getErrorMessageByFieldName('cpf') && <ErrorMessage>{getErrorMessageByFieldName('cpf')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <DynamicSelect
                        emptyMessa={'Selecione seu Gênero'}
                        options={genders}
                        value={gender} onChange={handleGenderChange}
                    />
                    { getErrorMessageByFieldName('gender') && <ErrorMessage>{getErrorMessageByFieldName('gender')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <Input placeholder='Telefone/Celular' value={phone}  onChange={handlePhoneNumberChange} />
                    { getErrorMessageByFieldName('phone') && <ErrorMessage>{getErrorMessageByFieldName('phone')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <Input placeholder='Cep' value={cep}  onChange={handleCepChange}/>
                    { getErrorMessageByFieldName('cep') && <ErrorMessage>{getErrorMessageByFieldName('cep')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <DynamicSelect
                        emptyMessa={'Selecione seu Estado'}
                        options={states}
                        value={state}
                        onChange={(e) => handleStateChange(e)}
                    />
                    { getErrorMessageByFieldName('state') && <ErrorMessage>{getErrorMessageByFieldName('state')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <DynamicSelect
                        emptyMessa={state === '' ? 'Selecione primeiro o estado' : 'Selecione sua Cidade'}
                        options={cities} disabled={state === ''}
                        value={selectedCity}
                        onChange={(e) => handleCityChange(e)}
                    />
                    { getErrorMessageByFieldName('city') && <ErrorMessage>{getErrorMessageByFieldName('city')}</ErrorMessage> }
                </FormRow>

                <FormRow>
                    <Input
                        placeholder='Logradouro'
                        value={address}
                        onChange={handleAddressChange}
                    />
                    { getErrorMessageByFieldName('address') && <ErrorMessage>{getErrorMessageByFieldName('address')}</ErrorMessage> }
                </FormRow>


                <FormGroup>
                    <FormRow>
                        <Input
                            placeholder='Bairro'
                            value={neighborhood}
                            onChange={handleNeighborhoodChange}
                        />
                        { getErrorMessageByFieldName('neighborhood') && <ErrorMessage>{getErrorMessageByFieldName('neighborhood')}</ErrorMessage> }
                    </FormRow>

                    <FormRow>
                        <Input placeholder='Número'
                            value={number}
                            onChange={handleNumberChange}
                        />
                        { getErrorMessageByFieldName('number') && <ErrorMessage>{getErrorMessageByFieldName('number')}</ErrorMessage> }
                    </FormRow>
                </FormGroup>

                <FormRow>
                    <Input
                        placeholder='Complemento'
                        value={complement}
                        onChange={handleComplementChange}
                    />
                </FormRow>

                <FormRow>
                    <Input type="password" value={password} onChange={handlePassword} />
                    { getErrorMessageByFieldName('password') && <ErrorMessage>{getErrorMessageByFieldName('password')}</ErrorMessage> }
                </FormRow>
                <FormRow>
                    <Input type="password" value={confirmPassword} onChange={handleConfirmPassword} />
                    { getErrorMessageByFieldName('confirmPassword') && <ErrorMessage>{getErrorMessageByFieldName('confirmPassword')}</ErrorMessage> }
                </FormRow>

                <Button label='Cadastrar' />
            </Form>
        </ContentContainer>
    </Container>
  );
}

export default RegisterForm;
