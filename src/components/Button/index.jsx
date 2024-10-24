import { ButtonContainer } from './styles';
import React from 'react';

const Button = ({title, variant="primary", onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export { Button };