import React, { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

export const TokenContext = createContext();

export default function TokenContextProvider(props) {
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
  }, [Cookies]);

  const TokenData = {
    token,
    setToken,
  };

  return (
    <TokenContext.Provider value={TokenData}>
      {props.children}
    </TokenContext.Provider>
  );
}
