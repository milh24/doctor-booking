import { createAction } from "@reduxjs/toolkit";

export interface AppState {
  loading: boolean;
}

export const setLoading = createAction<boolean>("app/setLoading");

export const createBooking = createAction<{
  doctorId: string;
  name: string;
  date: string;
  start: number;
}>("app/createBooking");

export const cancelBooking = createAction<string>("app/cancelBooking");

export type AppActions = typeof createBooking | typeof cancelBooking;
