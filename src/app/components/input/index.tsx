import { Input, InputPassword, InputPasswordContainer } from './styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputProps } from '../../models/components/input.model';
import { useState } from 'react';

function Form({ type, onChange, value, placeholder, error, onKeyDown, disabled }: InputProps) {
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
              ? <Input value={value} placeholder={placeholder} error={error} onChange={onChange} onKeyDown={onKeyDown} disabled={disabled} />
              : <InputPasswordContainer>
                    <InputPassword value={value} type={inputType} placeholder='Senha' error={error} onChange={onChange} onKeyDown={onKeyDown} disabled={disabled} />
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