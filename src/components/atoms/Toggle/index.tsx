import React from 'react'
import { Switch } from './styles'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Toggle = ({ ...rest }: IProps) => {
  return (
    <Switch htmlFor={rest.id}>
      <input type="checkbox" {...rest} />
      <span className='slider round'  ></span>
    </Switch>
  )
}

export default Toggle