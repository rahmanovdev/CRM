import React, { useEffect, useState } from "react";
import ModalTemplate from "../../Templates/ModalTemplate/ModalTemplate";
import { GridBlock } from "../../../Base/styled";
import Button from "../../Atoms/Button/Button";
import { Label, ModalFilterSelect, ModalInputLine } from "./styled";
import Select from "../../Atoms/Select/Select";
import { LOCATIONS, TYPE_PRODUCTS } from "../../Pages/Customers/const";
import Input from "../../Atoms/Input/Input";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  createHandler,
  editCustomerHandler,
} from "../../../Store/Slice/customersSlice";

export default function CustomerModal({ closeHandler, submitHandler }) {
  const dispatch = useDispatch();

  const current_item = useSelector(
    (state) => state?.rootReducer?.customersSlice?.current_edit_item
  );

  const [data, setData] = useState({
    id: null,
    full_name: "",
    email: "",
    location: null,
    orders: "",
    spent: "",
    type_product: null,
    date: null,
  });

  useEffect(() => {
    if (current_item) {
      setData(current_item);
    }
  }, [current_item]);

  const locationsHandler = (location) => {
    setData((old) => ({ ...old, location: location?.value }));
  };

  const productsHandler = (type_product) => {
    setData((old) => ({ ...old, type_product: type_product?.value }));
  };

  const fullNameHandler = (full_name) => {
    setData((old) => ({ ...old, full_name: full_name }));
  };

  const emailHandler = (email) => {
    setData((old) => ({ ...old, email: email }));
  };

  const ordersHandler = (orders) => {
    setData((old) => ({ ...old, orders: orders }));
  };

  const spentHandler = (spent) => {
    setData((old) => ({ ...old, spent: spent }));
  };

  const validation = () => {
    if (
      data?.full_name?.length &&
      data?.email?.length &&
      data?.location?.length &&
      String(data?.orders?.length) &&
      String(data?.spent?.length) &&
      data?.type_product?.length
    ) {
      return true;
    } else {
      alert("pls enter all data");
      return false;
    }
  };

  const createCustomer = () => {
    const id = Math.floor(Math.random() * 5000);
    const date = moment(new Date()).format("YYYY-MM-DD");
    validation() && dispatch(createHandler({ ...data, id: id, date: date }));
  };

  const editCustomer = () => {
    validation() && dispatch(editCustomerHandler(data));
  };

  return (
    <ModalTemplate title="Customer" closeHandler={closeHandler}>
      <ModalInputLine>
        <GridBlock gridColumns="1fr">
          <Label>Full Name</Label>
          <Input onChange={fullNameHandler} value={data.full_name} />
        </GridBlock>
        <GridBlock gridColumns="1fr">
          <Label>Email</Label>
          <Input onChange={emailHandler} value={data.email} />
        </GridBlock>
      </ModalInputLine>
      <ModalInputLine>
        <GridBlock gridColumns="1fr">
          <Label>Orders</Label>
          <Input onChange={ordersHandler} value={data.orders} />
        </GridBlock>
        <GridBlock gridColumns="1fr">
          <Label>Spent</Label>
          <Input onChange={spentHandler} value={data.spent} />
        </GridBlock>
      </ModalInputLine>
      <ModalFilterSelect>
        <GridBlock gridColumns="1fr">
          <Label>location</Label>
          <Select handler={locationsHandler} options={LOCATIONS} />
        </GridBlock>
        <GridBlock gridColumns="1fr">
          <Label>Type Product</Label>
          <Select handler={productsHandler} options={TYPE_PRODUCTS} />
        </GridBlock>
      </ModalFilterSelect>
      <GridBlock gridColumns="1fr 1fr">
        <Button handler={closeHandler} type="transparent">
          Cancel
        </Button>
        <Button handler={current_item ? editCustomer : createCustomer}>
          Save
        </Button>
      </GridBlock>
    </ModalTemplate>
  );
}
