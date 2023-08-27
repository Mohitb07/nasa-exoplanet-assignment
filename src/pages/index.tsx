import { Toaster } from "react-hot-toast";

import ClearButton from "../components/Buttons/ClearButton";
import SearchButton from "../components/Buttons/SearchButton";
import DropdownForms from "../components/DropdownForms";
import Table from "../components/Table";
import { useSearch } from "../hooks/useSearch";

const Homepage = () => {
  const {
    searchResult,
    isSearching,
    handleSearch,
    handleDecreasingOrder,
    handleIncreasingOrder,
    handleFormReset,
  } = useSearch();

  return (
    <div className="flex h-screen justify-center">
      <div className="xl:container flex flex-col w-full md:pt-10 pt-4 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4 items-center">
          <DropdownForms />
          <div className="gap-2 md:col-span-2 md:gap-4 lg:col-span-1 grid md:grid-cols-2 lg:grid-cols-2 lg:gap-2">
            <SearchButton onClick={handleSearch} />
            <ClearButton onClick={handleFormReset} />
          </div>
        </div>
        <div className="h-full w-full">
          <Table
            isSearching={isSearching}
            searchResult={searchResult}
            handleDecreasingOrder={handleDecreasingOrder}
            handleIncreasingOrder={handleIncreasingOrder}
          />
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};
export default Homepage;
