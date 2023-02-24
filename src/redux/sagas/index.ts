import { all } from 'redux-saga/effects';
import LoginSaga from './LoginSaga'
import ProductSaga from './ProductSaga';

export default function* rootSaga() {
  yield all([
    ...LoginSaga,
    ...ProductSaga
  ]);
}
