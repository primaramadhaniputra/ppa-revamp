import { ISelectItem } from '@hudoro/neron'
import React from 'react'
import Layout from './Layout'
import Site from './Site'
import { Wrapper } from './styles'

interface IProps {
   loginDefaultValue: ISelectItem
}

export default function AdminTab({ loginDefaultValue }: IProps) {
   return (
      <Wrapper>
         <Site />
         <Layout loginDefaultValue={loginDefaultValue} />
      </Wrapper>
   )
}
