import React from 'react'
import ModalTemplate from '../../Templates/ModalTemplate/ModalTemplate'
import { Buttons, Text } from './styled'
import Button from '../../Atoms/Button/Button'

export default function RemoveModal({closeHandler,submitHandler}) {
  return (
    <ModalTemplate title="Remove" width='420px' closeHandler={closeHandler}>
        <Text>Do you want remove this item/items?</Text>
        <Buttons>
            <Button type='transparent-dark' handler={closeHandler}>Cancel</Button>
            <Button handler={submitHandler}>Remove</Button>
        </Buttons>
    </ModalTemplate>
  )
}
