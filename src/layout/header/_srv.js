import { ajax } from "../../utils/ajax";

export const logout = () => ajax('/logout', 'POST', {})