import React from 'react'
import { ModalContent, ModalHeader, ModalOverlay, ModalBody } from './styles'
import { Text } from '@hudoro/neron'

interface IProps {
  title?: string
  children?: React.ReactNode
  isShow?: boolean
  onClose?: () => void
}

const Modal = ({ title, children, isShow, onClose }: IProps) => {
  return (
    <ModalOverlay onClick={onClose} isOpen={isShow}>
      <ModalContent isOpen={isShow} onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Text variant="h4">{title}</Text>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal