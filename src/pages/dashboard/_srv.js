import { ajax } from "../../utils/ajax";

export const getUsername = () => ajax('/username', 'GET')
export const getList = (page, size) => ajax(`/list?page=${page}&size=${size}`, 'GET')