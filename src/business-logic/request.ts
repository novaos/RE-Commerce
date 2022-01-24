// function checkStatus(response: Response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response.json();
//   }

//   throw new Error('Something went wrong during get a selected product');
// }


export async function getProducts() {
  const data = await import('../pages/Home/products.json');
  return data.default;
}
