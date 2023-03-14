import { all,call, put, takeLatest } from 'redux-saga/effects';
import { signin as api } from '../../Services/api'
import { AuthActionTypes, SigninSuccess, SigninFailure, SignupRequest, loginFailure } from '../Actions/actions';

function* signin({payload: {fname, lname, email, password, phone_number}}: ReturnType<typeof SignupRequest>){
    try{
        const {userId, mail, token, message} = yield call(api, {fname, lname, email, password, phone_number});
        yield put(SigninSuccess(userId, token));
    }
    catch(error: any)
    {
        yield put(SigninFailure(error.message));
    }
}

function* signinSaga(){
    yield all([takeLatest(AuthActionTypes.SIGNIN_REQUEST, signin)]);
}

export default signinSaga;