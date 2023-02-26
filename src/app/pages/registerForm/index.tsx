import { useState } from 'react';
import Button from '@dynamicComponents/button';
import Input from '@dynamicComponents/input';
import DynamicSelect from '@dynamicComponents/select';
import { Container, ContentContainer, FormGroup, TextLogin, TextWelcome, FormRow } from './styles';
import { gender } from '../../utils/variables/gender';
import { states } from '../../utils/variables/states-cities/states';
import { citiesByState } from '../../utils/variables/states-cities/cities';
import { cpfMask } from '../../utils/masks/cpf';
import { phoneMask } from '../../utils/masks/phone';
import { formatCEP } from '../../utils/masks/cep';


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

  const [cep, setCep] = useState('');

  const handleCepMask = (event: any) => {
    const maskedCep = formatCEP(event.target.value);
    setCep(maskedCep);
  };

  return (
    <Container>
        <ContentContainer>
            <TextLogin>Cadastre-se</TextLogin>
            <TextWelcome>Junte-se a nós</TextWelcome>

            <FormRow>
                <Input  placeholder='Nome'/>
            </FormRow>

            <FormRow>
                <Input placeholder='CPF' value={cpf}  onChange={handleCpfMask} maxLength='14'/>
            </FormRow>

            <FormRow>
                <DynamicSelect emptyMessa={'Selecione seu Gênero'} options={gender}/>
            </FormRow>

            <FormRow>
                <Input placeholder='Telefone/Celular' value={phone}  onChange={handleNumberMask} />
            </FormRow>

            <FormRow>
                <Input placeholder='Cep' value={cep}  onChange={handleCepMask}/>
            </FormRow>

            <FormRow>
                <DynamicSelect emptyMessa={'Selecione seu Estado'} options={states} onChange={(e) => handleStateChange(e)}/>
            </FormRow>

            <FormRow>
                <DynamicSelect emptyMessa={'Selecione sua Cidade'} options={cities}/>
            </FormRow>

            <FormRow>
                <Input placeholder='Logradouro'/>
            </FormRow>

            <FormRow>
                <FormGroup>
                    <Input placeholder='Bairro' />
                    <Input placeholder='Número' />
                </FormGroup>
            </FormRow>

            <FormRow>
                <Input placeholder='Complemento'/>
            </FormRow>

            <FormRow>
                <Input type="password" />
            </FormRow>
            <FormRow>
                <Input type="password" />
            </FormRow>

            <Button label='Cadastrar' />
        </ContentContainer>
    </Container>
  );
}

export default Form;
