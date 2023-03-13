import { AuthAction } from '../Actions/actions';
import { AuthState } from './auth';

export interface rootState {
    auth : AuthState
}

export type RootState = AuthAction;