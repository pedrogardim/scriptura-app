import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { Provider } from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/query";

import { bibleApi } from "./api/bible";

const rootReducer = combineReducers({
  [bibleApi.reducerPath]: bibleApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(bibleApi.middleware),
});

setupListeners(store.dispatch);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
