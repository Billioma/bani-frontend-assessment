import { all } from "redux-saga/effects";
import { watchFetchPageDetailsRequest } from "./pageDetails";

export default function* rootSaga() {
  yield all([
    // Add your sagas here
    watchFetchPageDetailsRequest(),
  ]);
}
