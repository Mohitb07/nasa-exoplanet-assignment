import { useContext } from "react";
import { PlanetDataContext } from "../context/PlanetData";

export const usePlanetDataContext = () => {
  const context = useContext(PlanetDataContext);
  if (context === undefined) {
    throw new Error(
      "usePlanetDataContext must be used within a PlanetContextProvider"
    );
  }
  return context;
};
