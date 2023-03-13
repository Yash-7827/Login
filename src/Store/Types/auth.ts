export interface AuthState {
    userId: string,
    mail: string,
    isLoggedIn: boolean,
    token: string | null,
    isLoading: boolean,
    error: string | null
}