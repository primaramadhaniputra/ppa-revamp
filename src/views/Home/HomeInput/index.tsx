import { Select } from '@hudoro/neron'
import React from 'react'
import { InputLabel, Wrapper, WrapperInput } from './styles';

interface IProps {
  items: {
    id: number;
    value: string;
    label: string;
  }[]
}

export default function HomeInput({ items }: IProps) {
  return (
    <Wrapper>
      <InputLabel variant="p" >Menu</InputLabel>
      <WrapperInput>
        <Select items={items} placeholder='Device / Production' />
      </WrapperInput>
    </Wrapper>
  )
}
