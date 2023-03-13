import { Action } from 'redux';

export enum AuthActionTypes {
    SIGNIN_REQUEST = 'SIGNIN_REQUEST',
    SIGNIN_SUCESS = 'SIGNIN_SUCESS',
    SIGNIN_FAILURE = 'SIGNIN_FAILURE',
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    LOGOUT = 'LOGOUT',
}

interface SigninRequestAction extends Action<typeof AuthActionTypes.SIGNIN_REQUEST> {
    payload: {
        email: string,
        fname: string,
        lname: string,
        password: string,
        phone_number: number
    }
}

interface SigninSuccessAction extends Action<typeof AuthActionTypes.SIGNIN_SUCESS> {
    payload: {
        token: string,
        userId: string
    }
}

interface SigninFailureAction extends Action<typeof AuthActionTypes.SIGNIN_FAILURE> {
    payload: {
        message: string
    }
}

interface LoginRequestAction extends Action<typeof AuthActionTypes.LOGIN_REQUEST> {
    payload: {
        email: string,
        password: string
    }
}

interface LoginSuccessAction extends Action<typeof AuthActionTypes.LOGIN_SUCCESS> {
    payload: {
        userId: string,
        mail: string,
        token: string
    }
}

interface LoginFailueAction extends Action<typeof AuthActionTypes.LOGIN_FAILURE> {
    payload: {
        error: string
    }
}

interface LogoutAction extends Action<typeof AuthActionTypes.LOGOUT> {};

export type AuthAction = LoginRequestAction | LoginSuccessAction | LoginFailueAction | LogoutAction;
export type SignupAction = SigninFailureAction | SigninRequestAction | SigninSuccessAction;

export const loginRequest = (email: string, password: string): LoginRequestAction => ({
    type: AuthActionTypes.LOGIN_REQUEST,
    payload: {
        email,
        password
    }
})

export const loginSuccess = (userId: LoginSuccessAction['payload']['userId'], mail: LoginSuccessAction['payload']['mail'], token: LoginSuccessAction['payload']['token']): LoginSuccessAction => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: {
        userId,
        mail,
        token
    }
})

export const loginFailure = (error: string): LoginFailueAction => ({
    type: AuthActionTypes.LOGIN_FAILURE,
    payload: {
        error
    }
})

export const logout = () => ({
    type: AuthActionTypes.LOGOUT
})

export const SignupRequest = (email: string, 
    fname: string, 
    lname: string, 
    password: string, 
    phone_number: number): SigninRequestAction => ({
    type: AuthActionTypes.SIGNIN_REQUEST,
    payload: {
        email,
        fname,
        lname,
        password,
        phone_number
    }
})

export const SigninSuccess = (userId: SigninSuccessAction['payload']['userId'], token: SigninSuccessAction['payload']['token']) => ({
    type: AuthActionTypes.SIGNIN_SUCESS,
    payload: {
        userId,
        token
    }
});

export const SigninFailure = (message: string) => ({
    type: AuthActionTypes.SIGNIN_FAILURE,
    payload:{
        message
    }
});