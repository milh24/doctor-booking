import { createReducer } from "@reduxjs/toolkit";
import { AppState, setLoading } from "redux/actions/appActions";

const initialState: AppState = {
  loading: false,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setLoading, (state, action) => ({
    ...state,
    loading: action.payload,
  }));
});
