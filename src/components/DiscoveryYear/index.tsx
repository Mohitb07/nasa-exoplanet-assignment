import { usePlanetDataContext } from "../../hooks/useData";
import { Dropdown } from "../Dropdown";

export default function DiscoveryYear() {
  const { isLoading, parsedData, handleSearchQuery, searchQuery } =
    usePlanetDataContext();

  const discoveryYearColumn = parsedData.map((row) => row[3]);
  const slicedDiscoveryYearColumn = discoveryYearColumn.slice(1);
  const uniqueDiscoveryyear = new Set(slicedDiscoveryYearColumn);
  const uniqueDiscoveryyearArray = Array.from(uniqueDiscoveryyear);

  const options = uniqueDiscoveryyearArray.map((year) => {
    return {
      value: year,
      label: year,
    };
  });

  let values: { value: string; label: string }[] = [];
  if (searchQuery?.discoveryYear) {
    values = [
      { value: searchQuery.discoveryYear, label: searchQuery.discoveryYear },
    ];
  }

  const handleOnChange = (value: { value: string; label: string }) => {
    handleSearchQuery &&
      value &&
      handleSearchQuery({
        discoveryYear: value.value,
      });
  };

  return (
    <Dropdown
      options={options}
      values={values}
      loading={isLoading}
      placeholder="Discovery Year"
      onChange={handleOnChange}
    />
  );
}
