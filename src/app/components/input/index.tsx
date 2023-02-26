import { Input, InputPassword, InputPasswordContainer } from './styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputProps } from '../../models/components/input.model';
import { useState } from 'react';

function Form(props: InputProps) {
  const { type, onChange, value, placeholder } = props;
  const defaultInput = type ? (type !== 'password') : true;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputType, setInputType] = useState<any>('password');

  const solvePassword = () => {
    setShowPassword(showPassword ? false : true);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <>
        {
            defaultInput
              ? <Input value={value}  onChange={onChange} placeholder={placeholder}/>
              : <InputPasswordContainer>
                    <InputPassword value={value} type={inputType} onChange={onChange} placeholder='Senha'/>
                    { showPassword
                      ? <span aria-hidden="true" onClick={solvePassword}><Visibility /> </span>
                      : <span aria-hidden="true" onClick={solvePassword}><VisibilityOff /></span>
                    }
                </InputPasswordContainer>

        }
    </>
  );
}

export default Form;