import React from 'react'
import Button from '../../Atoms/Button/Button'
import { FlexBlock } from '../../../Base/styled'

export default function CustomersHeader({showModal}) {
  return (
    <FlexBlock justifyContent="space-between" alignItems="center">
      <span>Show: All Customers</span>
      <FlexBlock width="155px">
        <Button handler={()=> showModal()}>Add customer</Button>
      </FlexBlock>
    </FlexBlock>
  )
}
