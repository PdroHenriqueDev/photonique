import { UseError } from '../../../../hooks/useError';
import { isEmail } from '../../../../utils/validators';
import { FormEvent, useContext, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { Container, TextLogin, TextRegister, TextWelcome, FormRow, Form } from './styles';
import ErrorMessage from '@dynamicComponents/errorMessage';
import { SnackbarContext } from '../../../../context/snackBar';
import PhotographerService from '../../../../services/PhotographerService'

function LoginForm() {
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { setError, removeError, getErrorMessageByFieldName, errors } = UseError();

    const { showSnackbar } = useContext(SnackbarContext);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);

        if (event.target.value && !isEmail(event.target.value)) {
            setError({ field: 'email', message: 'E-email inválido' });
        } else {
            removeError('email');
        }
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);

        if (!event.target.value) {
            setError({ field: 'password', message: 'Senha necessária' });
        } else {
            removeError('password');
        }
    }

    const navigate = useNavigate();
    const registerRoute = () => {
        navigate('/cadastrar');
    };

    const isFormValid = errors.length === 0 && email.length && password.length;

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsSubmitting(true);

        try {
            const postRequest = await PhotographerService.login(email, password);
            const { message } = postRequest.data;
            showSnackbar(message, 'success');
        } catch (error: any) {
            const { message } = error.response.data;
            showSnackbar(message, 'danger');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Container>
            <TextLogin>Log in</TextLogin>
            <TextWelcome>Junte-se a nós e acesse sua conta</TextWelcome>
            <Form onSubmit={handleSubmit} noValidate >
            <FormRow>
                <Input
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                    error={!!getErrorMessageByFieldName('email')}
                    disabled={isSubmitting}
                />
                { getErrorMessageByFieldName('email') &&
                    <ErrorMessage message={getErrorMessageByFieldName('email')}/>
                }
            </FormRow>

            <FormRow>
                <Input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    error={!!getErrorMessageByFieldName('password')}
                    disabled={isSubmitting}
                />
            </FormRow>
            <Button label='log in'  disabled={!isFormValid} isLoading={isSubmitting}/>
            </Form>
            <TextRegister>Não tem uma conta? <strong aria-hidden="true" onClick={registerRoute}>Cadastre-se</strong></TextRegister>
        </Container>
    );
}

export default LoginForm;
