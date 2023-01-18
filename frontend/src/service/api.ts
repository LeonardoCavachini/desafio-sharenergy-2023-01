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

export async function fetchUsers(token: string) {
  const { data } = await axios.get(
    "http://localhost:3001/users",{
      headers: {
        'Authorization': token
      }
    }
  );
  return data
};

export async function fetchCreatUsers(name: string, email: string, tel: string, cpf: string, address: string, token: string) {
  const { data } = await axios.post(
    "http://localhost:3001/user/register", {name, email, tel, cpf, address},{
      headers: {
        'Authorization': token
      }
    }
  );
  return data
};

export async function fetchUpdateUsers(id: string|undefined, name: string, email: string, tel: string, cpf: string, address: string, token: string) {
  const { data } = await axios.patch(
    `http://localhost:3001/user/${id}`, {name, email, tel, cpf, address},{
      headers: {
        'Authorization': token
      }
    }
  );
  return data
};

export async function fetchUsersById(id: string|undefined, token: string) {
  const { data } = await axios.get(
    `http://localhost:3001/user/${id}`,{
      headers: {
        'Authorization': token
      }
    }
  );
  return data
};

export async function fetchDeleteUser(id: string|undefined, token: string) {
  await axios.delete(
    `http://localhost:3001/user/${id}`,{
      headers: {
        'Authorization': token
      }
    }
  );
};