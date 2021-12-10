import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import React, { useState, createContext } from "react";

export const Context = createContext({
  username: null,
  setUsername: null,
  secret: null,
  setSecret: null,
});

export const ContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
