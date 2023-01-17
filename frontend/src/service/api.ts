import axios, { AxiosResponse } from "axios";

type LoginResponse = {
  token: string;
  message?: string;
};

export async function fetchLogin(username: string, password: string) {
  const { data } = await axios.post<unknown, AxiosResponse<LoginResponse>>(
    "http://localhost:3001/login",
    { username, password },
  );
  return data.token;
};
