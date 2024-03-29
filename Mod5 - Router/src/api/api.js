import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const busca = async (url, setDado) => {
  const reponse = await api.get(url);
  setDado(reponse.data);
};
