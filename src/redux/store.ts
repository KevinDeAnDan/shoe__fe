import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
  });
  middleware.push(logger);
}
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
const store = configureStore({
  reducer: rootReducer,
  middleware,
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
