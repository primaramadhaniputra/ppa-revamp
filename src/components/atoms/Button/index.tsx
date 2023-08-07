import React from 'react'
import { Button as StyledButton } from './styles'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

const Button = ({ title, ...rest }: IProps) => {
  return (
    <StyledButton {...rest}>
      {title}
    </StyledButton>
  )
}

export default Button