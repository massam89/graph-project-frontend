import { api } from "../../services/api";

export const loginRequest = (body) => api('/login', 'POST', body)
export const logoutRequest = () => api('/logout', 'POST', {})