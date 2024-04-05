import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { example } from "@/services/api";
import general from "@/services/redux/reducer/general/index.ts";

const store = configureStore({
  reducer: {
    general: general,
    [example.reducerPath]: example.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(example.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export { store };
