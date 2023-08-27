import { useMemo } from "react";

import { usePlanetDataContext } from "../../../hooks/useData";
import { Dropdown } from "../Dropdown";
import { processColumn } from "../../../utils/processColumn";

export default function HostnameDropdown() {
  const { isLoading, parsedData, handleSearchQuery, searchQuery } =
    usePlanetDataContext();

  const memoizedOptions = useMemo(() => {
    const hostnameColumn = 1;
    const options = processColumn(parsedData, hostnameColumn);
    return options;
  }, [parsedData]);

  let initialValues: { value: string; label: string }[] = [];
  if (searchQuery?.hostname) {
    initialValues = [
      {
        value: searchQuery.hostname,
        label: searchQuery.hostname,
      },
    ];
  }

  const handleOnChange = (value: { value: string; label: string }) => {
    handleSearchQuery &&
      value &&
      handleSearchQuery({
        hostname: value.value,
      });
  };

  return (
    <Dropdown
      options={memoizedOptions}
      values={initialValues}
      loading={isLoading}
      placeholder="Hostname"
      onChange={handleOnChange}
    />
  );
}
