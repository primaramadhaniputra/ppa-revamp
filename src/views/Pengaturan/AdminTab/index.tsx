import { ISelectItem } from '@hudoro/neron'
import React from 'react'
import Layout from './Layout'
import Site from './Site'
import { Wrapper } from './styles'

interface IProps {
   loginDefaultValue: ISelectItem
   navbarDefaultValue: ISelectItem
}

export default function AdminTab({ loginDefaultValue, navbarDefaultValue }: IProps) {
   return (
      <Wrapper>
         <Site />
         <Layout loginDefaultValue={loginDefaultValue} navbarDefaultValue={navbarDefaultValue} />
      </Wrapper>
   )
}
