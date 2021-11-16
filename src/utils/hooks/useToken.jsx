import { useState } from 'react';



function useToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = tokenString ? JSON.parse(tokenString) : tokenString;

  const [token, setToken] = useState(userToken);

  const saveToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token.token))
    setToken(token.token);
  }


  return {
    token,
    setToken: saveToken
  }
}

export default useToken;