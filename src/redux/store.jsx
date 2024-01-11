import { configureStore } from "@reduxjs/toolkit";

import baseReducer from "./reducer";

const store = configureStore({ reducer: baseReducer });

export default store;
