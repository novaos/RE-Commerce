import axios from 'axios';
const BASE_API_URL = 'https://61c1e7539dbcca0017c82212.mockapi.io/api/re-commerce';
const PRODUCT_URL = '/products';

const http = axios.create({
  baseURL: BASE_API_URL,
  responseType: 'json'
});

const getProducts = async (fetchProducts: any) => {
  try {
    const response = await http.get(`${PRODUCT_URL}`);

    if (response.status === 200) {
      fetchProducts(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export { getProducts };
