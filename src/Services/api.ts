import axios, { Axios, AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:5001'

interface LoginRequestData {
    "email" : string,
    "password" : string
}

interface LoginResponseData {
    userId: number,
    mail: string,
    token: string
}

interface SigninRequestData {
    "fname": string,
    "lname": string,
    "email": string,
    "password": string,
    "phone_number": number
}

interface SigninResponseData {
    userId: string,
    mail: string,
    token: string
}

export const login =async (requestData: LoginRequestData): Promise<LoginResponseData> => {
    const response: AxiosResponse<LoginResponseData> = await axios.post(`${API_BASE_URL}/users/login`, requestData);
    console.log(response.data);
    return response.data;
}

export const signin = async (requestData: SigninRequestData): Promise<SigninResponseData> => {
    const response: AxiosResponse<SigninResponseData> = await axios.post(`${API_BASE_URL}/users/signup`, requestData);
    return response.data;
}

