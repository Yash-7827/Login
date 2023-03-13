import { AuthActionTypes, AuthAction } from "../Actions/actions";
import { AuthState } from "../Types/auth";

const initialState: AuthState = {
    userId: '',
    mail: '',
    isLoggedIn: false,
    token: null,
    isLoading: false,
    error: null
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch(action.type)
    {
        case AuthActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                userId: action.payload.userId,
                mail: action.payload.mail,
                isLoading: false,
                isLoggedIn: true,
                error: null,
                token: action.payload.token
            }
        case AuthActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        case AuthActionTypes.LOGOUT:
            return {
                ...initialState,
                isLoggedIn: false
            }
        default:
            return state
    }
};

export default authReducer;