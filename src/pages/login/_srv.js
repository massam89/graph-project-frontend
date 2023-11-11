import { api } from "../../services/api";

export const login = (body) => api('/login', 'POST', body)