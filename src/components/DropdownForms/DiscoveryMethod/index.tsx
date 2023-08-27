import { useMemo } from "react";

import { usePlanetDataContext } from "../../../hooks/useData";
import { Dropdown } from "../Dropdown";
import { processColumn } from "../../../utils/processColumn";

export default function DiscoveryMethod() {
  const { isLoading, parsedData, handleSearchQuery, searchQuery } =
    usePlanetDataContext();

  const memoizedOptions = useMemo(() => {
    const discoveryMethodColumn = 2;
    const options = processColumn(parsedData, discoveryMethodColumn);
    return options;
  }, [parsedData]);

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
        options={memoizedOptions}
        values={initialValues}
        loading={isLoading}
        placeholder="Discovery Method"
        onChange={handleOnChange}
      />
    </>
  );
}
