import { createReducer } from "@reduxjs/toolkit"
import { addDoctor, AppState, hydrate } from "../actions/appActions"

const initialState: AppState = {
  doctors: [],
}

export default createReducer(initialState, (builder) => {
  builder.addCase(hydrate, (state, action) => ({
    ...state,
    ...action.payload.app,
  }))

  builder.addCase(addDoctor, (state, action) => ({
    ...state,
    doctors: [...state.doctors, action.payload],
  }))
})
