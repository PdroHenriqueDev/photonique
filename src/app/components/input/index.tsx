import { Input, InputPassword, InputPasswordContainer } from './styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputProps } from '../../models/components/input.model';
import { useState } from 'react';

function Form(props: InputProps) {
  const { type } = props;
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
              ? <Input />
              : <InputPasswordContainer>
                    <InputPassword type={inputType} />
                    { showPassword
                      ? <span onClick={solvePassword}><Visibility /> </span>
                      : <span onClick={solvePassword}><VisibilityOff /></span>
                    }
                </InputPasswordContainer>

        }
    </>
  );
}

export default Form;