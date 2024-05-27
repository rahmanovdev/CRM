import React from 'react'
import { TableBody, TableContainer, TableHead, TableOrder, TableOrderId, TableStatus, TableTd, TableTh, TableTr } from './styled'
import Checkbox from '../../Atoms/Checkbox/Checkbox'
import moment from 'moment'

export default function Table({data}) {
  return (
    <TableContainer>
        <TableHead>
            <TableTr>
                <TableTh></TableTh>
                <TableTh>Orders</TableTh>
                <TableTh>Date</TableTh>
                <TableTh>Customer</TableTh>
                <TableTh>Payment</TableTh>
                <TableTh>Status</TableTh>
                <TableTh>Price</TableTh>

            </TableTr>
        </TableHead>
            <TableBody>
              {data.map(item => (
                <TableTr>
                <TableTd>
                    <Checkbox id={item.id}/>
                </TableTd>
                <TableTd>
                    <TableOrder>{item.title}</TableOrder>
                    <TableOrderId>{item.id}</TableOrderId>
                </TableTd>
                <TableTd>{moment(item.date).format('ll')}</TableTd>
                <TableTd>{item.customer.full_name}</TableTd>
                <TableTd>
                    <TableStatus bg='#E7F7EF' color='#0CAF60'>{item.payment_status}</TableStatus>
                </TableTd>
                <TableTd>
                    <TableStatus bg='#FFF0E6' color='#FE964A'>{item.status}</TableStatus>
                </TableTd>
                <TableTd>${item.price}</TableTd>

            </TableTr>
              ))}
            </TableBody>
    </TableContainer>
  )
}
