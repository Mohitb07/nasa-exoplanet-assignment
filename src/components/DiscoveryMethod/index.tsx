import { usePlanetDataContext } from "../../hooks/useData";
import { Dropdown } from "../Dropdown";

export default function DiscoveryMethod() {
  const { isLoading, parsedData, handleSearchQuery } = usePlanetDataContext();

  const discoveryMethodColumn = parsedData.map((row) => row[2]);
  const slicedDiscoveryMethod = discoveryMethodColumn.slice(1);
  const uniqueDiscoveryMethod = new Set(slicedDiscoveryMethod);
  const uniqueDiscoveryMethodArray = Array.from(uniqueDiscoveryMethod);

  const options = uniqueDiscoveryMethodArray.map((method) => {
    return {
      value: method,
      label: method,
    };
  });

  return (
    <>
      <Dropdown
        options={options}
        values={[]}
        loading={isLoading}
        placeholder="Discovery Method"
        onChange={(value) => {
          handleSearchQuery &&
            handleSearchQuery({
              discoveryMethod: value.value,
            });
        }}
      />
    </>
  );
}
