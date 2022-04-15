import React, { createContext, useState } from "react";
export const InteractionsContext = createContext();
export const InteractionsProvider = ({ children }) => {
  const [polygonClearState, setPolygonClearState] = useState(false);
  return (
    <InteractionsContext.Provider
      value={(polygonClearState, setPolygonClearState)}
    >
      {children}
    </InteractionsContext.Provider>
  );
};
