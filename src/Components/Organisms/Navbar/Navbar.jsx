import React from 'react'
import { NavbarLeft, NavbarRight, NavbarStyled, NavbarTitle } from './styled'
import { ProfileCompanyName } from '../../Molecules/ProfileRreview/styled'
import ProfilePreview from '../../Molecules/ProfileRreview/ProfilePreview'
import MailIcon from '../../../Assets/Icons/MailIcon'
import BellIcon from '../../../Assets/Icons/BellIcon'

export default function Navbar({title}) {
  return (
    <NavbarStyled>
      <NavbarLeft>
        <NavbarTitle>{title}</NavbarTitle>
      </NavbarLeft>
      <NavbarRight>
          <MailIcon/>
          <BellIcon/>
        <ProfilePreview/>
        
      </NavbarRight>
      
    </NavbarStyled>
  )
}
