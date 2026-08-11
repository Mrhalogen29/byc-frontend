import api from "../api/axios.js";

export const getOrders = async () => {
  const response = await api.get("/order");
  return response.data;
};

export const getSingleOrder = async (id) => {
  const response = await api.get(`/order/${id}`);
  return response.data;
};

export const updateOrder = async (id, status) => {
  const response = await api.put(`/order/${id}`, {
    status,
  });

  return response.data;
};

export const deleteOrder = async (id) => {
  const response = await api.delete(`/order/${id}`);
  return response.data;
};
