import { configureStore } from "@reduxjs/toolkit";
import linkSlice from "./home/link.slice";
import { linkRedirect } from "./home/link.api";

const Store = configureStore({
  reducer: {
    linkMaintained: linkSlice,
    [linkRedirect.reducerPath]: linkRedirect.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([linkRedirect.middleware]);
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
