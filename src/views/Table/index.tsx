import { Card } from '@hudoro/neron'
import React from 'react'
import Layout from 'src/components/layouts/Dashboard/layout'
// import FilterComp from './FilterComp'
// import InputComp from './InputComp'
// import PaginationComp from './PaginationComp'
import { Wrapper } from './styles'
import TableComp from './TableComp'

export default function Table() {


   return (
      <Layout title='Table'>
         <Wrapper style={{ marginTop: '50px' }}>
            <Card>
               {/* <InputComp /> */}
               <TableComp />
               {/* <FilterComp />
               <PaginationComp /> */}
            </Card>
         </Wrapper>
      </Layout >
   )
}
