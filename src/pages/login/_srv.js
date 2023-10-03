import { ajax } from "../../utils/ajax";

export const login = (body) => ajax('/login', 'POST', body)