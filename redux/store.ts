import { configureStore } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import { createLogger } from "redux-logger";
import appListenerMiddleware from "./listeners/appListener";
import appReducer from "./reducers/appReducer";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true,
  level: "debug",
});

const makeStore = (context: Context) =>
  configureStore({
    reducer: {
      app: appReducer,
    },
    middleware: [appListenerMiddleware.middleware, logger],
    devTools: true,
  });

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppDispatch = ReturnType<RootStore["dispatch"]>;

export const wrapper = createWrapper<RootStore>(makeStore);
