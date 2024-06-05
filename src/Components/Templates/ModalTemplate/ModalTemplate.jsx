import React from 'react'
import { ModalBg, ModalBlock, ModalClose, ModalContainer, ModalContent, ModalHeader, ModalTitle } from './styled'
import CloseIcon from '../../../Assets/Icons/CloseIcon'

export default function ModalTemplate({children,title,closeHandler,width}) {
  return (
    <ModalContainer>
        <ModalBlock width={width}>
            <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalClose onClick={closeHandler}>
                <CloseIcon/>
            </ModalClose>
            </ModalHeader>
            <ModalContent>
              {children}
            </ModalContent>
        </ModalBlock>
        <ModalBg onClick={closeHandler}></ModalBg>
    </ModalContainer>
  )
}
1