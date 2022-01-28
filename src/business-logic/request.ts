export async function getProducts() {
  const data = await import('../pages/Home/products.json');
  return data.default;
}
