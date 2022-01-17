import axios from 'axios';
import { ProductType } from '../../utils/providers/GlobalContext/globalContext.types';
const BASE_API_URL = 'https://61c1e7539dbcca0017c82212.mockapi.io/api/re-commerce';
const PRODUCT_URL = '/products';

const http = axios.create({
  baseURL: BASE_API_URL,
  responseType: 'json'
});

export const getProducts = async (fetchProducts: (data: ProductType[]) => void) => {
  try {
    const response = await http.get(`${PRODUCT_URL}`);

    if (response.status === 200) {
      fetchProducts(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSelectedProduct = async (id: string, callback: (data: ProductType) => void) => {
  try {
    const response = await http.get(`${PRODUCT_URL}/${id}`);
    callback(response.data);
  } catch (error) {
    throw new Error('Something went wrong during get a selected product');
  }
};

export const addReview = async (id: number | string, data: any) => {
  try {
    const response = await http.put(`${PRODUCT_URL}/${id}`, data);
    console.log({ response });
  } catch (error) {
    console.log(error);
  }
};
