import { createSlice } from "@reduxjs/toolkit";
import { TABS_LIST, orderList } from "../../Components/Pages/Orders/const";

const initialState = {
  data: orderList?.map((item) => ({ ...item, checked: false })),
  tabs_list: TABS_LIST,
  remove_count: false,
  remove_modal_visible: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    checkedForRemove(state, action) {
      state.data = state.data.map((item) =>
        item.id === action.payload?.id ? { ...item, checked: true } : item
      );
    },
    removeHandler(state, action) {
      const s = state.data.filter((item) => !item.checked);
      state.remove_count = s.length === state.data.length ? true : false;
      if (state.remove_count) {
        alert("Order tandanyz");
        state.remove_modal_visible = false;
        return;
      }
      state.data = s;
      state.remove_modal_visible = false;
    },
    searchHandler(state, action) {
      state.data = orderList.filter((item) =>
        item.title
          .toLocaleLowerCase()
          .trim()
          .includes(action.payload.toLocaleLowerCase().trim())
      );
    },
    searchStatusHandler(state, action) {
      state.data = orderList.filter((item) =>
        action.payload === "all"
          ? item
          : item.status.toLowerCase() === action.payload.toLowerCase()
      );
    },
    searchPaymentHandler(state, action) {
      state.data = orderList.filter((item) =>
        !action.payload.value
          ? item
          : item.payment_status.toLowerCase().trim() ===
            action.payload.value.toLowerCase().trim()
      );
    },
    visibleRemoveModal(state, action) {
      state.remove_modal_visible = action.payload;
    },
    tabHandler(state, action) {
      state.tabs_list = state.tabs_list?.map((tab) => tab?.id === action.payload ? { ...tab, active: true }: { ...tab, active: false }
      );
    },
    setData(state, action) {
      state.data = action.payload;
    }
  },
});

export const {
  checkedForRemove,
  removeHandler,
  searchHandler,
  searchStatusHandler,
  searchPaymentHandler,
  visibleRemoveModal,
  tabHandler,
  setData
} = ordersSlice.actions;

export default ordersSlice.reducer;
