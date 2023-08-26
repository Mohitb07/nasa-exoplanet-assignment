import { useMemo } from "react";

import { usePlanetDataContext } from "../../hooks/useData";
import { Dropdown } from "../Dropdown";

export default function HostnameDropdown() {
  const { isLoading, parsedData, handleSearchQuery, searchQuery } =
    usePlanetDataContext();

  const hostnameColumn = parsedData.map((row) => row[1]);
  const slicedHostnameColumn = hostnameColumn.slice(1);
  const uniqueHostnames = new Set(slicedHostnameColumn);
  const uniqueHostnamesArray = Array.from(uniqueHostnames);

  const options = uniqueHostnamesArray.map((hostname) => {
    return {
      value: hostname,
      label: hostname,
    };
  });

  const memoizedOptions = useMemo(() => {
    return options;
  }, [options]);

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
