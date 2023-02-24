import { combineReducers } from "@reduxjs/toolkit";
import pageDetailsReducer from "./pageDetails";

const rootReducer = combineReducers({
  // Add your reducers here
  pageDetails: pageDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// import { combineReducers } from '@reduxjs/toolkit';
// import pageDetailsSlice from './pageDetails';

// const rootReducer = combineReducers({
//   // Add your reducers here
//   pageDetails: pageDetailsSlice,
// });

// export type RootState = ReturnType<typeof rootReducer>;

// export default rootReducer;
