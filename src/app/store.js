import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import cryptoTableReducer from "../features/cryptoTableSlice";
import cryptoTableSaga from "../sagas/cryptoTableSaga";
const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    cryptoTable: cryptoTableReducer,
  },
  middleware: [saga],
});
saga.run(cryptoTableSaga);
