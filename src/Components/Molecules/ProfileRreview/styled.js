import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const ProfileImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius:50%;
    margin-right:16px;
`

export const ProfileStyled = styled.div`
    display: flex;
    align-items:center;
`

export const ProfileTexts = styled.div``

export const ProfileTextsNav = styled(NavLink)`
    text-decoration: none;
    
`

export const ProfileFullName = styled.h3`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    color: #111827;

`

export const ProfileCompanyName = styled.h3`
    font-size: 12px;
    font-weight: 400;
    line-height: 19.2px;
    text-align: left;
    color:#718096;
`