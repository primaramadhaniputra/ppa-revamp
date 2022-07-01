import LabeledInput from 'atoms/LabeledInput'
import StyledButton from 'atoms/StyledButton'
import TitlePage from 'atoms/TitlePage'
import React from 'react'
import { colors, fontSizing } from 'utils/styles'
import { ButtonWrapper } from '../styles'
import { Wrapper } from './styles'

export default function Profile() {
   return (
      <Wrapper>
         <TitlePage type="h4" styles={{ margin: "30px 0 30px", fontSize: fontSizing.xl.fontSize }}>
            Profil
         </TitlePage>
         <LabeledInput name='Nama-lengkap' title='Nama Lengkap' style={{ backgroundColor: colors.blueSky }} value='Dani Tampan dan Rupawan suuuuuuuuuuuuuuuuuu' />
         <ButtonWrapper >
            <StyledButton>Update Profile</StyledButton>
         </ButtonWrapper>
         <TitlePage type="h4" styles={{ fontSize: fontSizing.xl.fontSize, marginBottom: '30px' }}>
            Ubah Password
         </TitlePage>
      </Wrapper>
   )
}
