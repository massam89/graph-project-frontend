import { api } from "../../../services/api";

export const logout = () => api('/logout', 'POST', {})