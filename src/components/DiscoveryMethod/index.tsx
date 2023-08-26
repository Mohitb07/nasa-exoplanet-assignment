import { usePlanetDataContext } from "../../hooks/useData";
import { Dropdown } from "../Dropdown";

export default function DiscoveryMethod() {
  const { isLoading, parsedData, handleSearchQuery, searchQuery } =
    usePlanetDataContext();

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

  let initialValues: { value: string; label: string }[] = [];
  if (searchQuery?.discoveryMethod) {
    initialValues = [
      {
        value: searchQuery.discoveryMethod,
        label: searchQuery.discoveryMethod,
      },
    ];
  }

  const handleOnChange = (value: { value: string; label: string }) => {
    handleSearchQuery &&
      value &&
      handleSearchQuery({
        discoveryMethod: value.value,
      });
  };

  return (
    <>
      <Dropdown
        options={options}
        values={initialValues}
        loading={isLoading}
        placeholder="Discovery Method"
        onChange={handleOnChange}
      />
    </>
  );
}
