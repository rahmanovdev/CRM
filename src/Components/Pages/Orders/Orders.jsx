import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import MainTemplate from '../../Templates/MainTemplate/MainTemplate';

import RemoveModal from '../../Organisms/RemoveModal/RemoveModal';

import Tabs from '../../Molecules/Tabs/Tabs';
import Table from '../../Molecules/Table/Table';

import Search from '../../Atoms/Search/Search';
import CustomDatePicker from '../../Atoms/CustomDatePicker/CustomDatePicker';
import FilterButton from '../../Atoms/FilterButton/FilterButton';
import Select from '../../Atoms/Select/Select';
import Button from '../../Atoms/Button/Button';

import { checkedForRemove, removeHandler, searchHandler, searchPaymentHandler, searchStatusHandler, setData, tabHandler, visibleRemoveModal } from '../../../Store/Slice/ordersSlice';

import { FlexRow } from './styled';
import { BlockContainer } from '../../../Base/styled';

import { orderList, PAIMENT_OPTIONS } from './const';


export default function Orders() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('');
  const data = useSelector(state => state?.rootReducer?.ordersSlice?.data)
  const visibleRemove = useSelector(state => state?.rootReducer?.ordersSlice?.remove_modal_visible);
  const tabsList = useSelector(state => state?.rootReducer?.ordersSlice?.tabs_list);
  const [filtersShow, setFiltersShow] = useState(false)

  useEffect(() => {
    searchByTitle(search.trim())
  }, [search])


  const setTab = (id) => {
    dispatch(tabHandler(id))
    searchByStatus(id)
  }

  const searchByStatus = (id) => dispatch(searchStatusHandler(id))

  const searchByTitle = (title) => dispatch(searchHandler(title))

  const searchByPayment = (payment) => dispatch(searchPaymentHandler(payment))

  const checkedHandler = (id, status) => dispatch(checkedForRemove({id, status}));

  const removeOrder = () => dispatch(removeHandler())

  const searchByDate = (results) => dispatch(setData(results))

  const showRemove = () => dispatch(visibleRemoveModal(true))
  const hideRemove = () => dispatch(visibleRemoveModal(false))

  return (
    <MainTemplate title="Orders">
      {visibleRemove ? <RemoveModal closeHandler={hideRemove} submitHandler={removeOrder} /> : null}
      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
        <FlexRow>
          <Search value={search} setValue={setSearch} />
          <CustomDatePicker data={orderList} setData={searchByDate} />
          <FilterButton active={filtersShow} setFilters={setFiltersShow} />
          <Button handler={showRemove}>Remove order</Button>
        </FlexRow>
        {filtersShow ? <Select options={PAIMENT_OPTIONS} handler={searchByPayment} /> : null}
        <Table data={data} handlerCheckbox={checkedHandler} />
      </BlockContainer>
    </MainTemplate>
  )
}
