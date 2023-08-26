import { useState } from "react";
import { Planet, SearchQuery } from "../context/PlanetData";
import { usePlanetDataContext } from "./useData";
import toast from "react-hot-toast";

export const useSearch = () => {
  const { parsedData, handleSearchQuery } = usePlanetDataContext();
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<Planet[]>([]);

  const handleSearch = (searchQuery: SearchQuery) => {
    if (
      searchQuery.hostname === "" &&
      searchQuery.discoveryMethod === "" &&
      searchQuery.discoveryYear === "" &&
      searchQuery.discoveryFacility === ""
    ) {
      console.log('inside', searchQuery)
      return toast.error("You must select something");
    }
    setIsSearching(true);
    const filteredData = parsedData.filter((row) => {
      return Object.entries(searchQuery).every(([key, value]) => {
        if (value === "") return true;

        const columnIndexMap = {
          hostname: 1,
          discoveryMethod: 2,
          discoveryYear: 3,
          discoveryFacility: 4,
        };
        const columnIndex = columnIndexMap[key as keyof typeof columnIndexMap];
        if (columnIndex !== undefined) {
          return row[columnIndex] === value;
        }
        return true;
      });
    });
    setSearchResult(filteredData);
    setIsSearching(false);
  };

  const handleDecreasingOrder = (columnIndex: number) => {
    setIsSearching(true);
    const sortedData = [...searchResult].sort((a, b) => {
      return b[columnIndex].localeCompare(a[columnIndex]);
    });
    setSearchResult(sortedData);
    setIsSearching(false);
  };

  const handleIncreasingOrder = (columnIndex: number) => {
    setIsSearching(true);
    const sortedData = [...searchResult].sort((a, b) => {
      return a[columnIndex].localeCompare(b[columnIndex]);
    });
    setSearchResult(sortedData);
    setIsSearching(false);
  };

  const handleFormReset = () => {
    setSearchResult([]);
    handleSearchQuery &&
      handleSearchQuery({
        hostname: "",
        discoveryMethod: "",
        discoveryYear: "",
        discoveryFacility: "",
      });
  };

  return {
    searchResult,
    handleSearch,
    isSearching,
    handleDecreasingOrder,
    handleIncreasingOrder,
    handleFormReset,
  };
};
