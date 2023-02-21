import { useState } from 'react';
import Button from '@dynamicComponents/button';
import Input from '@dynamicComponents/input';
import DynamicSelect from '@dynamicComponents/select';
import { Container, ContentContainer, FormGroup, FormGroupContainer, InputContainer, Label, TextLogin, TextWelcome } from './styles';
import { gender } from '../../utils/variables/gender';
import { states } from '../../utils/variables/states-cities/states';
import { citiesByState } from '../../utils/variables/states-cities/cities';
import { cpfMask } from '../../utils/masks/cpf';
import { phoneMask } from '../../utils/masks/phone';


function Form() {
  const [cities, setCities] = useState([]);

  const handleStateChange = (event: any) => {
    const citiesFiltered: any = citiesByState(event.target.value);
    setCities(citiesFiltered);
  };

  const [cpf, setCpf] = useState('');

  const handleCpfMask = (event: any) => {
    const maskedCpf = cpfMask(event.target.value);

    setCpf(maskedCpf);
  };

  const [phone, setPhone] = useState('');

  const handleNumberMask = (event: any) => {
    const maskedNumber = phoneMask(event.target.value);
    setPhone(maskedNumber);
  };

  return (
    <Container>
        <ContentContainer>
            <TextLogin>Cadastre-se</TextLogin>
            <TextWelcome>Junte-se a nós</TextWelcome>

            <InputContainer>
                <Label>Nome:</Label>
                < Input/>
            </InputContainer>

            <InputContainer>
                <Label>CPF:</Label>
                < Input value={cpf}  onChange={handleCpfMask} maxLength='14'/>
            </InputContainer>
            <InputContainer>
                <Label>Gênero:</Label>
                < DynamicSelect options={gender}/>
            </InputContainer>

            <InputContainer>
                <Label>Telefone/Celular:</Label>
                < Input value={phone}  onChange={handleNumberMask}/>
            </InputContainer>

            <InputContainer>
                <Label>Cep:</Label>
                < Input/>
            </InputContainer>

            <InputContainer>
                <Label>Estado:</Label>
                < DynamicSelect options={states} onChange={(e) => handleStateChange(e)}/>
            </InputContainer>

            <InputContainer>
                <Label>Cidade:</Label>
                < DynamicSelect options={cities}/>
            </InputContainer>

            <InputContainer>
                <Label>Logradouro:</Label>
                < Input/>
            </InputContainer>

            <FormGroup>
                <FormGroupContainer>
                    <Label>Bairro:</Label>
                    < Input/>
                </FormGroupContainer>
                <FormGroupContainer>
                    <Label>Número:</Label>
                    < Input />
                </FormGroupContainer>
            </FormGroup>

            <InputContainer>
                <Label>Complemento:</Label>
                < Input/>
            </InputContainer>

            < Button label='Cadastrar' />
        </ContentContainer>
    </Container>
  );
}

export default Form;
