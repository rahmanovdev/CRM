import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ordersSlice from "./Slice/ordersSlice";

const rootReducer = combineReducers({ordersSlice});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ['ordersSlice']
  },
  rootReducer
);

export const store = configureStore({
  reducer: {
    rootReducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);