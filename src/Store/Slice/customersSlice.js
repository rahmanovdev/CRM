import { createSlice } from "@reduxjs/toolkit";
import { CUSTOMERS } from "../../Components/Pages/Customers/const";

const initialState = {
  data: CUSTOMERS,
  m_data: CUSTOMERS,
  current_remove_item: null,
  current_edit_item: null,
  visible_customer_modal: false,
  visible_remove_modal: false,
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    searchHandler(state, action) {
      state.data = state.m_data.filter((item) =>
        item.full_name
          .toLowerCase()
          .trim()
          .includes(action.payload.toLowerCase().trim())
      );
    },
    searchLocationHandler(state, action) {
      state.data = state.m_data.filter((item) =>
        !action.payload?.value
          ? item
          : item?.location?.toLowerCase()?.trim() ===
            action.payload?.value?.toLowerCase()?.trim()
      );
    },
    setData(state, action) {
      state.data = action.payload;
    },
    searchProductHandler(state, action) {
      state.data = state.m_data.filter((item) =>
        !action.payload?.value
          ? item
          : item?.type_product?.toLowerCase()?.trim() ===
            action.payload?.value?.toLowerCase()?.trim()
      );
    },
    filterBySpent(state, action) {
      state.data = state.m_data.filter((item) =>
        !action.payload?.value
          ? item
          : Number(item.spent) > Number(action.payload?.value)
      );
    },
    visibleCustomerModal(state, action) {
      state.visible_customer_modal = action.payload;
    },
    createHandler(state, action) {
      state.m_data = [action.payload,...state.data];
      state.data = state.m_data;
      state.visible_customer_modal = false;
    },
    visibleRemoveModal(state, action) {
      state.visible_remove_modal = action.payload;
    },
    setCurrentRemove(state, action) {
      state.current_remove_item = action.payload;
    },
    setCurrentEdit(state, action) {
      state.current_edit_item = action.payload;
    },
    customerRemove(state, action) {
      state.m_data = state.m_data.filter(item => item.id !== state.current_remove_item?.id)
      state.data = state.m_data
      state.visible_remove_modal = false;
      state.current_remove_item = null;
    },
    editCustomerHandler(state, action) {
      state.m_data = state.m_data.map(item => {
        if(item?.id === action.payload?.id){
          item = action.payload
        }
        return item
      })
      state.data = state.m_data
      state.current_edit_item = null;
      state.visible_customer_modal = false;
    }
  },
});

export const {
  searchHandler,
  searchLocationHandler,
  searchProductHandler,
  setData,
  filterBySpent,
  visibleCustomerModal,
  createHandler,
  visibleRemoveModal,
  setCurrentRemove,
  setCurrentEdit,
  customerRemove,
  editCustomerHandler
} = customersSlice.actions;

export default customersSlice.reducer;
