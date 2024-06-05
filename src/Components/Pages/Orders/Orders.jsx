import React, { useEffect, useState } from "react";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import { BlockContainer } from "../../../Base/styled";
import Tabs from "../../Molecules/Tabs/Tabs";
import { PAIMENT_OPTIONS,  orderList } from "./const";
import Table from "../../Molecules/Table/Table";
import Search from "../../Atoms/Search/Search";
import CustomDatePicker from "../../Atoms/CustomDatePicker/CustomDatePicker";
import FilterButton from "../../Atoms/FilterButton/FilterButton";
import Select from "../../Atoms/Select/Select";
import { FlexRow } from "./styled";
import Button from "../../Atoms/Button/Button";
import RemoveModal from "../../Organisms/RemoveModal/RemoveModal";
import { useDispatch, useSelector } from "react-redux";
import {
  checkedForRemove,
  removeHandler,
  searchHandler,
  searchPaymentHandler,
  searchStatusHandler,
  setData,
  tabHandler,
  visibleRemoveModal,
} from "../../../Store/Slice/ordersSlice";

export default function Orders() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const data = useSelector((state) => state.rootReducer?.ordersSlice?.data);
  const visibleRemove = useSelector(
    (state) => state.rootReducer?.ordersSlice?.remove_modal_visible
  );
  const tabsList = useSelector(
    (state) => state.rootReducer?.ordersSlice?.tabs_list
  );

  console.log(tabsList);

  const [filtersShow, setFiltersShow] = useState(false);

  useEffect(() => {
    searchByTitle(search);
  }, [search]);

  const setTab = (id) => {
    dispatch(tabHandler(id));
    searchByStatus(id);
  };

  const searchByStatus = (id) => dispatch(searchStatusHandler(id));

  const searchByTitle = (title) => dispatch(searchHandler(title));

  const searchByPayment = (payment) => dispatch(searchPaymentHandler(payment));

  const checkedHandler = (id, status) =>
    dispatch(checkedForRemove({ id, status }));
  const removeOrder = () => dispatch(removeHandler());

  const searchByDate = (results) => dispatch(setData(results))

  const showRemove = () => dispatch(visibleRemoveModal(true));
  const hideRemove = () => dispatch(visibleRemoveModal(false));

  return (
    <MainTemplate title="Orders">
      {visibleRemove ? (
        <RemoveModal closeHandler={hideRemove} submitHandler={removeOrder} />
      ) : null}
      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
        <FlexRow>
          <Search value={search} setValue={setSearch} />
          <FilterButton active={filtersShow} setFilters={setFiltersShow} />
          <CustomDatePicker data={orderList} setData={searchByDate} />
          <Button handler={showRemove}>Remove order</Button>
        </FlexRow>

        {filtersShow ? (
          <Select options={PAIMENT_OPTIONS} handler={searchByPayment} />
        ) : null}
        <Table handlerCheckbox={checkedHandler} data={data} />
      </BlockContainer>
    </MainTemplate>
  );
}
