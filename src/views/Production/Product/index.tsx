import React from 'react'
import { allSites } from 'utils/interfaces'
import Sites from './Sites'
import { ProductTitle } from './styles'
import TotalSites from './TotalSites'

interface IProps {
   sites: allSites[]
}

export default function Product({ sites }: IProps) {
   return (
      <>
         <TotalSites sites={sites} />
         <ProductTitle>Sites</ProductTitle>
         <Sites sites={sites} />
      </>
   )
}
