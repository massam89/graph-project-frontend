import axios from "axios";

export const baseUrl = process.env.REACT_APP_API_URL;

export async function ajax(url, method, body=false) {
  const token = localStorage.getItem("token");
  const localUrl = `${baseUrl}${url}`;

  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  return await axios({
    url: localUrl,
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: body ? JSON.stringify(body) : null,
  });
}
