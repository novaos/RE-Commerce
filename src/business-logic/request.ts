// import { ProductType } from "../utils/providers/GlobalContext";

// export class ResponseError extends Error {
//   public response: Response;

//   constructor(response: Response) {
//     super(response.statusText);
//     this.response = response;
//   }
// }
// /**
//  * Parses the JSON returned by a network request
//  *
//  * @param  {object} response A response from a network request
//  *
//  * @return {object}          The parsed JSON from the request
//  */
// function parseJSON(response: Response) {
//   if (response.status === 204 || response.status === 205) {
//     return null;
//   }
//   return response.json();
// }

// /**
//  * Checks if a network request came back fine, and throws an error if not
//  *
//  * @param  {object} response   A response from a network request
//  *
//  * @return {object|undefined} Returns either the response, or throws an error
//  */
function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }

  throw new Error('Something went wrong during get a selected product');
}

const BASE_API_URL = 'https://61c1e7539dbcca0017c82212.mockapi.io/api/re-commerce/products';

export async function getProducts(url: string = BASE_API_URL) {
  const fetchResponse = await fetch(url);
  const response = await checkStatus(fetchResponse);

  return response;
}
