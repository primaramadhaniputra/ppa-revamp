import { Grid, Select } from '@hudoro/neron'
import TitlePage from 'atoms/TitlePage'
import React from 'react'
import { fontSizing } from 'utils/styles'
import { SelectLabel } from '../styles'

export default function Layout() {
   return (
      <>
         <TitlePage type="h4" styles={{ margin: "50px 0 30px", fontSize: fontSizing.xl.fontSize }}>
            Layout
         </TitlePage>
         <Grid container flexDirection='column' gap={30}>
            <Grid container flexDirection='column' gap={5}>
               <SelectLabel >Pilih layout login</SelectLabel>
               <Select items={[{ id: 1, values: 'Login-1', label: 'Login-1' }]} defaultValue={{ id: 1, values: 'Login-1', label: 'Login-1' }} />
            </Grid>
            <Grid container flexDirection='column' gap={5}>
               <SelectLabel >Pilih posisi navbar</SelectLabel>
               <Select items={[{ id: 1, values: 'Center', label: 'Center' }]} defaultValue={{ id: 1, values: 'Center', label: 'Center' }} />
            </Grid>
         </Grid>
      </>
   )
}
