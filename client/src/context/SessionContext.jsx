// /* eslint-disable react/prop-types */
// // import { Children } from "react";
// import { createContext, useContext, useState } from "react";

// const SessionContext = createContext();

// export const useSession = () => useContext(SessionContext);

// export const SessionProvider = ({ Children }) => {
//   const [isLoggedIn, SetIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   const login = (userData) => {
//     SetIsLoggedIn(true);
//     setUser(userData);
//   };

//   const logout = (data) => {
//     if (data) {
//       SetIsLoggedIn(false);
//       setUser(null);
//     }
//   };
//   return (
//     <SessionContext.Provider value={(isLoggedIn, user, login, logout)}>
//       {Children}
//     </SessionContext.Provider>
//   );
// };
