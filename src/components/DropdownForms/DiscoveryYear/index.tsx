import { useMemo } from "react";
import { usePlanetDataContext } from "../../../hooks/useData";
import { Dropdown } from "../Dropdown";
import { processColumn } from "../../../utils/processColumn";

export default function DiscoveryYear() {
  const { isLoading, parsedData, handleSearchQuery, searchQuery } =
    usePlanetDataContext();

  const memoizedOptions = useMemo(() => {
    const discoveryYearColumn = 3;
    const options = processColumn(parsedData, discoveryYearColumn);
    return options;
  }, [parsedData]);

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
      options={memoizedOptions}
      values={values}
      loading={isLoading}
      placeholder="Discovery Year"
      onChange={handleOnChange}
    />
  );
}
