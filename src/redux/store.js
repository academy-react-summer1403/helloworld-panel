// ** Redux Imports
import rootReducer from "./rootReducer";
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// original code of vuexy
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware({
//       serializableCheck: false,
//     });
//   },
// });

// export { store };
