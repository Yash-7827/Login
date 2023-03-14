import { all,call, put, takeLatest } from 'redux-saga/effects';
import { login as apiLogin } from '../../Services/api';
import { AuthActionTypes, loginSuccess, loginFailure, loginRequest } from '../Actions/actions';

function* login({payload: {email, password}}: ReturnType<typeof loginRequest>){
    try{
        const {userId, mail, token} = yield call (apiLogin, {email, password});
        console.log('hello1');
        yield put(loginSuccess(userId, mail, token))
    }
    catch (error: any)
    {
        yield put(loginFailure(error.message));
    }
}

function* authSaga() {
    yield all([takeLatest(AuthActionTypes.LOGIN_REQUEST, login)]);
}

export default authSaga;
