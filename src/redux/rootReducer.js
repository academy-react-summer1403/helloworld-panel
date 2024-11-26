// ** Reducers Imports
import layout from "./layout";
import navbar from "./navbar";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user";
// import calendar from "@components/Calendar/store";
import calendar from "../components/Calendar/store";

const persistUserReducer = persistReducer(
  {
    key: "user",
    storage,
  },
  user
);

const rootReducer = { navbar, layout, user: persistUserReducer, calendar };

export default rootReducer;
