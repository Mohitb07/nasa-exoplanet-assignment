import { useMemo } from "react";

import { usePlanetDataContext } from "../../../hooks/useData";
import { Dropdown } from "../Dropdown";
import { processColumn } from "../../../utils/processColumn";

export default function DiscoveryFacility() {
  const { isLoading, parsedData, handleSearchQuery, searchQuery } =
    usePlanetDataContext();

  const memoizedOptions = useMemo(() => {
    const discoveryFacilityColumn = 4;
    const options = processColumn(parsedData, discoveryFacilityColumn);
    return options;
  }, [parsedData]);

  let initialValues: { value: string; label: string }[] = [];
  if (searchQuery?.discoveryFacility) {
    initialValues = [
      {
        value: searchQuery.discoveryFacility,
        label: searchQuery.discoveryFacility,
      },
    ];
  }

  const handleOnChange = (value: { value: string; label: string }) => {
    handleSearchQuery &&
      value &&
      handleSearchQuery({
        discoveryFacility: value.value,
      });
  };

  return (
    <Dropdown
      options={memoizedOptions}
      values={initialValues}
      loading={isLoading}
      placeholder="Discovery Facility"
      onChange={handleOnChange}
    />
  );
}
