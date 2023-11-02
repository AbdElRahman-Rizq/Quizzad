// import { createContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";

// export const TokenContext = createContext();

// export default function TokenContextProvider(props) {
//   const [token, setToken] = useState(null);
  
//   useEffect(() => {
//     if (token) {
//       // Decode the JWT
//       const decodedToken = jwtDecode(token);

//       // Access the data in the payload
//       const userId = decodedToken.userId;
//       const iat = decodedToken.iat;
//       const exp = decodedToken.exp;

//       console.log(decodedToken);
//       console.log("User ID:", userId);
//       console.log("Issued At:", iat);
//       console.log("Expiration Time:", exp);
//     } else {
//       console.log('No JWT token available.');
//     }
//   }, [token]); 


//   const TokenData = {
//     token,
//     setToken,
//   };

//   return (
//     <TokenContext.Provider value={TokenData}>
//       {props.children}
//     </TokenContext.Provider>
//   );
// }
