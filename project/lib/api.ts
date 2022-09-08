import axios, { AxiosResponse } from "axios";

const api = axios.create({ baseURL: process.env.API_URL });

export function get<Response>(route: string) {
  return api.get<void, AxiosResponse<Response>>(route).then(x => x.data);
}

export function post<Data>(route: string, data: Omit<Data, "id">) {
  return api.post<Data, AxiosResponse<Data>>(route, data).then(x => x.data);
}
