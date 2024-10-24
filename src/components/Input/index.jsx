import {InputContainer, IconContainer, InputText} from './styles'
import React from 'react';

const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InputText {...rest}/>
    </InputContainer>
  )
}

export { Input };