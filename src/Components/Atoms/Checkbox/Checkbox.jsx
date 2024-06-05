import React from 'react'
import { CheckboxContainer, CheckboxInput, CheckboxLabel, CheckboxRadio } from './styled'
import CheckboxIcon from '../../../Assets/Icons/CheckboxIcon'

export default function Checkbox({item,handler}) {
  return (
   <CheckboxContainer>
        <CheckboxInput
         id={item?.id}
         checked={item?.checked}
         type='checkbox'
         onChange={(e)=> {
          handler(item?.id,e.target.checked)
        }} />
        <CheckboxLabel htmlFor={item?.id}>
            <CheckboxRadio>
                <CheckboxIcon/>
            </CheckboxRadio>
        </CheckboxLabel>
   </CheckboxContainer>
  )
}
