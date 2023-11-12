import { baseUrl } from "../../services/api";

export const getCardsRequest = async (page, size) => {
  const request = await fetch(`${baseUrl}/list?page=${page}&size=${size}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return await request.json();
};