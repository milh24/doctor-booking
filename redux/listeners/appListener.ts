import { createListenerMiddleware } from "@reduxjs/toolkit";
import Router from "next/router";
import {
  cancelBooking,
  createBooking,
  setLoading
} from "redux/actions/appActions";

const appListenerMiddleware = createListenerMiddleware();

appListenerMiddleware.startListening({
  actionCreator: createBooking,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(setLoading(true));
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      });
      Router.reload();
    } catch (e) {
      listenerApi.dispatch(setLoading(false));
    }
  },
});

appListenerMiddleware.startListening({
  actionCreator: cancelBooking,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(setLoading(true));
    try {
      await fetch(`/api/booking/${action.payload}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "cancelled" }),
      });
      Router.reload();
    } catch (e) {
      listenerApi.dispatch(setLoading(false));
    }
  },
});

export default appListenerMiddleware;
