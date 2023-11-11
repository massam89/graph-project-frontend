import { api, baseUrl } from "../../services/api";

export const getUsername = () => api("/username", "GET");

export const getList = async (page, size) => {
  const request = await fetch(`${baseUrl}/list?page=${page}&size=${size}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return await request.json();
};
