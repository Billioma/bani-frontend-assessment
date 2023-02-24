import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

export interface PageDetails {
  page_amount: "";
  first_name: "";
  name: "";
}

export interface PageDetailsState {
  data: PageDetails | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: PageDetailsState = {
  data: null,
  isLoading: false,
  error: null,
};

const pageDetailsSlice = createSlice({
  name: "pageDetails",
  initialState,
  reducers: {
    fetchPageDetailsRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchPageDetailsSuccess(state, action: PayloadAction<PageDetails>) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchPageDetailsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPageDetailsRequest,
  fetchPageDetailsSuccess,
  fetchPageDetailsFailure,
} = pageDetailsSlice.actions;

export function* watchFetchPageDetailsRequest() {
  yield takeLatest(fetchPageDetailsRequest.type, fetchPageDetails);
}

function* fetchPageDetails(
  action: PayloadAction<string>
): Generator<any, void, any> {
  try {
    const response = yield call(
      axios.get,
      `https://stage.getbani.com/api/v1/comhub/direct_payment_page_details/${action.payload}`
    );
    const pageDetails: PageDetails = response.data;
    yield put(fetchPageDetailsSuccess(pageDetails));
  } catch (error: any) {
    yield put(fetchPageDetailsFailure(error.message));
  }
}

export default pageDetailsSlice.reducer;
