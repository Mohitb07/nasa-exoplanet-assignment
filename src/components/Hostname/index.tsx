import { Dropdown } from "../Dropdown";

export default function HostnameDropdown() {
  const options = [
    { value: "kepler", label: "Kepler" },
    { value: "k2", label: "K2" },
    { value: "corot", label: "CoRoT" },
    { value: "kepler-confirmed", label: "Kepler Confirmed" },
    { value: "k2-confirmed", label: "K2 Confirmed" },
    { value: "k2-candidate", label: "K2 Candidate" },
    { value: "tess", label: "TESS" },
    { value: "tess-confirmed", label: "TESS Confirmed" },
  ];
  return (
    <Dropdown
      options={options}
      values={[]}
      loading={false}
      placeholder="Hostname"
    />
  );
}
