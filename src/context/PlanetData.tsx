import Papa from "papaparse";
import { ReactNode, createContext, useEffect, useState } from "react";

export type Query = {
  [key in keyof SearchQuery]?: string;
};

export type PlanetData = {
  parsedData: Planet[] | [];
  isLoading: boolean;
  searchQuery: SearchQuery;
  handleSearchQuery?: (searchQuery: Query) => void;
};

export const PlanetDataInitialValue: PlanetData = {
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

export type Planet = [string, string, string, string, string];

export type SearchQuery = {
  hostname: string;
  discoveryMethod: string;
  discoveryYear: string;
  discoveryFacility: string;
};

export const PlanetDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setParsedData] = useState<PlanetData>({
    isLoading: PlanetDataInitialValue.isLoading,
    parsedData: PlanetDataInitialValue.parsedData,
    searchQuery: PlanetDataInitialValue.searchQuery,
  });
  // useSearch(data.searchQuery);

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
            console.log("result", csvData);
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
