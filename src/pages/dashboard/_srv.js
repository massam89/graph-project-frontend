import { ajax, baseUrl } from "../../utils/ajax";

export const getUsername = () => ajax('/username', 'GET')

export const getList = async(page, size) => {
    const request = await fetch(`${baseUrl}/list?page=${page}&size=${size}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${ localStorage.getItem('token')}`
        }
    })
    return await request.json()
}