import { call, put, takeEvery } from "redux-saga/effects";
import { getDataSuccess } from "../features/cryptoTableSlice";

function* handleGetDataFetch() {
  const res = yield call(() => fetch("https://api.coincap.io/v2/assets"));
  const data = yield res.json();
  yield put(getDataSuccess(data));
}

function* cryptoTableSaga() {
  yield takeEvery("cryptoTable/getDataFetch", handleGetDataFetch);
}

export default cryptoTableSaga;
