import {
  configureStore,
  combineReducers,
  createStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import overViewReducer from "./reducers/overViewSlice";
import tagsReducer from "./reducers/tagsSlice.js";
import postCategoryReducer from "./reducers/categoryPostsSlice";
import managementTeamReducer from "./reducers/managementTeamSlice.js";
import positionSlice from "./reducers/positionSlice.js";
import departmentReducer from "./reducers/departmentSlice.js";
import guestServiceReducer from "./reducers/guestServicesSlice.js";
import roleSlice from "./reducers/roleSlice.js";
import roleReducer from "./reducers/roleSlice.js";
import categoryReducer from "./reducers/functionSlice.js";
import userDirectSlice from "./reducers/UserSlice.js";
import agentDirectory from "./reducers/agentDirectory.js";
const authPersistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  overView: overViewReducer, //add OverviewSlice
  tags: tagsReducer,
  postCategory: postCategoryReducer,
  manage: managementTeamReducer,
  position: positionSlice,
  department: departmentReducer,
  role: roleReducer,
  category: categoryReducer,
  user: userDirectSlice.reducer,
  guestSerives: guestServiceReducer,
  agent: agentDirectory,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
