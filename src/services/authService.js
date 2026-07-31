import api from "../api/axios.js";

export const loginUser = async (userData) => {
  const response = await api.post("/users/login", userData);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post("/users", userData);
  return response.data;
};
