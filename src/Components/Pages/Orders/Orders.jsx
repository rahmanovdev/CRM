import React, { useEffect, useState } from "react";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import { BlockContainer } from "../../../Base/styled";
import Tabs from "../../Molecules/Tabs/Tabs";
import { TABS_LIST, orderList } from "./const";
import Table from "../../Molecules/Table/Table";
import Search from "../../Atoms/Search/Search";
import CustomDatePicker from "../../Atoms/CustomDatePicker/CustomDatePicker";
import FilterButton from "../../Atoms/FilterButton/FilterButton";

export default function Orders() {
  const [tabsList, setTabslist] = useState(TABS_LIST);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(orderList);
  const [filtersShow, setFiltersShow] = useState(false); 

  useEffect(() => {
    searchByTitle(search);
  }, [search]);

  const setTab = (id) => {
    console.log(id);
    const data = tabsList.map((tab) => {
      tab.id === id ? (tab.active = true) : (tab.active = false);
      return tab;
    });
    setTabslist(data);
    searchByStatus(id);
  };

  const searchByStatus = (id) => {
    const sendData = orderList.filter((item) => {
      return id === "all"
        ? item
        : item.status.toLowerCase() === id.toLowerCase();
    });
    setData(sendData);
  };

  const searchByTitle = (title) => {
    const senData = orderList.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .trim()
        .includes(title.toLocaleLowerCase().trim())
    );
    setData(senData);
  };

  const searchByPrice = (e) => {
    const value = e.target.value;
    const senData = orderList.filter(item => {
      return value === 'none' ? item : item.price === value;
    })
     setData(senData);
  }

  return (
    <MainTemplate title="Orders">
      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
        <Search value={search} setValue={setSearch} />
        <CustomDatePicker data={orderList} setData={setData} />
        <FilterButton active={filtersShow} setFilters={setFiltersShow} />
        {filtersShow ? (
          <div>
            <select name="" id="" onChange={searchByPrice}>
              <option value="none">Select avarege price</option>
              <option value="450">$450</option>
              <option value="750">$750</option>
              <option value="1200">$1200</option>
              <option value="2500">$2500</option>
              <option value="350">$350</option>
            </select>
          </div>
        ) : null}
        <Table data={data} />
      </BlockContainer>
    </MainTemplate>
  );
}
