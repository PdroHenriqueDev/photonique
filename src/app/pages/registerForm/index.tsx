import Button from '@dynamicComponents/button';
import Input from '@dynamicComponents/input';
import DynamicSelect from '@dynamicComponents/select';
import { Container, ContentContainer, FormGroup, FormGroupContainer, InputContainer, Label, TextLogin, TextWelcome } from './styles';

function Form() {
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
                < Input/>
            </InputContainer>
            <InputContainer>
                <Label>Gênero:</Label>
                < DynamicSelect/>
            </InputContainer>

            <InputContainer>
                <Label>Telefone/Celular:</Label>
                < Input/>
            </InputContainer>

            <InputContainer>
                <Label>Cep:</Label>
                < Input/>
            </InputContainer>

            <InputContainer>
                <Label>Estado:</Label>
                < DynamicSelect />
            </InputContainer>

            <InputContainer>
                <Label>Cidade:</Label>
                < DynamicSelect />
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
            {/* <FormGroup>
                <FormGroupContainer>
                    <Label>Nome:</Label>
                    < Input/>
                </FormGroupContainer>
                <FormGroupContainer>
                    <Label>CPF:</Label>
                    < Input />
                </FormGroupContainer>
            </FormGroup>

            <FormGroup>
                <FormGroupContainer>
                    <Label>Gênero:</Label>
                    < DynamicSelect/>
                </FormGroupContainer>
                <FormGroupContainer>
                    <Label>Número:</Label>
                    < Input />
                </FormGroupContainer>
            </FormGroup>

            <FormGroup>
                <FormGroupContainer>
                    <Label>Email:</Label>
                    < Input />
                </FormGroupContainer>
                <FormGroupContainer>
                    <Label>Telefone/Celular:</Label>
                    < Input />
                </FormGroupContainer>
            </FormGroup>

            <FormGroup>
                <FormGroupContainer>
                    <Label>Cep:</Label>
                    < Input />
                </FormGroupContainer>
                <FormGroupContainer>
                    <Label>Estado:</Label>
                    < DynamicSelect />
                </FormGroupContainer>
                <FormGroupContainer>
                    <Label>Cidade:</Label>
                    < DynamicSelect />
                </FormGroupContainer>
            </FormGroup>

            <FormGroup>
                <FormGroupContainer>
                    <Label>Logradouro:</Label>
                    < Input />
                </FormGroupContainer>
                <FormGroupContainer>
                    <Label>Número:</Label>
                    < Input />
                </FormGroupContainer>
            </FormGroup>

            <FormGroup>
                <FormGroupContainer>
                    <Label>Senha:</Label>
                    < Input type="password"/>
                </FormGroupContainer>
                <FormGroupContainer>
                    <Label>Confirme a senha:</Label>
                    < Input type="password"/>
                </FormGroupContainer>
            </FormGroup> */}

            < Button label='Cadastrar' />
        </ContentContainer>
    </Container>
  );
}

export default Form;
