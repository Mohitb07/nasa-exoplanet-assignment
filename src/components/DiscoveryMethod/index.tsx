import { Dropdown } from "../Dropdown";

export default function DiscoveryMethod() {
  const options = [
    { value: "kepler", label: "Kepler" },
    { value: "k2", label: "K2" },
    { value: "corot", label: "CoRoT" },
    { value: "kepler-confirmed", label: "Kepler Confirmed" },
  ];
  return (
    <Dropdown
      options={options}
      values={[]}
      loading={false}
      placeholder="Discovery Method"
    />
  );
}
