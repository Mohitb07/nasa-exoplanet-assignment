import { usePlanetDataContext } from "../../hooks/useData";
import { Dropdown } from "../Dropdown";

export default function DiscoveryFacility() {
  const { isLoading, parsedData, handleSearchQuery } = usePlanetDataContext();

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

  return (
    <Dropdown
      options={options}
      values={[]}
      loading={isLoading}
      placeholder="Discovery Facility"
      onChange={(value) => {
        handleSearchQuery &&
          handleSearchQuery({
            discoveryFacility: value.value,
          });
      }}
    />
  );
}
