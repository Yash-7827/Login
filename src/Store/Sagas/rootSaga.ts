import authSaga from "./loginSaga";
import signinSaga from "./signinSaga";
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        authSaga(),
        signinSaga()
    ]);
}