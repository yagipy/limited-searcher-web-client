import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./rootReducer";
import { rootSaga } from "./rootSaga"

const devMode = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer,
  devTools: devMode,
  middleware
});

sagaMiddleware.run(rootSaga);

export default store;
