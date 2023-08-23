import { Dropdown } from "../Dropdown";

export default function DiscoveryFacility() {
  const options = [
    { value: "kepler", label: "Kepler" },
    { value: "k2", label: "K2" },
    { value: "corot", label: "CoRoT" },
  ];
  return (
    <Dropdown
      options={options}
      values={[]}
      loading={false}
      placeholder="Discovery Facility"
    />
  );
}
