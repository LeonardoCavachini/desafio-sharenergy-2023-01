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

export async function fetchRandomUser(page:number, token: string) {
  const { data } = await axios.post(
    "http://localhost:3001/randomUser", {page},{
      headers: {
        'Authorization': token
      }
    }
  );
  return data
};

export async function fetchHttpCats(httpCode:string, token: string) {
  const { data } = await axios.get(
    `http://localhost:3001/httpCat/${httpCode}`,{
      headers: {
        'Authorization': token
      }
    }
  );
  return data
};

export async function fetchRandomDogs(token: string) {
  const { data } = await axios.get(
    "http://localhost:3001/randomDogs",{
      headers: {
        'Authorization': token
      }
    }
  );
  return `https://random.dog/${data}`
};