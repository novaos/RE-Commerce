const objectToQueryParam = (obj: any) => {
  var str = [];
  for (var p in obj)
    if (p in obj) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return '?' + str.join('&');
};

export default objectToQueryParam;
