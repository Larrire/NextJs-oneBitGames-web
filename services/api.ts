import axios from "axios";
import Cookie from 'js-cookie'
import ApiData from "../dtos/ApiData";

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

api.interceptors.response.use(resp => {
  if (resp.headers['access-token']) {
    const apiData: ApiData = {
      'access-token': resp.headers['access-token'],
      client: resp.headers.client,
      expiry: resp.headers.expiry,
      'token-type': resp.headers['token-type'],
      uid: resp.headers.uid
    };

    api.defaults.headers = apiData;
    Cookie.set('@api-data', apiData);
  }

  return resp;
})

api.interceptors.request.use(req => {
  if (req.url.includes('admin')) {
    const apiData: ApiData = JSON.parse(Cookie.get('@api-data'));
    req.headers = apiData
  }

  return req
})

export default api;