import { Children, createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ Children }) => {
  const [sharedData, setsSharedData] = useState("Hello World");

  return (
    <MyContext.Provider value={{ sharedData, setsSharedData }}>
      {Children}
    </MyContext.Provider>
  );
};
