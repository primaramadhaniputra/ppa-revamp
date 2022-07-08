import { Grid, Pagination, Text } from '@hudoro/neron'
import React from 'react'

interface IProps {
   dataPerPage: number
   totalData: number
   currentPage: number
   totalPage: number;
   nextButtonEvent: () => void
   previousButtonEvent: () => void
}

export default function PaginationComp({ dataPerPage, totalData, currentPage, totalPage, nextButtonEvent, previousButtonEvent }: IProps) {
   return (
      <Grid container
         alignItems='center' justifyContent='space-between'
         style={{ marginTop: '20px', marginLeft: '20px' }}
         gap={20}
      >

         <Text variant='p'>Showing {' '}
            {dataPerPage} of{' '}
            {totalData} Total Rows Selected</Text>
         <Pagination numberOfPages={totalPage} currentPage={currentPage} nextButtonEvent={nextButtonEvent} previousButtonEvent={previousButtonEvent} />
      </Grid>
   )
}
