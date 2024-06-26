import React from 'react'
import { TableBody, TableContainer, TableHead, TableTd, TableTh, TableTr } from '../Table/styled'

const COLUMNS = ' 1fr 1.3fr 1fr 0.6fr 0.6fr 50px 50px'

export default function CustomersTable({ data, removeBtn,editBtn }) {

  return (
    <TableContainer>
      <TableHead>
        <TableTr gridTemplateColumns={COLUMNS}>
          <TableTh>Customer name</TableTh>
          <TableTh>Email</TableTh>
          <TableTh>Location</TableTh>
          <TableTh>Orders</TableTh>
          <TableTh>Spent</TableTh>
          <TableTh></TableTh>
          <TableTh></TableTh>
        </TableTr>
      </TableHead>
      <TableBody>
        {data?.map(item => (

          <TableTr key={item?.id} gridTemplateColumns={COLUMNS}>
            
            <TableTd>{ item?.full_name }</TableTd>
            <TableTd>{ item?.email }</TableTd>
            <TableTd>{ item?.location }</TableTd>
            <TableTd>{ item?.orders } orders</TableTd>
            <TableTd>${ item?.spent }</TableTd>
            <TableTd onClick={()=> removeBtn(item)}>Remove</TableTd>
            <TableTd onClick={()=> editBtn(item)}>Edit</TableTd>
          </TableTr>
        ))}
      </TableBody>
    </TableContainer>
  )
}
