import { usePlanetDataContext } from "../../hooks/useData";
import { Dropdown } from "../Dropdown";

export default function DiscoveryYear() {
  const { isLoading, parsedData, handleSearchQuery } = usePlanetDataContext();

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

  return (
    <Dropdown
      options={options}
      values={[]}
      loading={isLoading}
      placeholder="Discovery Year"
      onChange={(value) => {
        handleSearchQuery &&
          handleSearchQuery({
            discoveryYear: value.value,
          });
      }}
    />
  );
}
