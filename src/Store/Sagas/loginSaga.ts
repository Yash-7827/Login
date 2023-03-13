import { call, put, takeLatest } from 'redux-saga/effects';
import { login as apiLogin } from '../../Services/api';
import { AuthActionTypes, loginSuccess, loginFailure, loginRequest } from '../Actions/actions';

function* login({payload: {email, password}}: ReturnType<typeof loginRequest>){
    try{
        const {userId, mail, token} = yield call (apiLogin, {email, password});
        yield put(loginSuccess(userId, mail, token))
    }
    catch (error: any)
    {
        yield put(loginFailure(error.message));
    }
}

function* authSaga() {
    yield takeLatest(AuthActionTypes.LOGIN_REQUEST, login);
}

export default authSaga;
