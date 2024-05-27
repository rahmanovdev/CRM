import React, { act } from 'react'
import { FilterButtonStyled , FilterIconStyled,FilterText } from './styled'
import FilterIcon from '../../../Assets/Icons/FilterIcon'

export default function FilterButton({active,setFilters}) {

    const setter = () => setFilters(old => !old) 

  return (
    <FilterButtonStyled onClick={setter}>
        <FilterIconStyled active={String(active)}>
            <FilterIcon />
        </FilterIconStyled>
        <FilterText active={String(active)}>Filter</FilterText>
    </FilterButtonStyled>
  )
}
