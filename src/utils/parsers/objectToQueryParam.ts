// const objectToQueryParam = (obj: { [key: string]: any }) => {
//   let str = [];
//   for (let p in obj)
//     if (p in obj) {
//       str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
//     }
//   return '?' + str.join('&');
// };

const objectToQueryParam = (obj: { [key: string]: any }) => {
  return `?${new URLSearchParams(obj).toString()}`;
};

export default objectToQueryParam;
