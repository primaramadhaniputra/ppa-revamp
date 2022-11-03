import React from 'react'
import { StyledButton, Wrapper } from './styles'

const DonwloadButton = () => {

   const downloadPng = () => {
      const imageLink = document.createElement('a')
      const canvas = document.getElementById('chartLine') as HTMLCanvasElement
      imageLink.download = 'canvas.png'
      imageLink.href = canvas?.toDataURL('image/png', 1)
      imageLink.click()
   }

   return (
      <Wrapper>
         {/* <StyledButton >Donwload SVG</StyledButton> */}
         <StyledButton onClick={downloadPng}>Donwload PNG</StyledButton>
         {/* <StyledButton>Donwload CSV</StyledButton> */}
      </Wrapper>
   )
}

export default DonwloadButton