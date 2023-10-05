import { ajax } from "../../utils/ajax";

export const getUsername = () => ajax('/username', 'GET')