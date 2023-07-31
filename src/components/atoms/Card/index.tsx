import React from 'react'
import { Container } from './styles'

interface IProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const Card = ({ children, ...rest }: IProps) => {
  return (
    <Container {...rest}>{children}</Container>
  )
}

export default Card