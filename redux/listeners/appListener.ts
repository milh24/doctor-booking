import { createListenerMiddleware } from "@reduxjs/toolkit"
import { addDoctor } from "../actions/appActions"

const appListenerMiddleware = createListenerMiddleware()

appListenerMiddleware.startListening({
  actionCreator: addDoctor,
  effect: async (action, _listenerApi) => {
    // console.debug("[appListenerMiddleware]", JSON.stringify(action))
  },
})

export default appListenerMiddleware
