import Papa from "papaparse";
import { ReactNode, createContext, useEffect, useState } from "react";

import { Planet, SearchQuery } from "../types";

type Query = {
  [key in keyof SearchQuery]?: string;
};

type PlanetData = {
  parsedData: Planet[] | [];
  isLoading: boolean;
  searchQuery: SearchQuery;
  handleSearchQuery?: (searchQuery: Query) => void;
};

const PlanetDataInitialValue: PlanetData = {
  parsedData: [],
  isLoading: true,
  searchQuery: {
    hostname: "",
    discoveryMethod: "",
    discoveryYear: "",
    discoveryFacility: "",
  },
};

export const PlanetDataContext = createContext<PlanetData>(
  PlanetDataInitialValue
);

export const PlanetDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setParsedData] = useState<PlanetData>({
    isLoading: PlanetDataInitialValue.isLoading,
    parsedData: PlanetDataInitialValue.parsedData,
    searchQuery: PlanetDataInitialValue.searchQuery,
  });

  const handleSearchQuery = (query: Query) => {
    setParsedData({
      ...data,
      searchQuery: {
        ...data.searchQuery,
        ...query,
      },
    });
  };

  useEffect(() => {
    const csvFilePath = import.meta.env.BASE_URL + "data.csv";

    fetch(csvFilePath)
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          complete: (result) => {
            const csvData = result.data as Planet[];
            setParsedData((prev) => ({
              ...prev,
              parsedData: csvData,
              isLoading: false,
            }));
          },
          delimiter: ",",
          escapeChar: '"',
          skipEmptyLines: true,
        });
      });
  }, []);

  const values = {
    isLoading: data.isLoading,
    parsedData: data.parsedData,
    searchQuery: data.searchQuery,
    handleSearchQuery,
  };

  return (
    <PlanetDataContext.Provider value={values}>
      {children}
    </PlanetDataContext.Provider>
  );
};
