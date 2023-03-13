import { AuthActionTypes, SignupAction } from "../Actions/actions";
import { AuthState } from "../Types/auth";

const initialState: AuthState = {
    userId: '',
    mail: '',
    isLoggedIn: false,
    token: null,
    isLoading: false,
    error: null
}

const signupReducer = (state=initialState, action: SignupAction): AuthState => {
    switch(action.type)
    {
        case AuthActionTypes.SIGNIN_REQUEST:
            return {
                ...initialState,
                mail: action.payload.email,
                isLoading: true,
                isLoggedIn: false,
            };
        case AuthActionTypes.SIGNIN_SUCESS:
            return {
                ...initialState,
                isLoading: false,
                isLoggedIn: true,
                userId: action.payload.userId,
                token: action.payload.token
            }
        case AuthActionTypes.SIGNIN_FAILURE:
            return {
                ...initialState,
                error: action.payload.message,
                isLoading: false,
                isLoggedIn: false,
            }
        default:
            return initialState
    }
}

export default signupReducer;