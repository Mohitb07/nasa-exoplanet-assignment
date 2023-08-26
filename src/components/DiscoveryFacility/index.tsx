import { usePlanetDataContext } from "../../hooks/useData";
import { Dropdown } from "../Dropdown";

export default function DiscoveryFacility() {
  const { isLoading, parsedData, handleSearchQuery, searchQuery } =
    usePlanetDataContext();

  const discoveryFacilityColumn = parsedData.map((row) => row[4]);
  const slicedDiscoveryFacility = discoveryFacilityColumn.slice(1);
  const uniqueDiscoveryFacility = new Set(slicedDiscoveryFacility);
  const uniqueDiscoveryFacilityArray = Array.from(uniqueDiscoveryFacility);

  const options = uniqueDiscoveryFacilityArray.map((method) => {
    return {
      value: method,
      label: method,
    };
  });
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
      options={options}
      values={initialValues}
      loading={isLoading}
      placeholder="Discovery Facility"
      onChange={handleOnChange}
    />
  );
}
