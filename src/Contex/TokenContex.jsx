import React,{ createContext, useEffect, useState } from "react";

export let TokenContex = createContext();

import Cookies from 'js-cookie';

export default function TokenContexProvider(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Retrieve the JWT token from cookies
    const jwtToken = Cookies.get('jwt');

    if (jwtToken) {
      // Token found in cookies
      setToken(jwtToken);
    } else {
      // Token not found in cookies
      // Handle the case where the token is not available
      console.log('JWT token not found in cookies');
    }
  }, []);

    let TokenData = {
        token,
        setToken
    }
  return (
    <TokenContexProvider value ={TokenData}>
      {props.children}
    </TokenContexProvider>
  );
}

