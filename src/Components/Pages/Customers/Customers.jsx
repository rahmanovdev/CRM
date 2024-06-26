import React, { useEffect, useState } from 'react'
import MainTemplate from '../../Templates/MainTemplate/MainTemplate'
import { BlockContainer, FlexBlock, GridBlock } from '../../../Base/styled'
import CustomersHeader from '../../Molecules/CustomersHeader/CustomersHeader'
import CustomersTable from '../../Molecules/CustomersTable/CustomersTable'
import { useDispatch, useSelector } from 'react-redux'
import FilterButton from '../../Atoms/FilterButton/FilterButton'
import Search from '../../Atoms/Search/Search'
import { customerRemove, filterBySpent, searchHandler, searchLocationHandler, searchProductHandler, setCurrentEdit, setCurrentRemove, setData, visibleCustomerModal, visibleRemoveModal } from '../../../Store/Slice/customersSlice'
import {  LOCATIONS, SPENTS, TYPE_PRODUCTS } from './const'
import Select from '../../Atoms/Select/Select'
import CustomDatePicker from '../../Atoms/CustomDatePicker/CustomDatePicker'
import CustomerModal from '../../Organisms/CustomerModal/CustomerModal'
import RemoveModal from '../../Organisms/RemoveModal/RemoveModal'

export default function Customers() {
  const dispatch = useDispatch()

  const data = useSelector(state => state?.rootReducer?.customersSlice?.data)
  const m_data = useSelector(state => state?.rootReducer?.customersSlice?.m_data)
  const customerModalVisible = useSelector(state => state?.rootReducer?.customersSlice?.visible_customer_modal)
  const removeModalVisible = useSelector(state => state?.rootReducer?.customersSlice?.visible_remove_modal)

  const [search, setSearch] = useState('');
  const [filtersShow, setFiltersShow] = useState(false)

  useEffect(() => {
    searchByName(search.trim())
  }, [search])

  const searchByName = (full_name) => dispatch(searchHandler(full_name))

  const searchByLocation = (location) => dispatch(searchLocationHandler(location))

  const searchByDate = (results) => dispatch(setData(results));

  const searchByProduct = (product) => dispatch(searchProductHandler(product))

  const filterSpend = (spend) => dispatch(filterBySpent(spend))

  const hideCustomerModal = () => {
    dispatch(setCurrentEdit(null))
    dispatch(visibleCustomerModal(false))
  }
  const showCustomerModal = (item) => {
    dispatch(setCurrentEdit(item ?? null))  
    dispatch(visibleCustomerModal(true))
  }

  const hideRemoveModal = () => {
    dispatch(setCurrentRemove(null))
    dispatch(visibleRemoveModal(false))
  }
  const showRemoveModal = (item) => {
    dispatch(setCurrentRemove(item))
    dispatch(visibleRemoveModal(true))
  }

  const removeHandler = () => dispatch(customerRemove());

  return (
    <MainTemplate title="Customers">
      {customerModalVisible ? <CustomerModal closeHandler={hideCustomerModal} /> : null}
      {removeModalVisible ? <RemoveModal closeHandler={hideRemoveModal} submitHandler={removeHandler} /> : null}
      <CustomersHeader showModal={showCustomerModal} />
      <BlockContainer marginTop="24px">
        <FlexBlock justifyContent="space-between" alignItems="center">
          <Search placeholder="Search by name, email, or others..." value={search} setValue={setSearch} />
          <FilterButton active={filtersShow} setFilters={setFiltersShow} />
        </FlexBlock>
        { filtersShow ? <GridBlock gridColumns="1fr 1fr 1fr 1fr">
          <Select options={LOCATIONS} handler={searchByLocation} />
          <Select options={SPENTS} handler={filterSpend} />
          <CustomDatePicker data={m_data} setData={searchByDate} />
          <Select options={TYPE_PRODUCTS} handler={searchByProduct} />
        </GridBlock> : null}
        <CustomersTable data={data} removeBtn={showRemoveModal} editBtn={showCustomerModal} />
      </BlockContainer>
    </MainTemplate>
  )
}
