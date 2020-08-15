import React, {createContext, useEffect, useState} from "react";
import {httpClient} from "./core/http-client";

const Context = createContext({
  user: null,
  updateUser: () => {}
});
Context.displayName = "GlobalContext";

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const updateUser = user => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }
  return (
    <Context.Provider value={{user, updateUser}}>
      {children}
    </Context.Provider>
  );
}

export default Context;

