import api from "../api/axios.js";

export const getProducts = async () => {
  const response = await api.get("/product");

  return response.data;
};

export const getSingleProduct = async (id) => {
  const response = await api.get(`/product/${id}`);

  return response.data;
};

export const createProduct = async (formData) => {
  const response = await api.post("/product", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
