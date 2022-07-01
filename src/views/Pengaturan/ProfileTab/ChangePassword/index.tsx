import { Grid } from '@hudoro/neron'
import LabeledInput from 'atoms/LabeledInput'
import React from 'react'
import { colors } from 'utils/styles'

export default function ChangePassword() {
   return (
      <Grid container flexDirection='column' gap={30} style={{ marginBottom: '150px' }}>
         <LabeledInput name='passwrodSaatIni' title='Password saat ini' style={{ backgroundColor: colors.blueSky }} value='banana' />
         <LabeledInput name='passwordBaru' title='Password baru' style={{ backgroundColor: colors.blueSky }} value='potato' />
         <LabeledInput name='konfirmasiPasswordBar' title='Konfirmasi password baru' style={{ backgroundColor: colors.blueSky }} value='manggo' />
      </Grid>
   )
}
