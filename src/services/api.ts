import axios from "axios";
import md5 from "md5";

const publicKey = "3d124ab7c990ecfd9f96de8c9a8ed196";
const privateKey = "cfa413bc0a2f953266353cbec937ef0cceacbf8f";
const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`,
});

export default api;
