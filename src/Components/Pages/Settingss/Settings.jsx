import React from 'react'
import MainTemplate from '../../Templates/MainTemplate/MainTemplate'
import { Outlet } from 'react-router-dom'

export default function Settings() {
  return (
    <MainTemplate title='Settings'>
        Settings
        <Outlet/>
    </MainTemplate>
  )
}
