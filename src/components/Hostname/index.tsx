import { usePlanetDataContext } from "../../hooks/useData";
import { Dropdown } from "../Dropdown";

export default function HostnameDropdown() {
  const { isLoading, parsedData, handleSearchQuery } = usePlanetDataContext();

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

  return (
    <Dropdown
      options={options}
      values={[]}
      loading={isLoading}
      placeholder="Hostname"
      onChange={(value) => {
        handleSearchQuery &&
          handleSearchQuery({
            hostname: value.value,
          });
      }}
    />
  );
}
