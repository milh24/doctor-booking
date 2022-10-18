import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import appListenerMiddleware from "./listeners/appListener";
import appReducer from "./reducers/appReducer";

const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true,
  level: "debug",
});

export const makeStore = () =>
  configureStore({
    reducer: {
      app: appReducer,
    },
    middleware: [
      appListenerMiddleware.middleware,
      ...(process.env.NODE_ENV === "development" ? [logger] : []),
    ],
    devTools: true,
  });

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;
export type AppDispatch = ReturnType<RootStore["dispatch"]>;
