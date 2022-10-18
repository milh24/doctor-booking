import { createAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

export interface AppState {
  doctors: Doctor[]
}

export const addDoctor = createAction<Doctor>("app/addDoctor")
export const hydrate = createAction<{ app: AppState }>(HYDRATE)

export type AppActions = typeof addDoctor
